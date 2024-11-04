async function orderfood(name,time) {
   return new Promise((resolve,reject)=>
{
 setTimeout(()=>{
    resolve("order for"+name+"prepared");
 },time)
}); 
}
async function restaurant(params) {
    console.log("Order Placed");
    let pizza=await orderfood("Pizza",1000);
    console.log(pizza);
    let burger=await orderfood("Burger",2000);
    console.log(burger);
    let noodles=await orderfood("Noodles",1000);
    console.log(noodles);
    console.log("All order completed");
    
}
restaurant();