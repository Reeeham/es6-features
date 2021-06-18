describe("the class keyword",function(){
    it("can create a class",function(){
       
        class Employee{
            constructor(name){
                this.name = name;
            }
            set name(name){
                if(name !== undefined)
                {
                    this._name = name;
                }
            }
            get name(){
                return this._name;
            }

            doWork(){
                return "Complete!";
            }
          
        }
        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");
        e1.name = "Reham";

        expect(e1.name).toBe("Reham");
        expect(e2.name).toBe("Alex");

        expect(e1.doWork()).toBe("Complete!");
        expect(Employee.prototype.doWork.call(e1)).toBe("Complete!")
    })
})