from docassemble.base.util import log, DARedis, Individual, today#, DAObject

redis = DARedis()

def store_signer_attribute( signer, key, value ):
  # Returns whether amendment was successful or not
  signature_data_id = signer.signature_data_id
  party_id = signer.id

  if signature_data_id and party_id:
    signature_data = redis.get_data( signature_data_id )
    # set party key
    signature_data['parties'][ party_id ][ key ] = value
    redis.set_data( signature_data_id, signature_data )
    return True
  else:
    return False
  
# Should this set defaults as well if the party data exists, but its attributes aren't defined? It may mean the originating interview wouldn't have to handle it, but it would hide functionality.
def set_signer_attributes( signer, signature_data_id, party_id ):
  signer.valid = False
  
  if signature_data_id and party_id:
    if party_id in redis.get_data( signature_data_id )['parties']:
      party_data = redis.get_data( signature_data_id )['parties'][ party_id ]
  
  if party_data:
    signer.valid = True
    signer.signature_data_id = signature_data_id
    signer.id = party_id
    signer.name.first = party_data['name']
    signer.has_signed = party_data['has_signed']
    signer.was_willing = party_data['willing_to_sign']

  return signer
  
def store_willing_to_sign( signer, value ):
  # This first one is a bit weird and hidden. What's the clearest/most traceable choice?
  # Leaving it to be done in the yml? It seems a bit silly, but maybe that's the way to go.
  # Might leave it in here commented out and explain about why it's not set here.
  #signer.willing_to_sign = value
  return store_signer_attribute( signer, 'willing_to_sign', value )

def store_signature_data( signer ):
  ## These first two are a bit weird and hidden. What's the clearest/most traceable choice?
  #signer.signature_date = today()
  #signer.has_signed = True
  store_signer_attribute( signer, 'signature_date', today() )
  store_signer_attribute( signer, 'signature', signer.signature )
  return store_signer_attribute( signer, 'has_signed', True )
  