function task(message,delay)
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
        })
    }
    task("first task complete",1000).then(()=>task("second task is completed",2000))
    .then(()=>task("third task is completed",3000)).then(()=>task("fourth task done",1000))