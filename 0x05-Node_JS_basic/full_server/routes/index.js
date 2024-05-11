const express = require('express');

const router = express.Router();

const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

// const appController = new AppController();
// const studentsController = new StudentsController();

router
  .route('/')
  .get(AppController.getHomepage);

router
  .route('/students')
  .get(StudentsController.getAllStudents);

router
  .route('/students/:major')
  .get(StudentsController.getAllStudentsByMajor);

module.exports = router;
