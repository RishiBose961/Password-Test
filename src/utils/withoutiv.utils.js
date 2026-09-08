import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const algorithm = 'aes-256-ecb';
const secretKey = process.env.SECRET_KEY;

if (!secretKey || Buffer.from(secretKey, 'hex').length !== 32) {
    throw new Error('Invalid SECRET_KEY');
}

function encrypt(text) {
    const cipher = crypto.createCipheriv(
        algorithm,
        Buffer.from(secretKey, 'hex'),
        null
    );

    let encrypted = cipher.update(text.toString(), 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
}

function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(
        algorithm,
        Buffer.from(secretKey, 'hex'),
        null
    );

    let decrypted = decipher.update(
        encryptedText,
        'hex',
        'utf8'
    );

    decrypted += decipher.final('utf8');

    return decrypted;
}

export { encrypt, decrypt };