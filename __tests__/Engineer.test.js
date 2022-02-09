const Engineer = require('../lib/Engineer');

//create engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Brendan', 54, 'brendanjflewis');

    expect(engineer.github).toEqual(expect.anyString);
});

//get github
test('gets engineer github value', () => {
    const engineer = new Engineer('Brendan', 54, 'brendanjflewis@icloud.com', 'brendanjflewis');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString));
});

//get engineer role
test('gets Engineer role', () => {
    const engineer = new Engineer('Brendan', 54, 'brendanjflewis');

    expect(engineer.getRole()).toEqual("Engineer");
});