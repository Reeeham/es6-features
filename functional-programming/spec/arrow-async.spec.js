describe("arrow functions",function(){

    it("lexically binds to 'this'",function(done){

        //let self = this;
        //self.name = "Scott";
        this.name = "Scott";
        setTimeout(()=>{
            //expect(self.name).toBe("Scott")
            expect(this.name).toBe("Scott")
            done();
        },5000)

    })
})