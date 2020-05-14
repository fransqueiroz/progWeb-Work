const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  razao_social : {
      type: String,
      required: true
  },
  nome_fantasia : {
      type: String
  },
  cnpj:{
      type: String,
      required: true,
      index:{unique: true} //Não pode repetir CNPJ
  },
  inscricao_estadual:{
      type: String,
      validate:{
          validator: function(val){

              //Inscrição estadual precisa ser Isento ou um numero inteiro
              if(val.toUpperCase() == 'ISENTO') return true
              else if(!isNaN(parseInt(val))) return true
              else return false;
          },
          message:'Inscrição Estadual precisa ser "Isento" ou um número Inteiro'
      },
      required: true
  },
  endereco:{
      type: String,
      required: true
  },
  telefone:{
      type: String,
      required: true
  },
  email:{
      type: String,
      required: true
  }
})

module.exports = mongoose.model('Empresa', esquema, 'empresas');