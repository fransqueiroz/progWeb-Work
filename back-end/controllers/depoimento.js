const Depoimento = require('../models/Depoimento');

const controller = {};

controller.cadastro =async (req, res) => {
  try {
    await Depoimento.create(req.body);

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
      const lista = await Depoimento.find();
    } catch (error) {
      console.log(erro);
      res.status(500).send(erro);
    }
  }
}

controller.excluir = async (req, res) => {
  try{
      const id = req.body._id;
      const obj = await Depoimento.findByIdAndDelete(id);
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