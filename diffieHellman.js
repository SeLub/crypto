// Example of 
GhjDigital Signature
// https://www.youtube.com/watch?v=TzOFFV1beTw

const crypto = require('crypto');

// .getDiffieHellman
// Creates a predefined DiffieHellmanGroup key exchange object. 
// he following groups are supported:
// https://www.ietf.org/rfc/rfc3526.txt

// 'modp14' (2048 bits, RFC 3526 Section 3)
// 'modp15' (3072 bits, RFC 3526 Section 4)
// 'modp16' (4096 bits, RFC 3526 Section 5)
// 'modp17' (6144 bits, RFC 3526 Section 6)
// 'modp18' (8192 bits, RFC 3526 Section 7)



const alice = crypto.getDiffieHellman('modp15');
const bob = crypto.getDiffieHellman('modp15');

// .generateKeys()
// Generates private and public Diffie-Hellman key values, and returns the public key in the specified encoding. This key should be transferred to the other party. If encoding is provided a string is returned; otherwise a Buffer is returned.
alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

//To verify we are using the 3072 bit prime
console.log(alice.getPrime().toString('hex').length * 4);
//To verify both have generated the same secret
console.log(aliceSecret === bobSecret);
//The value of shared secret of Alice
console.log('aliceSecret: ', aliceSecret);
//The value of shared secret of Bob
console.log('bobSecret: ', bobSecret);