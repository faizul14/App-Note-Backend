const { addNoteHandler } = require("./handler");

//route
const route = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
];

//export
module.exports = route;