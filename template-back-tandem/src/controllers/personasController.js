import { prisma } from "../connection/index.js";

export default {
    getLista: async (req, res) => {
        res.status(200).json([
            {
                id: "1",
                nombreYApellido: "Pedrito Sanchez",
                email: "pedritosanchez@gmail.com",
                telefono: 3513458373,
                dni: "39765019",
                usuario: "pepitoSanchez2",
                contrasenia: "1234567890",
            },
            {
                id: "2",
                nombreYApellido: "Gustavo Napoli",
                email: "gustavonapoli73@gmail.com",
                telefono: 3513789084,
                dni: "20654897",
                usuario: "chizzo73",
                contrasenia: "1234567890",
            },
            {
                id: "3",
                nombreYApellido: "Alastor Rademon",
                email: "radiodemon_online@gmail.com",
                telefono: 351345837,
                dni: "25938347",
                usuario: "dealornot666",
                contrasenia: "1234567890",
            },
            {
                id: "4",
                nombreYApellido: "Blitzo Helluva",
                email: "whitout0@gmail.com",
                telefono: 351345837,
                dni: "39765019",
                usuario: "blitzImp",
                contrasenia: "1234567890",
            },
            {
                id: "5",
                nombreYApellido: "Stolas Goetia",
                email: "ilikeblitzi@gmail.com",
                telefono: 351345837,
                dni: "39237986",
                usuario: "StolasG",
                contrasenia: "1234567890",
            },
        ]);
    },
    // getProduct: async (req, res) => {
    //     try {
    //         const producto = await prisma.producto.findMany();
    //         res.send(producto);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
};
