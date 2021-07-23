describe("pow", function() {
    describe("возводит в степень 3", function() {
        function makeTest(x) {
            let expected = x ** 3;
            it(`${x} в степени 3 равен ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let i = 1; i < 6; i++) makeTest(i);
    });
});