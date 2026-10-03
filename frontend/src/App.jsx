import { useState , useEffect } from 'react'
function App() {
  const [search ,setSearch]=useState("")
  const [movies,setMovies]=useState([]);
  async function moviesearch(){
    let data=await fetch("http://localhost:4545/default",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({movie:search})
    });
    let response=await data.json();
    setMovies(response.movies);
    console.log(movies);
    console.log(response.movies);
}
  function handlesearch(event){
    if(event.key=="Enter"){
        moviesearch();
    }
  }
  return <div>
  <h3>Movie Recommendation</h3>
    <input  value={search} onChange={(event)=>{setSearch(event.target.value)}}  onKeyUp={handlesearch}  placeholder="Enter movie name" />
    <button  onClick={moviesearch} >Search</button>
    <table>
        <tbody>
            <tr>
                <th>
                    Movie
                </th>
                <th>
                    IMDB
                </th>
            </tr>
        </tbody>
        <tbody id="tablebody">
            {
              movies.map((mov)=>{
                return <tr>
                <td>
                    {mov}
                </td>
                <td>
                    5.6
                </td>
            </tr>
              })
            }
        </tbody>
    </table>
  
  </div>
}
export default App;
