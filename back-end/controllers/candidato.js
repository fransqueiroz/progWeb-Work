const Candidato = require('../models/Candidato');

const controller = {};

controller.cadastro = async (req, res) => {
  try {
    await Candidato.create(req.body);

    res.status(201).send(req.body);
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
}

controller.listar = async (req, res) => {

  if(Object.keys(req.query).length > 0){
    busca(req,res);
  }else{
    try {
      const lista = await Candidato.find();
    } catch (error) {
      console.log(erro);
      res.status(500).send(erro);
    }
  }
}

controller.listarUm = async (req, res) => {
  try {
    const id = req.params.id;
    const obj = await Candidato.findById(id);

    if(obj){
      res.send(obj);
    }else{
        res.status(404).end();
    }
  } catch (error) {
    console.log(erro);
    res.status(500).send(erro);
  }
}

controller.atualizar = async (req,res) =>{
  try{
      const id = req.body._id;
      const obj = await Candidato.findByIdAndUpdate(id, req.body);
      if(obj){
          res.status(204).end();
      }else{
          res.status(404).end();
      }
  }
  catch(erro){
      console.log(erro);
      res.status(500).send(erro);
  }
}

controller.excluir = async (req,res) =>{
  try{
      const id = req.body._id;
      const obj = await Candidato.findByIdAndDelete(id);
      if(obj){
          res.status(204).end();
      }else{
          res.status(404).end();
      }
  }
  catch(erro){
      console.log(erro);
      res.status(500).send(erro);
  }
}

module.exports = controller;