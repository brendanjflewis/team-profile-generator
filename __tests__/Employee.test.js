const Employee = require('../lib/Employee');

//create employee object
test('creates an employee object', () => {
    const employee = new Employee('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

//get employe name
test('gets employee name', () => {
    const employee = new Employee('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get employee ID
test('gets Employee ID', () => {
    const employee = new Employee('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

// get employee email
test('gets Employee email', () => {
    const employee = new Employee('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString));
});

//get employee role
test('gets Employee role', () => {
    const employee = new Employee('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(employee.getRole()).toEqual("Employee");
});