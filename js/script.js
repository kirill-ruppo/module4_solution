var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

names.forEach((element) => {
   
    if(element.charAt(0) == "J" || element.charAt(0) == "j"){
        console.log(`Goodbye ${element}`);
    }
    else{
        console.log(`Hello ${element}`);
    }
});
