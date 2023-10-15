import {iUserLogin, iUserRegister} from "../interfaces"

import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth"

const registerUserService = async (userData: iUserRegister) => {
    const auth = getAuth()
  
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      )
      const user = userCredential.user
      await updateProfile(user, {
        displayName: userData.name,
      })
      return [user, 201]
    } catch (error) {
      return [{message: error}, 400]
    }
}
  
const userLoginService = async (data: iUserLogin) => {
    const auth = getAuth()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const user = userCredential.user
      return [user, 200]
    } catch (_error) {
      return [{message: "Email ou senha não correspondem!"}, 401]
    }
}

export {registerUserService, userLoginService}