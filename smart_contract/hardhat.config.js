require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qLHdREgZEiEph5Ebvk71q0K2hDRMtDke',
      accounts: ['0953f2e4201f3687cecaf4234262f1b18ebaf412541d8ee90e3ac51b25c2b1af'],
    },
  },
};