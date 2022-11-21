// Node.js program to demonstrate the    
// crypto.createHmac() method
 
// Includes crypto module
const crypto = require('crypto');
 
// Defining key
const secret = 'GfG';
 
// Calling createHmac method
const hash = crypto.createHmac('sha256', secret)
                    
                   // updating data
                   .update('GeeksforGeeks')
 
                   // Encoding to be used
                   .digest('hex');crypto 
 
// Displays output
console.log(hash);