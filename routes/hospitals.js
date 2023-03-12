const express = require('express')
const { getHospitals, createHospital, getHospital, deleteHospital, updateHospital } = require('../controller/hospitals')
const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospital)
router.route('/:id').get(getHospital).delete(protect, authorize('admin'), deleteHospital).put(protect, authorize('admin'), updateHospital)

module.exports = router