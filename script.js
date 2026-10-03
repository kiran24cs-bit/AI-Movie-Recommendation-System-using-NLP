<<<<<<< HEAD
let search=document.getElementById("search");
let searchbtn=document.getElementById("searchbtn");
let tablebody=document.getElementById("tablebody");
async function moviesearch(){
    let movie=search.value;
    document.body.style.backgroundColor="lightpink";
    let data=await fetch("http://localhost:4545/default",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({movie:movie})
    });
    let response=await data.json();
    console.log(response);
}
searchbtn.addEventListener("click",moviesearch);
search.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        moviesearch();
    }
=======
let search=document.getElementById("search");
let searchbtn=document.getElementById("searchbtn");
let tablebody=document.getElementById("tablebody");
async function moviesearch(){
    let movie=search.value;
    document.body.style.backgroundColor="lightpink";
    let data=await fetch("http://localhost:4545/default",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({movie:movie})
    });
    let response=await data.json();
    console.log(response);
}
searchbtn.addEventListener("click",moviesearch);
search.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        moviesearch();
    }
>>>>>>> 2b3a143f79f9128066353a69176274ad7434beab
});