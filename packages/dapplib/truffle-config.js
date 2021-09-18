require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note muscle collect gloom clog orphan trim'; 
let testAccounts = [
"0xe986e89556c5c82bc53542fd4f37d9d71dfe25ce509217a36c056c1895ac5ece",
"0x6b84aae933ad1b7b66eb30f83d1b096ba0e82c0c680a7387865aba51f841ca7a",
"0x45d0a96e4fd133db1813359f176de6857a91bb333f5d6e71189e8ca0a82f9c15",
"0x72badbcec4aad02db66723b0c65d3dfd97912c3a2ff8921835bb952d83fda1de",
"0x22dcfbe7663d6924a56fc336fb13bbf8e97ef0e0ac6bf9b166cdd87d4e620e00",
"0xa2ae52b2e19d106ea17b3e4679a2192a307df923057278fa665ddb4c748e7d0c",
"0x7a0893f14688e1476ff6f2f093069ad2906de7c762cde103377a4f3b689d26b7",
"0x7c6917b9c7f69c79a21aa98115f6578b863c3380fe74e033b8250e8035322db8",
"0xf794e6fe1177991525a385d9950c0f96978944ace16f8bcbf68e4f301660b609",
"0xa0eab70a23f59b5f6882c7a89513ff11b9afe5e8ae298c4fc8658f88f18cb25e"
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

