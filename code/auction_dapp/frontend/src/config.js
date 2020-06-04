var DeedRepository = require('./contracts/DeedRepository')
var AuctionRepository = require('./contracts/AuctionRepository')

module.exports = {
    JSONRPC_ENDPOINT: 'http://localhost:8545',
    JSONRPC_WS_ENDPOINT: 'ws://localhost:8546', //'ws://52.59.238.144:8546',
    BZZ_ENDPOINT: 'http://localhost:8500',
    SHH_ENDPOINT: 'ws://localhost:8546',

    DEEDREPOSITORY_ADDRESS: '0xcACCA950285f01076e22CA69fDE9a33452F2d113',
    AUCTIONREPOSITORY_ADDRESS: '0x08233Ab20B5BA521290250B9fF2cC2fAe79271f2',

    DEEDREPOSITORY_ABI: DeedRepository.abi,
    AUCTIONREPOSITORY_ABI: AuctionRepository.abi,

    GAS_AMOUNT: 500000,

    //whisper settings
    WHISPER_SHARED_KEY: '0x8bda3abeb454847b515fa9b404cede50b1cc63cfdeddd4999d074284b4c21e15'

}

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.utils.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
