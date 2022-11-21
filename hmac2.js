const crypto = require('crypto') 

function generateSignature (payload, key) {
    return crypto.createHmac('sha1', key).update(payload).digest('hex')
   }

const payload = JSON.stringify( {
    test: 'Just text'
})

const key = 'secret'
const key1 = 'secret1'

console.log(generateSignature(payload, key))
console.log(generateSignature(payload, key1))
// Output:
// f6953265e981c7d3ede47737c2237900eae2c731
// b4e52f6b4c04486b9e1af9bd74d3930bd9ac83fa
