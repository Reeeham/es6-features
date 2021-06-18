describe("default parameters", function () {
    "use strict";
    it("provide defaults", function () {
        
        var doWork = function(name="Scott") { 
            return name;
        };
         var result  =  doWork(null) // it will return Scott
         var result  =  doWork(undefined) // it will return Scott
         var result  =  doWork() // it will return Scott
         var result  =  doWork("") // it will return empty string so it will fail the test 
         expect(result).toBe("Scott")
    })
    it("will provide a value for undefined", function () {
        
        var doWork = function(a = 1, b= 2, c= 3) { 
            return [a,b,c];
        };
        let [a,b,c] = doWork(5, undefined);
         expect(a).toBe(5)
         expect(b).toBe(2)
         expect(c).toBe(3)
    })
    it("it works with destructing", function () {
        
        let doWork = function(url, 
            {data = "Scott",
            cache = true,
            headers}) { 
            return data;
        };

        let result = doWork("api/test",{
            cache: false
        });

        expect(result).toBe("Scott");
    })
})