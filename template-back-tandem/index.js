import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;

import server from "./src/app.js";

server.listen(PORT, () => {
    //le dice que escuche al puerto y tira mensaje en consola
    console.log(`Server listening in port ${PORT}, FELIZ PRUEBA TECNICA!`); // eslint-disable-line no-console
});
