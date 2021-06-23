describe("Promises",function(){
 it('should execute the callback given to then', function(done){
    var promise = new Promise(function(resolve,reject){
        resolve();
    });
    promise.then(function() {
        done();
    });
 });
 it('should receive the resolved data', function(done){
    var promise = new Promise(function(resolve,reject){
        resolve(1);
    });
    promise.then(function(data) {
        expect(data).toBe(1);
        done();
    });
 });
 it('should fail when rejected', function(done){
    var promise = new Promise(function(resolve,reject){
        reject(Error('oh noes!'));
    });
    promise.then(
        // first successful callback function
        function() {
       
    },
    //second callback function
    function(error){
        expect(error.message).toBe('oh noes!');
        done();
    }
    );
 });
 it('should have a catch', function(done){
    var promise = new Promise(function(resolve,reject){
        reject(Error('oh noes!'));
    });
    promise.catch(
    function(error){
        expect(error.message).toBe('oh noes!');
        done();
    }
    );
 });
 it('should compose when resolved with a promise', function(done){
    var previousPromise = new Promise(function(resolve,reject){
        resolve(3);
    });
    var promise = new Promise(function(resolve,reject){
        resolve(previousPromise);
    });
    promise.then(function(data) { 
        expect(data).toBe(3);
        done();
    });
 });
 it('should have a static resolve', function(done){
    var previousPromise = Promise.resolve(3);
    var promise = Promise.resolve(previousPromise);
    promise.then(function(data){
        expect(data).toBe(3);
        done();
    })
 });
 it('should have a static reject', function(done){
    var promise = Promise.reject(Error('oh noes!'))
    promise.catch(function(error){
        expect(error.message).toBe('oh noes!');
        done();
    })
 });
 it('should be asynchronous', function(done){
    var async = false;
    var promise = new Promise(function(resolve,reject){
        resolve();
    });
    promise.then(function(){
        expect(async).toBe(true);
        done();
    });
    async = true;//then the callback which expects that the async value to be true will execute
 });
 it('should chain sequentially using then', function(done){
    function getOrder(orderId){
        return Promise.resolve({userId:35});
    }
    function getUser(userId){
        return Promise.resolve({companyId:18});
    }
    function getCompany(companyId){
        return Promise.resolve({name:'Pluralsight'});
    }
   getOrder(3).then(function(order){
       return getUser(order.userId);  
   }).then(function(user){
       return getCompany(user.companyId);
   }).then(function(company){
       expect(company.name).toBe('Pluralsight');
       done();
   }).catch(function(error){
       //handle error
   })
 });
 
 it('should execute after all promises with all ', function(done){
    var courseIds = [1,2,3];
    var promises = [];
    function getCourse(courseId){
        var courses = {
            1: {name:"Introduction to Cobol"},
            2: {name: "Yet Another C# Course"},
            3: {name: "How to make billions by blogging"}
        }
        return Promise.resolve(courses[courseId])
    }
    for(var i=0; i<courseIds.length;i++){
        promises.push(getCourse(courseIds[i]));
    }
    
    Promise.all(promises).then(function(values){
        expect(values.length).toBe(3);
        done();
    })
 });
 it('should execute after all promises with all ', function(done){
    var courseIds = [1,2,3];
    var promises = [];
    function getCourse(courseId){
        var courses = {
            1: {name:"Introduction to Cobol"},
            2: {name: "Yet Another C# Course"},
            3: {name: "How to make billions by blogging"}
        }
        return Promise.resolve(courses[courseId])
    }
    for(var i=0; i<courseIds.length;i++){
        promises.push(getCourse(courseIds[i]));
    }
    
    Promise.all(promises).then(function(values){
        expect(values.length).toBe(3);
        done();
    })
    
    Promise.race(promises).then(function(firstValue){
        expect(firstValue.name).toBeDefined();
        done();
    })
 });
});