describe('Arrays', function(){
    it('should return the first matching element using find', function(){
        var ary = [1,5,10];
        var match = ary.find(item => item > 8);
        expect(match).toBe(10)
    })
    it('should return the first matching index using findIndex', function(){
        var match = [1,5,10].findIndex(item => item > 3);
        expect(match).toBe(1)
    })
    it('should return the first matching index using findIndex', function(){
        var ary = [1,2,3,4,5];
        ary.fill('a')
        expect(ary[3]).toBe('a')
    })
    it('should fill in some of the array when fill is called with args', function(){
        var ary = [1,2,3,4,5];
        ary.fill('a',2,3)
        expect(ary[2]).toBe('a')
        expect(ary[3]).toBe(4)
    })
    it('should copy elements with copywithin', function(){
        var ary = [1,2,3,4]; //[1,2,1,2]
        //ary.copyWithin(2,0,1) [1,2,1,4]
        ary.copyWithin(0,-2)//[3,4,3,4]
        expect(ary[0]).toBe(3)
        expect(ary[1]).toBe(4)
    })   
    it('should create a new array with 1 arg when given 1 arg when s called', function(){
        var ary = new Array(3); //[,,] will produce array with 3 elements
        var ofAry = Array.of(3); // will create array of one element 3
        expect(ary.length).toBe(3);
        expect(ofAry.length).toBe(1);

    })  
    it('should create a new array from an array-like object when from is called', function(){
        var arrayLike = document.querySelectorAll('div'); //it doesn't an array, ex : it doesn't have a foreach function
        expect(arrayLike.forEach).toBe(undefined);

        var fromArray = Array.from(arrayLike);
        expect(fromArray.forEach).toBeDefined();
    })  
  it('should return entries from the entries function', function(){
        var a = ['Joe','Jim','John'];
        var entries = a.entries;
        var firstEntry = entries.next().value;
        expect(firstEntry[0]).toBe(0);
        expect(firstEntry[1]).toBe('Joe');

    })  
  it('should enumerate keys with the keys function', function(){
        var a = ['Joe','Jim','John'];
        var keys = a.keys();
        var firstKey = keys.next().value;
        expect(firstKey).toBe(0);

    })  
    //console.log([...string].filter(c => !forbidden.includes(c)).map(c => parseInt(c)));

})