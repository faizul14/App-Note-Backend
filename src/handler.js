// const {nanoId}  = require('nanoid');
// const notes = require('./note');
//penulisan ES6MODULE
import { nanoid } from "nanoid";
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
};

const getAllNoteHandler = () => ({
    status : 'succes',
    data : {
        notes
    },
});

const getNoteByIdHandler = (request, h) => {
    const {id} = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    return {
        status : 'succesd',
        message : `Data berhasil di load berdasarkan id ${id}`,
        data : {
            notes,
        },
    };
    const response = h.response({
        status : 'fail',
        message : 'catatan tidak di temukan',
    });

    response.code(404);
    return response;
};

const updateByIdHandler = (request, h) => {
    const {id} = request.params;

    const {tittle , tags , body} = request.payload;
    const updateAt = new Date().toISOString();

    const index = notes.findIndex((n) => n.id === id);
    if(index !== -1){
        notes[index] = {
            ...notes[index],
            tittle,
            tags,
            body,
            updateAt,
        };

        const response = h.response({
            status : 'succes',
            message : 'data berhasil di ubahd',

        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status : 'fail',
        message : 'gagal mengubah data',
    });
    response.code(404);
    return response;
}

const deleteById = (request, h) => {
    const {id} = request.params;

    const index = notes.findIndex((n) => n.id === id);

    if (index !== -1){
        notes.splice(index, 1);

        const response = h.response({
            status : 'success',
            message : 'data berhasil di hapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
            status : 'fail',
            message : 'data gagal di  hapus, id tidak di temukan',
        });
        response.code(404);
        return response;
}



// module.exports = {addNoteHandler};
//penulisan ES6MODULE
export {addNoteHandler, testHandler, getAllNoteHandler , getNoteByIdHandler, updateByIdHandler, deleteById};