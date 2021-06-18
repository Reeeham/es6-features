describe("comprehension", function () {

    it("can be used with yield", function () {
        class Company {
            constructor() {
                this.employees = [];
            }
            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }
            // * it means it will be a generator function
            *[Symbol.Iterator]() {
                // return new ArrayIterator(this.employees);
                for (let e of this.employees) {
                    console.log("yield",e)
                    yield e;
                }
            }
        }
        let filter = function* (items, predicate) {
            //comprehension
            //yield* (for(item of items)  if(predicate(item)) item);
            for (let item of items) {
                console.log("filter", item)
                if (predicate(item)) {
                    yield item;
                }
            }
        }
        let take = function*(items, number) {
            console.log("take", item)
            let count = 0;
            if (number < 1) return;
            for (let item of items) {
                console.log("take", item)
                yield item;
                count += 1;
                if (count >= number) {
                    return;
                }
            }
        }
        let count = 0;
        let company = new Company();
        let found = undefined;
        company.addEmployees("Tim", "Sue", "Joy", "Tom");

        // let iterator = company[Symbol.iterator]();
        // iterator.next();

        for (let employee of take(filter(company, e => e[0] == 'S'), 1)) {
            count += 1;
            found = employee;
            console.log("got",employee)
        }
        expect(count).toBe(1);
        expect(found).toBe("Sue");

        
    })
})