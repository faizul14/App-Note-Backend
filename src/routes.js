// const { addNoteHandler } = require("./handler");
//penulisan ES6MODULE
import { addNoteHandler , testHandler } from "./handler.js";

//route
const route = [
    {
        method : 'GET',
        path : '/test',
        handler : testHandler,
    },
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