import dotenv from 'dotenv'
import path from 'path';
// Dotenv Config
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL,
    NODE_ENV:process.env.NODE_ENV,
    BCRYPT_SOLT_ROUND:process.env.BCRYPT_SOLT_ROUND,
    JWT_ACCESS_TOKEN:process.env.JWT_ACCESS_TOKEN,
    CLOUD_NAME:process.env.CLOUD_NAME,
    API_KEY:process.env.API_KEY,
    API_SECRET:process.env.API_SECRET,
}