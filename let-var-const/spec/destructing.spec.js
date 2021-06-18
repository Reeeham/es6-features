describe("destructing", function () {
    "use strict";
    it("it can destructure arrays", function () {
        //let [x,y] = [3,2];
        //var doWork = function(){
            // return [3,2]
        //};
        let x = 2;
        let y = 3;
        [, x, y,z] = [1, y, x]; // comma to skip some value
        expect(x).toBe(3)
        expect(y).toBe(2)
        expect(z).toBeUndefined();
    })
    it("it can destructure objects", function () {
      
        let doWork = function(){
            return {
                firstName : "Scott",
                lastName: "Allen",
                handles: {

                    twitter: "OdeToCode",
                }
            };

        };
        let {firstName, handles:{ twitter: twitter}} = doWork();
        expect(firstName).toBe("Scott");
        expect(twitter).toBe("OdeToCode");
    })

    it("it works with parameters", function () {
        
        let doWork = function(url, {data,cache,headers}) { 
            return data;
        };

        let result = doWork("api/test",{
            data : "test",
            cache: false
        });

        expect(result).toBe("test");
    })
})