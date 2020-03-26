const enhancer = require('./enhancer.js');
// test away!

it('should run tests', function() {
    expect(true).toBe(true);
})

describe('repair()', function() {
    it('should return a new object with a durability of 100', function() {
        const item = {
            name: "Crimson Vest",
            durability: 50,
            enhancement: 10
        }

        let newItem = enhancer.repair(item);

        expect(newItem.durability).toBe(100);
        expect(enhancer.repair({...item, durability: 20}).durability).toBe(100)
    })
})