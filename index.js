const EC = require('elliptic').ec
const ec = new EC('secp256k1')
const { Blockchain, Block } = require('./blockchain')

const shareif = new Blockchain();

// Users
const user1 = ec.genKeyPair();
const user2 = ec.genKeyPair();

// Chats
const chat1 = ec.genKeyPair();
const chat2 = ec.genKeyPair();

// Chat 1
const newBlock = new Block(
  Date.parse('2017-01-01'), 
  shareif.broadcast.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the second message of the Shareif chat",
  shareif.getLatestBlock().hash
);

newBlock.signTransaction(user1);
shareif.addMessage(newBlock)

const newBlock2 = new Block(
  Date.parse('2017-01-01'), 
  shareif.broadcast.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the third message of the Shareif chat",
  shareif.getLatestBlock().hash
);

newBlock2.signTransaction(user1);
shareif.addMessage(newBlock2)

const newBlock3 = new Block(
  Date.parse('2017-01-01'), 
  shareif.broadcast.getPublic('hex'),
  user2.getPublic('hex'),
  "This is the fourth message of the Shareif chat",
  shareif.getLatestBlock().hash
);

newBlock3.signTransaction(user2);
shareif.addMessage(newBlock3)

// Chat 2
const newBlock4 = new Block(
  Date.parse('2017-01-01'), 
  chat1.getPublic('hex'),
  user2.getPublic('hex'),
  "This is the first message of the chat1",
  shareif.getLatestBlock().hash
);

newBlock4.signTransaction(user2);
shareif.addMessage(newBlock4);

const newBlock5 = new Block(
  Date.parse('2017-01-01'), 
  chat1.getPublic('hex'),
  user2.getPublic('hex'),
  "This is the second message of the chat1",
  shareif.getLatestBlock().hash
);

newBlock5.signTransaction(user2);
shareif.addMessage(newBlock5)

const newBlock6 = new Block(
  Date.parse('2017-01-01'), 
  shareif.broadcast.getPublic('hex'),
  user1.getPublic('hex'),
  "This is the fifth message of the shareif",
  shareif.getLatestBlock().hash
);

newBlock6.signTransaction(user1);
shareif.addMessage(newBlock6)

console.log(shareif)