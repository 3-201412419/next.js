import { Suspense } from "react"
import { API_URL } from "../../(home)/page"
import MovieInfo from "../../../components/movie-info"
import MovieVideos from "../../../components/movie-videos"



// async function getvideos(id:string){
//     console.log(`fetching video:${Date.now()}`)
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json()
// }

export default async function MovieDetail({params : {id}, } : {params : {id : string }}) {
   
    return <div>
        <Suspense fallback = {<h4>Loading Info...</h4>}> 
            <MovieInfo  id = {id}/>
        </Suspense>
        <Suspense fallback = {<h4>Loading video...</h4>}>
            <MovieVideos  id = {id} />
        </Suspense>
    </div>}
