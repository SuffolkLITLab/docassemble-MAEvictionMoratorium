from docassemble.base.util import log, DARedis, Individual#, DAObject

redis = DARedis()
  
def amend_signer( signature_data_id, party_id, key, value ):
  if signature_data_id and party_id:
    signature_data = redis.get_data( signature_data_id )

    # set party key
    signature_data['parties'][ party_id ][ key ] = value
    redis.set_data( signature_data_id, signature_data )
    return signature_data['parties'][ party_id ]
  else:
    return None
  
def get_signer( signature_data_id, party_id ):
  if signature_data_id and party_id:
    if party_id in redis.get_data( signature_data_id )['parties']:
      return redis.get_data( signature_data_id )['parties'][ party_id ]
    else:
      return False
  else:
    return False
  