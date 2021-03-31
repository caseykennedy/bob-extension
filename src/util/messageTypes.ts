enum MessageTypes {
  // wallet
  GENERATE_NEW_MNEMONIC = 'generate_new_mnemonic',
  CREATE_NEW_WALLET = 'create_new_wallet',
  GET_WALLET_STATE = 'get_wallet_state',
  GET_WALLET_IDS = 'get_wallet_ids',
  GET_WALLET_RECEIVE_ADDRESS = 'get_wallet_receive_address',
  GET_WALLET_BALANCE = 'get_wallet_balance',
  SELECT_WALLET = 'select_wallet',
  UNLOCK_WALLET = 'unlock_wallet',
  LOCK_WALLET = 'lock_wallet',
  FULL_RESCAN = 'full_rescan',
  CHECK_FOR_RESCAN = 'check_for_rescan',
  GET_TRANSACTIONS = 'get_transactions',
  GET_DOMAIN_NAMES = 'get_domain_names',

  // node
  GET_LATEST_BLOCK = 'get_latest_block',
  GET_NAME_BY_HASH = 'get_name_by_hash',
}

export default MessageTypes;
