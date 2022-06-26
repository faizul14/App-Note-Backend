// const { addNoteHandler } = require("./handler");
//penulisan ES6MODULE
import { addNoteHandler , testHandler , getAllNoteHandler , getNoteByIdHandler , updateByIdHandler, deleteById} from "./handler.js";

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
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : updateByIdHandler,
    },
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteById,
    },
];

//export
// module.exports = route;
//penulisan ES6MODULE
export {route};