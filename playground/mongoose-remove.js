const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c75023f08803d32f4272e3d'}).then((todo) => {

// });

Todo.findByIdAndRemove('5c75023f08803d32f4272e3d').then((todo) => {
    console.log(todo);
});