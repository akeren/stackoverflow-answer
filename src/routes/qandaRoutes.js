const express = require('express');
/**
 * import the qanda controller
 */
const qandaController = require('./../controllers/qandaController');

const router = express.Router();

router
	.route('/')
	.get(qandaController.getAllQandas)
	.post(qandaController.createQanda);

router
	.route('/:id')
	.get(qandaController.getQanda)
	.patch(qandaController.updateQanda)
	.delete(qandaController.deleteQanda);

module.exports = router;
