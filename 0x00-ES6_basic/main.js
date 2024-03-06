const createEmployeesObject = require('./11-createEmployeesObject.js');
const createReportObject = require('./12-createReportObject.js');
const createIteratorObject = require('./100-createIteratorObject.js');
const iterateThroughObject = require('./101-iterateThroughObject.js');

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
