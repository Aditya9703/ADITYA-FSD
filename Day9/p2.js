async function orderfood(name,time) {
    return new Promise((resolve,reject)=>
 {
    if(name=="Burger") reject("Burger is not available");
  setTimeout(()=>{
     resolve("order for"+name+"prepared");
  },time)
 }); 
 }
 async function restaurant(params) {
     console.log("Order Placed");
     let pizza=await orderfood("Pizza",1000);
     console.log(pizza);
     
     try
     {let burger=await orderfood("Burger",2000);
     console.log(burger);}
     catch(error)
     {
        console.log(error);
     }
     let noodles=await orderfood("Noodles",1000);
     console.log(noodles);
     console.log("All order completed");
     
 }
 restaurant();