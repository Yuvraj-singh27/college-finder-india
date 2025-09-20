console.log("hello");
let url ="http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
   let state = document.querySelector("input").value;
   let colleges = await getColleges();
   let filtered = colleges.filter(college => 
        college["state-province"] && college["state-province"].toLowerCase() === state.toLowerCase()
    );
   showClg(filtered);
});

function showClg(colleges){
   let list = document.querySelector("#list");
   list.innerText ="";
   if(colleges.length === 0){
        list.innerText = "No colleges found for this state.";
        return;
    }
   for(college of colleges){
      let li = document.createElement("li");
      li.innerText = college.name;
      list.appendChild(li);
      
   }
}



async function getColleges(){
   try{
      let res = await axios.get(url);
      return res.data;
   }
   catch(e){
      console.log(e);
      return [];
   }
}