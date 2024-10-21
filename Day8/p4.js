function fetchdata()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
const students=[
    {name:"Alice",score:50},
    {name:"ab",score:65},
    {name:"bob",score:30},
    {name:"bmb",score:80}
];
resolve(students);
        },4000);
    });
}
// fetchdata().then((students)=>console.log(students.reduce((acc,students)=>acc+students.score,0))).catch((error)=>{
//     console.log(error);
// });
fetchdata().then ((students)=>
{
    let sum=0;
    students.forEach((element)=>
    {
        sum +=element.score;
    });
    console.log(sum);
}).catch((error)=>console.log(error));