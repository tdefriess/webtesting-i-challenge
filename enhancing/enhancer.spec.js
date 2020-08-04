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

describe('success()', () => {
    it('should increase enhancement by 1, with a cap of 20, with unchanged durability', () => {
        const item = {
            name: "Crimson Vest",
            durability: 50,
            enhancement: 10
        }

        let newItem = enhancer.succeed(item);

        expect(newItem.enhancement).toBe(11);
        expect(enhancer.succeed({...item, enhancement: 20}).enhancement).toBe(20);
        expect(newItem.durability).toBe(50);
    })
})

describe('fail()', () => {
    it('should reduce durability by 5 if enhancement is below 15, with a floor of 0', () => {
        const item = {
            name: "Crimson Vest",
            durability: 50,
            enhancement: 10
        }

        let newItem = enhancer.fail(item);

        expect(newItem.durability).toBe(45)
        expect(enhancer.fail({...item, durability: 4}).durability).toBe(0);
    })
    it('should reduce durability by 10 to min of 0 if enhancement is 15 or higher', () => {
        const item = {
            name: "Crimson Vest",
            durability: 50,
            enhancement: 15
        }

        let newItem = enhancer.fail(item);

        expect(newItem.durability).toBe(40);
        expect(enhancer.fail({...item, durability: 9}).durability).toBe(0);
    })
    it('should reduce enhancement by 1 if enhancement is greater than 16', () => {
        const item = {
            name: "Crimson Vest",
            durability: 50,
            enhancement: 16
        }

        let newItem = enhancer.fail(item);

        expect(newItem.enhancement).toBe(15);
    })
})