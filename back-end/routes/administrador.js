const express = require('express');
const router = express.Router();
const controller = require('../controllers/administrador');

router.post('/', controller.cadastro);
router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.put('/', controller.atualizar);
router.delete('/', controller.excluir);

module.exports = router;