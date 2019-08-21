const path = require('path');
const envPath = path.join(__dirname, '../../', '.env.test');
const dotenv = require('dotenv').config({ path: envPath });
dotenv.parsed;
