/*Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

 */

function getDrinkByProfession(param){
    let LowParam = param.toLowerCase();
    if(LowParam === "jabroni"){
        return "Patron Tequila";
    } else if(LowParam === "school counselor"){
        return "Anything with Alcohol";
    } else if(LowParam === "programmer"){
        return "Hipster Craft Beer";
    } else if(LowParam === "bike gang member"){
        return "Moonshine";
    } else if(LowParam === "politician"){
        return "Your tax dollars";
    } else if(LowParam === "rapper"){
        return "Cristal";
    } else {    //anything else
        return "Beer";
    }
}


console.log(getDrinkByProfession("Jabroni"), "Patron Tequila");
console.log(getDrinkByProfession("School Counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("Programmer"), "Hipster Craft Beer");
console.log(getDrinkByProfession("Bike Gang Member"), "Moonshine");
console.log(getDrinkByProfession("Rapper"), "Cristal");
console.log(getDrinkByProfession("pOLitiCIaN"), "Your tax dollars");