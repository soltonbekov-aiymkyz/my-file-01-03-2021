let example = ["Aplle" , "pear"]

let result = []
for (item of example){
    result.push("1" +item +"!")
}

//for in 
let result2 = []
for (i in example){
   result.push("1" +example[i] +"!")
}
//for ache
let result3 = []
example.forEach(function(item){
   result3.push("!" +item +"!")

}
)
//map
let result4 = example.map(function (item) {
    return "!" + item + "!";
})

