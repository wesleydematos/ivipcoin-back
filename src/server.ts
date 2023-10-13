import app from "./app"

import {initializeApp} from "firebase/app"
import * as admin from "firebase-admin"

admin.initializeApp()

const firebaseConfig = {
    apiKey: "AIzaSyC9FsYu5RxXsEc5ZxfDsN2ZJ14V3gctAMI",
    authDomain: "to-do-list-c831c.firebaseapp.com",
    projectId: "to-do-list-c831c",
    storageBucket: "to-do-list-c831c.appspot.com",
    messagingSenderId: "523431767352",
    appId: "1:523431767352:web:eeef0a96447283d60de5cd",
    measurementId: "G-VK18MYP21C"
}

export const firebaseApp = initializeApp(firebaseConfig)

app.listen(3030, (): void => console.log("Server running on port 3030"))