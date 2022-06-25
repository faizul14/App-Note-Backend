// const Hapi = require('@hapi/hapi');
// const routes = require('./routes');
//penulisan ES6MODULE
import Hapi from "@hapi/hapi";
import {route} from "./routes.js";

const init = async () => {
    const server = Hapi.server({
        port : 5000,
        // host : 'localhost',
        //penggunaan host fleksibel untuk di gunakan di level development dan production
          host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        //same-origin policy
        routes: {
            cors: {
            origin: ['*'],
            },
        },
    });

    server.route(route);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();