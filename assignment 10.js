// Create a business name generator by combining list of adjectives and shop names and another word 

/* 
Adjectives:

Crazy
Amazing
Fire
*/

/*
shop names:

Engine
Foods
garments
*/

/*
Another Word:

Bros
Limited 
Hub
*/


function generateBusinessName(){
    let Adjective;
    if(Math.random() < 0.33) Adjective = "Crazy";
    else if(Math.random() < 0.66) Adjective = "Amazing";
    else Adjective = "fire";

    let shop_names;
    if(Math.random() < 0.33) shop_names = "Engine";
    else if(Math.random() < 0.66) shop_names = "Foods";
    else shop_names = "garments";

    let word;
    if(Math.random() < 0.33) word = "Bros";
    else if(Math.random() < 0.66) word = "Limited";
    else word = "Hub";

    console.log(Adjective + " " +  shop_names + " " + word);

}

generateBusinessName();




























