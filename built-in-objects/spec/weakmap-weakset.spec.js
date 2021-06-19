describe("WeakSets",function(){
    it("should not have properties & methods that relate to the entire set",function(){
        var set = new WeakSet();
        expect(set.size).toBe(undefined)
        expect(set.entries).toBe(undefined)//they also have no entries iterator
        expect(set.values).toBe(undefined)//they also have no values iterator
        expect(set.forEach).toBe(undefined)//they don't have a foreach method

    })
    it("should be able to find items with has",function(){
        var set = new WeakSet();
         var item = {name:'Joe'};
         set.add(item);
         expect(set.has(item)).toBe(true)
    })
    it("should be able to remove items with delete",function(){
        var set = new WeakSet();
         var item = {name:'Joe'};
         set.add(item);
         set.delete(item);
         expect(set.has(item)).toBe(false)
    })
    it("should remove all items when clear is called",function(){
        var set = new WeakSet();
         var item = {name:'Joe'};
         set.add(item);
         set.clear();
         expect(set.has(item)).toBe(false)
    })
})

describe("WeakMaps",function(){
    //WeakMaps is like WeakSets they remove all the functionality that deals with maps as a collection
    //so it doesn't have a size property or entries or keys or values or foreach function
    it("should not have properties & methods that relate to the entire set",function(){
        var map = new WeakMap();
        expect(map.size).toBe(undefined)
        expect(map.entries).toBe(undefined)//they also have no entries iterator
        expect(map.values).toBe(undefined)//they also have no values iterator
        expect(map.forEach).toBe(undefined)//they don't have a foreach method

    })
    //but just like regular maps you can do things like : determine the existence of item with has get value with get remove item with delete clear items with clear
    it("should be able to find items with has",function(){
        var map = new WeakMap();
         var item = {name:'Joe'};
         map.add(item);
         expect(map.has(item)).toBe(true)
    })
    it("should be able to remove items with delete",function(){
        var map = new WeakMap();
         var item = {name:'Joe'};
         map.add(item);
         map.delete(item);
         expect(map.has(item)).toBe(false)
    })
    it("should remove all items when clear is called",function(){
        var map = new WeakMap();
         var item = {name:'Joe'};
         map.add(item);
         map.clear();
         expect(map.has(item)).toBe(false)
    })
})