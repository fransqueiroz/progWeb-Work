const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  nome: {
      type : String,
      required: true
  },
  funcao:{
    type: String,
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

module.exports = mongoose.model('Administrador', esquema, 'administradores');
/*
{
	"nome": "Avaliador Ferreira",
	"cpf": "789.456.321-00",
	"funcao": "Professor GRH",
	"endereco": "Rua de Terra nº 789",
	"telefone": "(22) 98456-5678",
	"email":"avaliadorRH@fatec.com.br"
}*/