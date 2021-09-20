export const TESTNET_CONTRACT_ADDRESSES = {
  DAI: '0xad6d458402f60fd3bd25163575031acdce07538d',
  WBTC: '0x1371597fc11aedbd2446f5390fa1dbf22491752a',
  SOV: '0x6a9A07972D07E58f0daF5122D11e069288A375fB',
  PWETH: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
  SUSHI: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'
} as Record<string, string>

export const TESTNET_TOKENS = Object.keys(TESTNET_CONTRACT_ADDRESSES)

export const TESTNET_NATIVE = ['BTC', 'ETH', 'RBTC', 'BNB', 'NEAR', 'MATIC', 'ARBETH', 'SOL', 'LUNA']
