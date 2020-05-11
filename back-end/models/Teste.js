const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  nome:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Teste', esquema, 'testes');