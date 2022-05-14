const router = require('express').Router();
const controller = require('./projectController')


router.route('/').post(controller.create).get(controller.list);

router.route('/:id').put(controller.update).delete(controller.delete)



module.exports = router;