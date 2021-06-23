describe("async generators", function () {
    it("should be difficult to read with regular async", function () {
        function oldPause(delay, cb) {
            setTimeout(function () {
                console.log('paused for ' + delay + 'ms');
                cb();
            }, delay)
        }
        console.log('start')
        oldPause(500, function () {
            console.log('middle');
            oldPause(500, function () {
                console.log('end');
            });
        });

    });
    it("should be easier to read with generators", function (done) {

        function* main() {
            console.log('start');
            yield pause(500); // pause function will yield up control after pause execution and then return control back to this function after the pause function has completed executing 
            console.log('middle');
            yield pause(500);
            console.log('end')
            done();
        }
        (function () {
            var sequence;
            var run = function (generator) {
                sequence = generator();
                var next = sequence.next();
            }
            var resume = function (value) {
                sequence.next(next);
            }
            window.async = {
                run: run,
                resume: resume
            }
        }());

        //we will encapsulate this inside of another object handle 
        //running asynchronous generator function for us
        // var seq = main();
        // seq.next();
        function pause(delay) {
            setTimeout(function () {
                console.log('paused for ' + delay + 'ms');
                // then we will tell the async object that it can resume
                // and now the pause function is notifying the async object that it can resume
                async.resume();
            }, delay)
        }
        async.run(main);
    });
    it('should work with returned data', function (data) {
        function getStockPrice() {
            $.get('/prices', function (prices) {
                //simulate the asynchronous nature of xhr request
                setTimeout(function () {
                    async.resume(50);
                }, 300)
            })
        }
        function executeTrade() {
            setTimeout(function () {
                console.log('trade completed');
                async.resume();
            }, 300)
        }
        function* main() {
            var price = yield getStockPrice();//will return value after yielding
            if (price > 45) {
                yield executeTrade();
            } else {
                console.log('trade not made');
            }
            done();
        }
        async.run(main)

    })
    it('should work with errors', function (data) {
        (function () {
            var sequence;
            var run = function (generator) {
                sequence = generator();
                var next = sequence.next();
            }
            var resume = function (value) {
                sequence.next(value);
            }
            var fail = function(reason){
                sequence.throw(reason);
            }
            window.async = {
                run: run,
                resume: resume,
                fail: fail
            }
        }());
        function getStockPrice() {
          
            $.get('/prices', function (prices) {
                //simulate the asynchronous nature of xhr request
                setTimeout(function () {
                    try{
                        //throw Error('there was a problem!');
                        async.resume(50);
                    }catch(ex){
                        async.fail(ex);
                    }
                  
                }, 300)
            })
        }
        function executeTrade() {
            setTimeout(function () {
                console.log('trade completed');
                async.resume();
            }, 300)
        }
        function* main() {
            try {
                var price = yield getStockPrice();//will return value after yielding
                if (price > 45) {
                    yield executeTrade();
                } else {
                    console.log('trade not made');
                }
            } catch (ex) {
                console.log('error!' + ex.message)
            }

            done();
        }
        async.run(main)

    })
    it('should also work with promises', function (data) {
        (function () {
            var run = function(generator){
                var sequence;
                var process = function(result){
                    result.value.then(function(value){
                        if(!result.done){
                            process(sequence.next(value))
                        }
                    },function(error){
                        if(!result.done){
                            process(sequence.throw(error));
                        }
                    })
                }
                sequence = generator();
                var next = sequence.next();
                process(next);
            }
          
            window.asyncP = {
                run: run
            }
        }());
        function getStockPriceP() {
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve(50);
                },300)
            })
        }
        function executeTradeP() {
           
            return new Promise(function(resolve, reject){
                setTimeout(function(){
                    //resolve();
                    reject();
                },300);
            })
        }
        function* main() {
            try {
                var price = yield getStockPriceP();//will return value after yielding
                if (price > 45) {
                    yield executeTradeP();
                } else {
                    console.log('trade not made');
                }
            } catch (ex) {
                console.log('error!' + ex.message)
            }

            done();
        }
        asyncP.run(main)

    })
})