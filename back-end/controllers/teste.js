const Teste = require('../models/Teste');

const controller = {};

controller.novo = async (req, res) => {
  try {
    await Teste.create(req.body);

    res.status(201).send(req.body);
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
}

controller.listar = async (req, res) =>{
    
  if(Object.keys(req.query).length > 0){
   busca(req,res);
  } else{   
      try{
          //find(), sem parâmetros, retorna todas
          const lista = await Teste.find();
          res.send(lista) //HTTP 200 implícito

      }
      catch(error) {
          console.log(error);
          res.status(500).send(error);
      }
  }
}

module.exports = controller;