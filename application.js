for(let index=0; index < 10; index++) {
    console.log("Hello World \n");
}

for (let a = 0; a < 3; a++) {
        console.log(" # # # # # #"); 
    console.log("# # # # # #");
   
}
 console.log("\n");
for (let index = 1; index < 5; index++){
        console.log("*".repeat(index));   
}

let myNumber =(num1,num2) => num1 * num2 /2;
     console.log(myNumber(10,20)); 

 void function greetings() {
    console.log("Hello World");

}()

// Objects 
    let person= {
        FirstName : 'Patrick',
        LastName : 'Ouch',
        Age : 21,
        City : 'Kigali',
        greetings : function () {
            return `Hello  ${this.FirstName} ${this.LastName}`
        }
    }
    console.log(person.greetings());
 

    