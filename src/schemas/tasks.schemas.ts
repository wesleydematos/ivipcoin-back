import { iCreateTask } from "../interfaces"

import * as yup from "yup"
import { SchemaOf } from "yup"

const taskSchema : SchemaOf<iCreateTask> = yup.object().shape({
    title: yup.string().required("Título obrigatório!"),
    description: yup.string().required("Descrição obrigatória!"),
});

export {taskSchema}