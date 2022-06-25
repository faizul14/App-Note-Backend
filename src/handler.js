// const {nanoId}  = require('nanoid');
// const notes = require('./note');
//penulisan ES6MODULE
import { nanoid } from "nanoid"; "nanoid";
import notes from "./note.js";

const addNoteHandler = (request, h) => {
    const {tittle , tags, body} = request.payload;
    const id = nanoid (16);
    const craeteAt = new Date().toISOString();
    const updateAt = craeteAt;

    const newNote = {
        tittle,
        tags,
        body,
        id,
        craeteAt,
        updateAt,
    };

    notes.push(newNote);

    const isSuccees = notes.filter((note) => note.id === id).length > 0 ;
    if(isSuccees){
        const response = h.response({
            status : 'succes',
            message : 'Data berhasil di tambahkan',
            data : {
                noteId : id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status : 'fail',
        message : 'Catatan gagal di tambahkan',
    });
    response.code(500);
    return response;
};

const testHandler = (request, h) => {
    const response = h.response({
        status : 'succes',
        message : 'Sever succes berjalan',
    });
    response.code(200);
    return response;
}

// module.exports = {addNoteHandler};
//penulisan ES6MODULE
export {addNoteHandler, testHandler};