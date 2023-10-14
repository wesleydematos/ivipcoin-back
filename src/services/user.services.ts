import {iTask, iUserRegister} from "../interfaces"
import {db} from "../server"

async function readData(collectionName:string) {
    const snapshot = await db.collection(collectionName).get()

    const data: any = []
    snapshot.forEach((doc)=>{
        data.push({id: doc.id, ...doc.data()})
    })

    return data
}

async function createData(collectionName: string, data: iUserRegister | iTask) {
    const docRef = db.collection(collectionName).doc()
    await docRef.set(data)

    return docRef
}

const registerUserService = async (userData: iUserRegister) => {
    try {
        await createData("users", userData)
        return [{message: "Usuário criado!"}, 201]
    } catch (error) {
        return [{message: error}, 400]
    }
}

export {registerUserService}