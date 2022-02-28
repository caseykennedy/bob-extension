enum MessageTypes {
  // wallet
  ADD_TX_QUEUE = "add_tx_queue",
  CHECK_FOR_RESCAN = "check_for_rescan",
  CREATE_BID = "create_bid",
  CREATE_NEW_WALLET = "create_new_wallet",
  CREATE_NEW_WALLET_ACCOUNT = "create_new_wallet_account",
  CREATE_OPEN = "create_open",
  CREATE_REDEEM = "create_redeem",
  CREATE_REVEAL = "create_reveal",
  CREATE_SEND = "create_send",
  CREATE_TX = "create_tx",
  CREATE_UPDATE = "create_update",
  FULL_RESCAN = "full_rescan",
  GENERATE_NEW_MNEMONIC = "generate_new_mnemonic",
  GET_ACCOUNT_INFO = "get_account_info",
  GET_BIDS_BY_NAME = "get_bids_by_name",
  GET_COIN = "get_coin",
  GET_DOMAIN_NAME = "get_domain_name",
  GET_DOMAIN_NAMES = "get_domain_names",
  GET_NAME_NONCE = "get_name_nonce",
  GET_NONCE = "get_nonce",
  GET_PENDING_TRANSACTIONS = "get_pending_transactions",
  GET_TRANSACTIONS = "get_transactions",
  GET_TX_NONCE = "get_tx_nonce",
  GET_TX_QUEUE = "get_tx_queue",
  GET_WALLETS_INFO = "get_wallets_info",
  GET_WALLET_ACCOUNTS = "get_wallet_accounts",
  GET_WALLET_BALANCE = "get_wallet_balance",
  GET_WALLET_IDS = "get_wallet_ids",
  GET_WALLET_INFO = "get_wallet_info",
  GET_WALLET_RECEIVE_ADDRESS = "get_wallet_receive_address",
  GET_WALLET_STATE = "get_wallet_state",
  IMPORT_NONCE = "import_nonce",
  LEDGER_PROXY = "_ledgerProxy",
  LOCK_WALLET = "lock_wallet",
  REJECT_TX = "reject_tx",
  REMOVE_TX_FROM_QUEUE = "removeTxFromQueue",
  RESET_DOMAINS = "reset_domains",
  RESET_TRANSACTIONS = "reset_transactions",
  REVEAL_SEED = "reveal_seed",
  SELECT_WALLET = "select_wallet",
  SIGN_MESSAGE = 'signMessage',
  SIGN_MESSAGE_WITH_NAME = 'signMessageWithName',
  STOP_RESCAN = "stop_rescan",
  SUBMIT_TX = "submit_tx",
  UNLOCK_WALLET = "unlock_wallet",
  UPDATE_TX_FROM_QUEUE = "updateTxFromQueue",
  UPDATE_TX_QUEUE = "update_tx_queue",
  USE_LEDGER_PROXY = "use_ledger_proxy",

  // node
  ESTIMATE_SMART_FEE = "estimate_smart_fee",
  GET_LATEST_BLOCK = "get_latest_block",
  GET_NAME_BY_HASH = "get_name_by_hash",
  GET_NAME_RESOURCE = "get_name_resource",
  HASH_NAME = "hashName",
  VERIFY_MESSAGE = 'verifyMessage',
  VERIFY_MESSAGE_WITH_NAME = 'verifyMessageWithName',

  // settings
  GET_ANALYTICS = "getAnalytics",
  GET_API = "get_api",
  GET_RESOLVE_HNS = "getResolveHns",
  SET_ANALYTICS = "setAnalytics",
  SET_RESOLVE_HNS = "setResolveHns",
  SET_RPC_HOST = "set_rpc_host",
  SET_RPC_KEY = "set_rpc_key",

  // analytics
  MP_TRACK = "mp_track",

  // SQL
  READ_DB_AS_BUFFER = "read_db_as_buffer",
  RESET_DB = "reset_db",

  // Bob3
  CONNECT = 'connect',
  DISCONNECTED = 'disconnected',
  NEW_BLOCK = 'new_block',
  SEND_TX = 'send_tx',
  SEND_OPEN = 'send_open',
  SEND_BID = 'send_bid',
  SEND_REVEAL = 'send_reveal',
  SEND_REDEEM = 'send_redeem',
  SEND_UPDATE = 'send_update',

  // Torrent
  CHECK_TORRENT = 'torrent/check',
  CLEAR_TORRENT = 'torrent/clear',
  CONSUME_TORRENT = 'torrent/consume',
  OPEN_FEDERALIST = 'federalist/open',
}

export default MessageTypes;
