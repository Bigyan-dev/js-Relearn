console.log("Test please")

//Objects
const myobject = {
name : "Bigyan Gadtaula",
status : "Agressively learning "
}
console.log(myobject.status)
console.log(myobject["status"])

myobject.gretting = function(){
    console.log(`Hello, ${this.name}`)
}


console.log(myobject)
myobject.gretting()

