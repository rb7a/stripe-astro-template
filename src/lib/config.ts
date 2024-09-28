//export const {
//  STRIPE_SECRET_KEY: STRIPE_SECRET_KEY,
//} = import.meta.env

import dotenv from 'dotenv';
dotenv.config();

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

//export const STRIPE_SECRET_KEY = import.meta.env.STRIPE_SECRET_KEY

export const CURRENCY = 'usd'
export const INSTAGRAM_URL = 'https://www.instagram.com'
export const X_URL = 'https://twitter.com'
export const FACEBOOK_URL = 'https://www.facebook.com'
export const GITHUB_URL = 'https://github.com'
export const TWITTER_URL = 'https://twitter.com'
export const TIKTOK_URL = 'https://twitter.com'
