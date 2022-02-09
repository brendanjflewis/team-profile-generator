
const Manager = require('../lib/Manager');

//create manager object
test('creates a Manager object', () => {
    const manager = new Manager('Brendan', 54, 'brendanjflewis@icloud.com', 3);

    expect(manager.officeNumber).toEqual(expect.any(Number));
}) 

//get role
test('gets role of employee', () => {
    const manager = new Manager('Brendan', 54, 'brendanjflewis@icloud.com');

    expect(manager.getRole()).toEqual("Manager");
});