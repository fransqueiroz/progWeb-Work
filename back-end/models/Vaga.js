const mongoose = require('mongoose');

const esquema = mongoose.Schema({
  
    nome_vaga:{
        type: String,
        required: true
    },
    descricao:{ // Um resumo sobre a vaga
        type:String,
    },
    localDeTrabalho:{ // Caso a vaga seja para um local da empresa diferente do cadastro
        type: String,
    },
    nivelEscolaridade:{ //Defini o nível minímo de escolaridade para o candidato
        type: String,
        required:true
    },
    beneficios:{ //Lista Beneficios
        type: String
    },
    horarioTrabalho:{ // Caso houver um horário especifico de trabalho
        type: String,
    },
    empresa:{ // Referencia a empresa que cadastra a vaga
        type: mongoose.ObjectId,
        ref: 'Empresa',
        required: true
    }
},{
    //cria a data e atualização
    timestamps: true,
})

module.exports = mongoose.model('Vaga', esquema, 'vagas');

// {
// 	"nome_vaga": "Estágio de Analista Contábil",
// 	"descricao": "Estamos à procura de um candidato para preencher esta posição em uma empresa formidável. - Rotinas de Fechamento Contábil mensal e trimestral; - Cálculo de Impostos Federais Diretos, Pis e Cofins e apuração de IR/CS;",
// 	"localDeTrabalho": "Rua: Contábil, Franca - São Paulo",
// 	"nivelEscolaridade": "Cursando 2 ano de Ciências Contábeis",
// 	"beneficios": "muito trabalho, Seguro de Vida",
// 	"horarioTrabalho": " Periodo Integral",
// 	"empresa": "5ec121f0d001da55f89cb3eb"
// }