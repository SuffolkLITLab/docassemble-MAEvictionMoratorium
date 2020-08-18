from docassemble.base.util import log, DARedis, Individual, today#, DAObject

redis = DARedis()

def _amend_signer( signature_data_id, party_id, key, value ):
  if signature_data_id and party_id:
    signature_data = redis.get_data( signature_data_id )
    # set party key
    signature_data['parties'][ party_id ][ key ] = value
    redis.set_data( signature_data_id, signature_data )
    return signature_data['parties'][ party_id ]
  else:
    return None
  
# TODO: Rename to amend_signer_data? amend_party_data? store_signer/party_data?
def amend_signer( signature_data_id, party_id, key, value, signer=None ):
  if signer:
    return _amend_signer( signer.signature_data_id, signer.id, key, value )  
  else:
    return _amend_signer( signature_data_id, party_id, key, value )
  
# set_signer_attrs()?
def get_signer( signature_data_id, party_id, signer=None ):
  # In transition from party_data to signer
  party_data = None
  
  if signature_data_id and party_id:
    if party_id in redis.get_data( signature_data_id )['parties']:
      party_data = redis.get_data( signature_data_id )['parties'][ party_id ]
  
  if party_data and signer:
    signer.signature_data_id = signature_data_id
    signer.id = party_id
    signer.name.first = party_data['name']
    signer.has_signed = party_data['has_signed']
    signer.was_willing = party_data['willing_to_sign']
    return signer
  else:
    return party_data
  
def store_willing_to_sign( signer, value ):
  #signer.willing_to_sign = value  # Not sure about this, but would remove need to do both...
  return amend_signer( signer, 'willing_to_sign', value )

def store_signed_data( signer ):
  signer.signature_date = today()
  amend_signer( signer.signature_data_id, signer.id, 'signature_date', today() )
  amend_signer( signer.signature_data_id, signer.id, 'signature', signer.signature )
  return amend_signer( signer.signature_data_id, signer.id, 'has_signed', True )
  