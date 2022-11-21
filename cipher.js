const crypto = require('crypto');

const iv = crypto.randomBytes(16); //генерация вектора инициализации
const key = crypto.scryptSync('secret', 'salt', 32); //генерация ключа

console.log(' key = ', key)
// Output:
// key =  <Buffer 05 ff ae bc ca 41 77 0a f4 25 d4 ba 9b 4e 7b cd ff 53 22 37 dc a9 31 c1 92 a3 6d 94 db 73 07 d4>

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
let encrypted = cipher.update('Just any text');

const result1 = Buffer.concat([encrypted, cipher.final()]);

console.log('Encrypted: ', {
    iv: iv.toString('hex'),
    encryptedData: result1});
// Output:
// Encrypted:  {
//  iv: '07e2ba1b819b6784c2a03d483af5101c',
//  encryptedData: <Buffer 6e 8e b7 33 ee 73 3d 0e d8 44 05 cd 18 bd 7e 66>
// }

    // --------------- Client Side ------------------- //


const decyptCipher = crypto.createDecipheriv('aes-256-cbc', key, iv)

let decrypted = decyptCipher.update(result1)

const result2 = Buffer.concat([decrypted, decyptCipher.final()]);

console.log(result2.toString()); 
// Output:
// Just any text