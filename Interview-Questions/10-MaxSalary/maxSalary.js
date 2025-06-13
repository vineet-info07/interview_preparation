let employees = [
  {
    id: 11,
    name: "Abhinav",
    salary: 75000,
  },
  {
    id: 2131,
    name: "Gaurav",
    salary: 62000,
  },
  {
    id: 3012,
    name: "Raj",
    salary: 32000,
  },
];

function getMaxSalary(employees) {
  const maxSalary = employees.filter(
    (employee) =>
      employee.salary === Math.max(...employees.map((emp) => emp.salary))
  );
  return maxSalary;
}

const sal = getMaxSalary(employees);
console.log(sal);
