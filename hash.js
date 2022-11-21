// Example of Digital Signature


// Node.js program to demonstrate the    
// crypto.createHash() method
 
// Includes crypto module
const crypto = require('crypto');

// Defining key
const secret = 'Hi';

// Calling createHash method
const hash = (text) => crypto.createHash('sha256', secret)
                   .update(text)
                   .digest('hex');

// ------------------------------- //

// Original Text
const OriginalText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

// Transformed Text  - was transformed during transfer ( First letter 'L' -> 'l')
const TransformedText = `lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


console.log(hash(OriginalText));
// Output: 
// 6aa1dca133b95d44da54e8400f6b6bf2c94c777e0dc8c9e0f03cbb85c90de19e

console.log(hash(TransformedText));
// Output:
// 562aaed95a5578de8c64478ae2228223ef560d90a02233466a388f5337b8f634