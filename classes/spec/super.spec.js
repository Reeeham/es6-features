describe("the class keyword",function(){

    it("can create a class",function(){
        class Person {
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
                return "free";
            }
           toString(){
               return this.name;
           }
        }
        class Employee extends Person{
            constructor(title,name){
                super(name);
                this._title = title;
            }
            get title(){
                return this._title;
            }
            doWork(){
                //return `${this._name} is working`;
                //super();
                return super.doWork() + " paid";
            }
          
        }
        let e1 = new Employee("Software Engineer","Reham");
        let p1 = new Person("Hanaa");
        
        expect(e1.name).toBe("Reham");

        //expect(e1.doWork()).toBe("Reham is working");
        //expect(p1.doWork()).toBe("free");
        expect(e1.doWork()).toBe("free paid");
        expect(e1.toString()).toBe("Reham");
        expect(p1.toString()).toBe("Hanaa");

        let makeEveryoneWork = function(...people){
            var results = [];
            for (let i = 0; i < people.length; i++) {
                if(people[i] instanceof Person){
                    results.push(people[i].doWork())
                }
            }
            return results;
        }
        expect(makeEveryoneWork(p1,e1)).toEqual(["free","free paid"])
    })
})