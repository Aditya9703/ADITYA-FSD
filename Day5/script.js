
//  a=45/14;

// function diplay()

    // console.log(typeof a);
    // let bol=true;
    // let str=String(bol);
    // console.log(str.charAt(1));

// function diplay()
// {
//     let x=confirm("Are you sure");
//     alert(x);
// }
// function diplay()
// {
//     let x=prompt("enter your name","aditya");
//     alert(x);
// }
function validate()
{
    let usr=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin" && pass=="admin")
    {
        p1.innerText="Login Success";
    }
    else{
        p1.innerText="Login Failed";
        
    }
    return false;
}