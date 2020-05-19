const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  nome: {
      type : String,
      required: true
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

/*
{
	"nome": "Ciclano Ferreira",
	"cpf": "001.456.456-00",
	"endereco": "Rua de Asfalto nº 654",
	"telefone": "(22) 98456-5678",
	"email": "ciclano@fatec.com.br"
}
*/