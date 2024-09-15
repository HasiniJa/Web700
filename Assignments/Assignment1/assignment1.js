/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Hasini Jayasekara Student ID: _165513235_ Date: ___9/13/2024___

********************************************************************************/ 

Math.random()

//variable and array creation
let serverVerbs =["GET","GET","GET","POST","GET","POST"];
let serverPaths =["/","/about","/contact","/login","/panel","/logout"];
let serverResponses=[
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Hasini Jayasekara",
    "[Hasini Jayasekara]:[hjayasekara@myseneca.ca]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"

];


//function creation
function httprequest (httpVerb,path){

 for(let i=0; i< serverPaths.length;i++){
    if(serverVerbs[i]== httpVerb&&serverPaths[i]==path){
        return `200: ${serverResponses[i]}`;

    }
 }
  
 return `404: unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httprequest("GET","/"));
console.log(httprequest("GET","/about"));
console.log(httprequest("GET","/contact"));
console.log(httprequest("POST","/login"));
console.log(httprequest("GET","panel"));
console.log(httprequest("POST","/logout"));

//error testing
console.log(httprequest("PUT","/"));

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function automateTests(){

    let testVerbs=["GET","POST"];
    let testPaths=["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"];

    function randomRequest(){
        let randVerb =testVerbs[getRandomInt(testVerbs.length)];
        let randPath =testPaths[getRandomInt(testPaths.length)];

        console.log(httprequest(randVerb,randPath));

    }

    setInterval(randomRequest,1000);
}

//call automate function
automateTests();