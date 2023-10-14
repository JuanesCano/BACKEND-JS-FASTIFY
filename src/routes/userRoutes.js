import userCtrl from "../controllers/userController.js";

const userRoutes = (fastify, opts, done) => {
    fastify.get("/", userCtrl.getData);
    fastify.get("/:id", userCtrl.getDataByid);

    fastify.post("/", userCtrl.saveData);

    fastify.put("/:id", userCtrl.actualizar);

    fastify.delete("/:id", userCtrl.eliminar);

    done();
};

export default userRoutes;

import userCtrl from "../controllers/userController.js";