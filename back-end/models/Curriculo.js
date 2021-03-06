const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    dadosPessoais:{
        type: mongoose.ObjectId,
        ref: 'Candidato',
        required: true
    },
    objetivo:{
        type: String
    },
    formacaoAcademica:{
        type: String,
        required: true
    },
    experiencaProfissional:{
        type: String,
        required: true
    },
    idiomas:{ // Lista de Idiomas
        type: String
    },
    informacoesAdicionais:{ // Informações Adicionais caso haja
        type: String
    }
},{
    //cria a data e atualização
    timestamps: true
})

module.exports = mongoose.model('Curriculo', esquema, 'curriculos');

/*
{
 "dadosPessoais" : "5ec13e542b14e66d6bcd7e16"	,
	"objetivo": "Conseguir primeiro emprego",
	"formacaoAcademica": "5 semestre de GPI",
	"experiencaProfissional": "Trabalhou num bar",
	"idiomas" : "Espanhou, Português",
	"informacoesAdicionais": ""
}
*/