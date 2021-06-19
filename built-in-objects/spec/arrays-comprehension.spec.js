
    describe("Array Comprehensions",function(){
        it('should create arrays easily', function(){
            var ary = [for (i of [1,2,3]) i]; //[1,2,3]
            expect(ary[2]).toBe(3);

            var ary2 = [for (i of [1,2,3]) i*i]; //[1,2,3]
            expect(ary[2]).toBe(9);

            var ary3 = [for (i of [1,2,3]) if(i<3) i ]; //[1,2]
            expect(ary3.length).toBe(2);

            var ary4 = [for (first of ['william','John','Blake'])
                        for(middle of ['Robert', 'Andrew','John']) 
                         if(first != middle) (first + ' ' + middle + ' Smith')]; //[1,2]
            console.log(ary4);
            expect(ary4[0]).toBe('William Robert Smith');

        })  
    })