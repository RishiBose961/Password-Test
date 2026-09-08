import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config(); 

//put in git bash terminal to generate a new secret key
//openssl rand -hex 32

const algorithm = 'aes-256-gcm';
const secretKey = process.env.SECRET_KEY; 
if (!secretKey || Buffer.from(secretKey, 'hex').length !== 32) {
    throw new Error("Invalid SECRET_KEY");
}

function encrypt(text) {
    const iv = crypto.randomBytes(16);
    // console.log("IV:", iv.toString('hex'));
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    let encrypted = cipher.update(text.toString(), 'utf8', 'hex');
    // console.log("Encrypted:", encrypted); 
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    // console.log("Auth Tag:", authTag); 

    return `${iv.toString('hex')}:${encrypted}:${authTag}`;
}

function decrypt(encryptedText) {
    const [iv, encrypted, authTag] = encryptedText.split(':');

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), Buffer.from(iv, 'hex'));
    decipher.setAuthTag(Buffer.from(authTag, 'hex')); // Set authentication tag for integrity check

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

export { encrypt, decrypt };
