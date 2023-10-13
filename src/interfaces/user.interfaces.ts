interface iUserRegister {
    email: string;
    password: string;
    name: string;
}

interface iUserLogin {
    email: string;
    password: string;
}

export {iUserRegister, iUserLogin}