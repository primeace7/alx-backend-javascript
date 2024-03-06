module.exports = function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
};
