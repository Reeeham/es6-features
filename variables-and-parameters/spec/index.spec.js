describe("how let works", function() {
    it("will provide block scoping, unlike var",function(){
    var doWork = function(flag){
      if(flag){
        var x = 3;
 
      }
      return x;
    
    };
    var result = doWork(true);
    expect(result).toBe(3)
    
    });
  });

  describe("how let works", function() {
    it("will provide block scoping with for",function(){
    var doWork = function(flag){
      
      for (let i = 0; i < 10; i++) {
     
        
      }
      return i;
    
    };
    var result = doWork();
    expect(result).toBe(10)
    
    });
  });///it won't pass the test because i is not defined

  describe("using const",function(){
    "use strict";
    it("will make a variable readonly ", function(){
      const MAX_SIZE = 10;
      //  MAX_SIZE = 12; syntax error
      expect(MAX_SIZE).toBe(10)
    })

    it("can shadow outer declaration",function(){
      //if(true) {      const x=12;      } will give error x is not defined
      const x=12;
      var doWork = function() {
        var x =10;
        return x;
      }
      var result = doWork();
      expect(result).toBe(10);
      expect(x).toBe(12);
  
    })///it will pass the test 

  })///it will pass the test 

 