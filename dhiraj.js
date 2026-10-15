//what is sychronization injavascript
//sychronization means code runs sequentially to complete theri previous instruction next instruction are not executed this is called as sychronization

/*console.log("dhiraj");
console.log("jadhav");
console.log("hello");*/

//set timeout function

/*function dhiraj(){
    console.log("dhiraj")
}
setTimeout(dhiraj,4000);*/

//arrow function in set timeout function
/*setTimeout(()=>{
    console.log("dhirajjadhav")

},4000);*/

//asychronous peograming
/*console.log("dhiraj");
console.log("jadhav");
console.log("hello");
setTimeout(() => {
    console.log("dhirajjadhav")
    
},3000);
console.log("dhiru");*/

//callback function
/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);

}
calculator(2,3,sum);*/

//second way to add callback function by using arrow function
/*const dhiraj=()=>{
    console.log("dhirajjadhav")
}

setTimeout(dhiraj,4000);*/
//how to mark handle fullfiled and reject and pending states//
/*const  firstPromise =new Promise( (resolve,reject) =>{
    setTimeout(()=>{
        console.log("dhirajjadhav")
        resolve(1);
        reject("this is error");

    },5000)*/
//} );//

/*const firstPromise=new Promise((resolve, reject) => {
    success=false;
    if(success){
        resolve("mai sahi hu")
    }else{
        reject("mai reject hu")
    }
    
})
//what is promise chaining
firstPromise.then((message)=>{
    console.log("this is my first message",message)
    return "promised fullfilled second message"

}).then((message)=>{
    console.log("second message",message)
    return "this is third meassage"

}).then((message)=>{
    console.log("this is third message",message)
    return "this is my last message"


}).then((message)=>{
    console.log("this is last message",message)
}).catch((error)=>{
    console.log("mai error hu aaja",error)
}).finally((message)=>{
    console.log("mai finally hu mai execute hoga",message)
})







/*firstPromise.then((message)=>{
    console.log("mai correct hu",message)

}).catch((error)=>{
    console.log("mai error hu",error)

})*/

// let dhirajj=document.querySelector("h1").textContent="dhirajjjj"
// console.log(dhirajj);

// let dhiraj=[12,23,45,45,43,32];
//  let sum=0;
// for( let dhirajj of dhiraj){
// sum=sum+dhirajj;
    

// }
// console.log(sum)
// let dhirajjj=sum/dhiraj.length;
// console.log(dhirajjj);
//arithimatic operator

//add sum then find average



let dhirajjadhav=document.querySelector("#dhiraj");
theme="light"
dhirajjadhav.addEventListener("click",()=>{
    if(theme==="light"){
        theme="dark"
        document.body.style.backgroundColor="pink"
    }else{
        theme="light"
         document.body.style.backgroundColor="yellow"
    }
    console.log(theme)
})






   


 









 















