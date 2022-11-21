// Example of Document management -> a seal of approval
// File Management -> use hashes to identify files and delete dublicates
// (in case there are many files - using hashes can save significant amount of time)

// Node.js program to demonstrate the    
// crypto.createHash() method
 
// Defining filename
const filename = process.argv[2];

console.log(`\nCreating Hash for file: ${filename}\n`)
 
// Includes crypto and  fs module
const crypto = require('crypto');
const fs = require('fs');
 
// Creating Hash
const hash = crypto.createHash('sha256', 'Geeksforgeeks');
 
// Creating read stream
const input = fs.createReadStream(filename);
 
input.on('readable', () => {
  
 // Calling read method to read data
  const data = input.read();
  if (data)
     
    // Updating
    hash.update(data);
  else
   {
    // Encoding and displaying filename
    console.log(`File: ${filename}\nHash: ${hash.digest('base64')}`);
  }
});
console.log(`Program done: \n`);

// Creating Hash for file: echd-aes.js

// Program done: 

// File: echd-aes.js
// Hash: uwJOpVU2N2qdAiwJlMvCgbMJ2mrfroyAlF4NvHvSjRs=