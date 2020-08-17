from docassemble.base.util import log, DARedis, Individual#, DAObject

redis = DARedis()
  
def amend_signer( data_keys, key, value ):
  if 'signature_data_id' in data_keys:
    party_id = data_keys['party_id']
    action_data = redis.get_data( data_keys['signature_data_id'] )

    # set party key
    action_data['parties'][ party_id ][ key ] = value
    redis.set_data( data_keys[ 'signature_data_id' ], action_data )
    return action_data['parties'][ party_id ]
  else:
    return None
  
def get_signer( data_keys ):
  if 'signature_data_id' in data_keys:
    party_id = data_keys['party_id']
    if party_id in redis.get_data( data_keys['signature_data_id'] )['parties']:
      return redis.get_data( data_keys['signature_data_id'] )['parties'][ party_id ]
    else:
      return False
  else:
    return False
  