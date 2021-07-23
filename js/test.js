const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

describe('User.getInfo', () => {
    describe('gets name attribute', () => {
        function makeTest(user) {
            let name = user.name;
            it(`Parameter "name" gets attribute user.name = ${name}`, () => {
                assert.equal(user.getInfo("name"), name);
            });
        }
    
        for (let i = 0; i < 5; i++) {
            let randomName = generateString(5);
            let randomAge = Math.random() * 30;
            makeTest(new User(randomName, randomAge));
        }
    });

    describe('gets age attribute', () => {
        function makeTest(user) {
            let age = user.age;
            it(`Parameter "age" gets attribute user.age = ${age}`, () => {
                assert.equal(user.getInfo("age"), age);
            });
        }
    
        for (let i = 0; i < 5; i++) {
            let randomName = generateString(5);
            let randomAge = Math.random() * 30;
            makeTest(new User(randomName, randomAge));
        }
    });
});