import { prisma } from "../connection/index.js";

export default {
    getProduct: async (req, res) => {
        try {
            const producto = await prisma.producto.findMany();
            res.send(producto);
        } catch (error) {
            console.log(error);
        }
    },
};
