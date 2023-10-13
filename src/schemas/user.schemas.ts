import {iUserRegister, iUserLogin} from "../interfaces"

import * as yup from "yup"
import { SchemaOf } from "yup"

const registerSchema : SchemaOf<iUserRegister> = yup.object().shape({
    email: yup
    .string()
    .email("Informe um email válido!")
    .required("Email obrigatório!"),
    password: yup
    .string()
    .min(6, "Insira uma senha com pelo menos 6 dígitos!")
    .required("Senha obrigatória!"),
    name: yup.string().required("Nome obrigatório!")
});

const loginSchema : SchemaOf<iUserLogin> = yup.object().shape({
    email: yup.string().email().required("Email obrigatório!"),
    password: yup.string().required("Senha obrigatória!")
});
  
export {registerSchema, loginSchema}