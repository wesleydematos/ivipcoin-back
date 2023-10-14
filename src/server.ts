import "dotenv/config"  

import app from "./app"

import { initializeApp } from "firebase/app"
import * as admin from "firebase-admin"

admin.initializeApp()

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)

app.listen(3030, (): void => console.log("Server running on port 3030"))