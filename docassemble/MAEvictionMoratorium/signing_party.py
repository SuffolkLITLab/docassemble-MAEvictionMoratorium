from docassemble.base.util import log, DARedis, Individual, today#, DAObject

redis = DARedis()

"""
This script supplies functions for interacting with the signer's stored data - data relevant to signatures. It is currently using Redis. It has two main purposes:
1. Setting attributes of the signer based on the stored data.
1. Storing new attributes of the signer.

The data is assumed to be stored as a dictionary.

(Not sure this is correct documentation syntax, but not sure where to put these general concepts.)
"""

def store_signer_attribute( signature_data_id, party_id, key, value ):
  """Stores one signer attribute in the dictionary of that signing party (currently using Redis.)
  
  * TODO: On failure, return dict with reason for failure.
  * TODO: If invalid `party_id` used, store it as invalid.
  
  Paramaters
  ----------
  signature_data_id: str
    Key for the data dict in the store. Avoids knowing the names of the attribute of the signer.
  party_id: str
    Key for a particular party in data dict. Avoids knowing the names of the attribute of the signer.
  key: str
    String of key in the signing party that should be changed.
  value: any
    Value to which the signing party key should be set.
    
  Returns
  ----------
  Returns True if the data got set. Otherwise returns False.
  """
  
  if signature_data_id and party_id:
    signature_data = redis.get_data( signature_data_id )
    # Don't set party value unless the party_id is valid.
    if party_id in signature_data['parties']:
      signature_data['parties'][ party_id ][ key ] = value
      redis.set_data( signature_data_id, signature_data )
      return True
    else:
      return False
  else:
    return False
  
  
# Should this set defaults as well if the party data exists, but its attributes aren't defined? It may mean the originating interview wouldn't have to handle it, but it would hide functionality.
# Could also loop through the data and give all dict values to the signer.
def set_signer_attributes( signer, signature_data_id, party_id ):
  """If data is vaild, sets attributes of an object based on the data in a dictionary in the store (currently using Redis.)
  
  One attribute is always set: `.valid`. It begins as False and is only set to True if the data keys are valid. If the keys are valid, these attributes are set using the data in the store:
  * `.signature_data_id`
  * `.id`
  * `.name.first`
  * `.has_signed`
  * `.was_willing` (whether the signer was willing to sign the last time they came to the site)
  
  * TODO: Provide more useful feedback about failure to the developer.
  * TODO: If invalid `party_id` used, store it as invalid.
  
  Paramaters
  ----------
  signer: Individual
    An obj of the Individual class that will be given the attributes if keys are valid.
  signature_data_id: str
    Key for the data dict in the store. Avoids knowing the names of the attribute of the signer.
  party_id: str
    Key for a particular party in data dict. Avoids knowing the names of the attribute of the signer.
    
  Returns
  ----------
  Returns object that has had its attributes set.
  """
  
  signer.valid = False
  party_data = None
  
  if signature_data_id and party_id:
    if party_id in redis.get_data( signature_data_id )['parties']:
      party_data = redis.get_data( signature_data_id )['parties'][ party_id ]
  
  if party_data:
    signer.valid = True
    signer.name = party_data['name']
    signer.has_signed = party_data['has_signed']
    signer.was_willing = party_data['willing_to_sign']
    #for key, value in party_data.items():
    #  #signer.set_attr( key, value, None )
    #  setattr( signer, key, value )
    signer.signature_data_id = signature_data_id
    signer.id = party_id

  return signer
  
  
def store_willing_to_sign( signer, value ):
  """Try to update the value for `.willing_to_sign` in the data store.
  
  Note: It's possible this could also change attributes on the signer itself. 
  
  Paramaters
  ----------
  signer: Individual
    An obj of the Individual class that will be given the attributes if keys are valid.
  value: bool
    Whether the signing party was willing to sign.
    
  Returns
  ----------
  Returns True if the data got set. Otherwise returns False.
  """
  
  # This first one is a bit weird and hidden. What's the clearest/most traceable choice?
  # Leaving it to be done in the yml? It seems a bit silly, but maybe that's the way to go.
  # Might leave it in here commented out and explain about why it's not set here.
  #signer.willing_to_sign = value
  return store_signer_attribute( signer.signature_data_id, signer.id, 'willing_to_sign', value )


def store_signature_data( signer ):
  """Try to update signature values in the data store.
  
  These include:
  * `signature`
  * `signature_date`
  * `has_signed`
  
  Paramaters
  ----------
  signer: Individual
    An obj of the Individual class that will be given the attributes if keys are valid.
    
  Returns
  ----------
  Returns True if the data got set. Otherwise returns False.
  """
  ## These first two are a bit weird and hidden. What's the clearest/most traceable choice?
  #signer.signature_date = today()
  #signer.has_signed = True
  # TODO: Set persistance and privacy of signature? Seems to funciton without, or is that in other code somewhere?
  store_signer_attribute( signer.signature_data_id, signer.id, 'signature', signer.signature )
  store_signer_attribute( signer.signature_data_id, signer.id, 'signature_date', today() )
  return store_signer_attribute( signer.signature_data_id, signer.id, 'has_signed', True )
  