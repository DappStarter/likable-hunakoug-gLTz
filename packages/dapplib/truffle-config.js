require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note peace punch gesture fork tail someone'; 
let testAccounts = [
"0x8f03b96dc327902c44151366322ee963eacf8aafd2a64beb518c10ec03cc5cdb",
"0xacfebf6c0e85b0cc7477c78dd588044fe63d3277667659ce1e8dbc164dad2d17",
"0x394154f436a555b7aae85b78ea03053bc7cf8a75bd978d4fc00d8311e75d4035",
"0x06e5acc5ebd74f644aaff2d48609a01623678e5003fec953ac4395f76335f913",
"0xd692e966f6c0a963ab625801808a77a53b60afca389ea6a456f1b6dbd328587e",
"0x239650654ff5973f35bc8a443c2ce48be77802bc2790916d04d53cbaaf90532d",
"0x27e76e7e3fc2419675f03803feb14d99306c3c6845e92e4bc2783810594b62d9",
"0x52bcd0dd8ee6ab2dfb4a45758781e0fe1133ad5a7b734fa50b56f9d97d1793cc",
"0xae55c4ff7b6dbabd5b2cb78e46a3ffa8f4ada5948c734a7c072eb32267004172",
"0x35f881f9c09d215d9cb4873a266afb439f8635059e07baf6656a94724fd8a084"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

