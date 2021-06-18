describe("the template literals", function(){

it("can easily combine literals and data", function(){
    let doWork = function(name){
        return `Hello ${name}`;
    };
    let result = doWork("Scott");
    expect(result).toBe("Hello, Scott")
})
it("can help build urls", function(){
    let category  = "music";
    let id = 2112;
    let url = `http://api/${category}/${id}`
    expect(url).toBe("http://api/music/2112")
})
it("can use tags", function(){
    let upper = function(strings, ...values) {  
        let result = "";
        for(var i =0;  i <strings.length; i++){
            result += strings[i];
            if(i < values.length){
                result += values[i];

            }
        }
        return result.toUpperCase()
    };
    var x = 1;
    var y = 2;
    var result = upper `${x} + ${y} is ${x+y}`;
    expect(result).toBe("1 + 3 IS 4")

})
})