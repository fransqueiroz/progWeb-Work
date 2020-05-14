const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  nome: {
      type : String,
      required: true
  },
  sobrenome: {
      type : String
  },
  cpf: {
    type: String,
    required: true,
    index:{unique: true}
  },
  endereco:{
      type:String,
      required:true
  },
  telefone: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  }

})

module.exports = mongoose.model('Candidato', esquema, 'candidatos');