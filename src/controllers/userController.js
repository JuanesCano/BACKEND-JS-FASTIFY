import { response } from "../helpers/response.js";

let data = [
    {
        _id: "1",
        name: "juan",
        lastname: "cano",
        age: 18
    },
    {
        _id: "2",
        name: "esteban",
        lastname: "cano",
        age: 18
    },
    {
        _id: "3",
        name: "isabela",
        lastname: "mart",
        age: 16
    }
]

const userCtrl = {};

userCtrl.getData = (req, reply) => {
    try {
        response(reply, 200, true, data, "Lista de usuarios")

    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

userCtrl.getDataByid = (req, reply) => {
    try {
        const {id} = req.params;
        const user = data.find((item) => item._id === id);
        if(!user){
            return response(reply, 404, false, "", "Usuario no encontrado")
        }
        response(reply, 200, true, user, "test");
    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

userCtrl.saveData = (req, reply) => {
    try {
        const { _id, name, lastname, age } = req.body
        data.push({ _id, name, lastname, age : parseInt(age) })
        response(reply, 201, true, {
            name,
            lastname,
            age,
        }, "Registro guardado")

    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

userCtrl.actualizar = (req, reply) => {
    try {
        const {id} = req.params;
        const { _id, name, lastname, age } = req.body
        const newData = data.map(item => item._id === id? { _id, name, lastname, age : parseInt(age) } : item);
        data = newData;
        response(reply, 200, true, "", "Usuario actualizado");
    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

userCtrl.eliminar = (req, reply) => {
    try {
        const {id} = req.params;
        const newData = data.filter((item) => item._id !== id);
        data = newData;

        response(reply, 200, true, id, "Metodo Del");
    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}

export default userCtrl;