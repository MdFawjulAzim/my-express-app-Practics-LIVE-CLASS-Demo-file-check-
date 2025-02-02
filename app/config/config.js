import * as path from "node:path";

export const MONGODB_CONNECTION="";

export const JWT_SECRET = "kgqecnuwef5v7fhkc445fjs";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const Max_JSON_SIZE = "50mb";
export const URL_ENCODER = true;


export const REQUEST_LIMIT_TIME = 15*60*1000;//15 min
export const REQUEST_LIMIT_NUMBER =3000;//per 15 Min 3000 Requests Allowed


export const WEB_CACHE=false;
export const PORT=5080;

export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName);
}