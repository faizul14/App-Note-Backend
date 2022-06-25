// const { addNoteHandler } = require("./handler");
//penulisan ES6MODULE
import { addNoteHandler } from "./handler.js";

//route
const route = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
];

//export
// module.exports = route;
//penulisan ES6MODULE
export {route};