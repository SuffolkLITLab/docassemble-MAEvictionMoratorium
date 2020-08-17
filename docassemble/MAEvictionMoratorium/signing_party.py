from docassemble.base.util import log, DARedis, Individual#, DAObject

redis = DARedis()
  
def amend_signer( data, key, value ):
  if 'interview_data_id' in data:
    party_id = data['party_id']
    action_data = redis.get_data( data['interview_data_id'] )

    # set party key
    action_data['parties'][ party_id ][ key ] = value
    redis.set_data( data[ 'interview_data_id' ], action_data )
    return action_data['parties'][ party_id ]
  else:
    return None
  
def get_signer( data ):
  if 'interview_data_id' in data:
    party_id = data['party_id']
    if party_id in redis.get_data( data['interview_data_id'] )['parties']:
      return redis.get_data( data['interview_data_id'] )['parties'][ party_id ]
    else:
      return False
  else:
    return False