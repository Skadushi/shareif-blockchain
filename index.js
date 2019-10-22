const EC = require('elliptic').ec
const ec = new EC('secp256k1')
const { Blockchain, Block } = require('./blockchain')

const shareif = new Blockchain();

const chatKeys = ec.genKeyPair();

const user1 = ec.genKeyPair();
const user2 = ec.genKeyPair();

const newBlock = new Block(
  Date.parse('2017-01-01'), 
  chatKeys.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the seccond message of the Shareif chat",
  shareif.getLatestBlock()
);

const newBlock2 = new Block(
  Date.parse('2017-01-01'), 
  chatKeys.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the seccond message of the Shareif chat",
  shareif.getLatestBlock()
);

const newBlock3 = new Block(
  Date.parse('2017-01-01'), 
  chatKeys.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the seccond message of the Shareif chat",
  shareif.getLatestBlock()
);

newBlock.signTransaction(user1);

// console.log(newBlock)
shareif.addMessage(newBlock)

// console.log(shareif)

console.log(shareif.getAllMessages())
