import {iUserRegister} from "../interfaces"

const registerUserService = async (userData: iUserRegister) => {
    console.log(userData)
    return userData
}

export {registerUserService}