import { Suspense } from "react"
import { API_URL } from "../../constants"
import MovieInfo, { getMovie } from "../../../components/movie-info"
import MovieVideos from "../../../components/movie-videos"



// async function getvideos(id:string){
//     console.log(`fetching video:${Date.now()}`)
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json()
// }

interface IParams {
    params : {id : string}
}

export async function generateMetadata({params: {id} } : IParams){
   const movie = await getMovie(id);
    return {
        title : movie.title,
    }
}


export default async function MovieDetailPage({params : {id}, } : IParams) {
   
    return <div>
        <Suspense fallback = {<h4>Loading Info...</h4>}> 
            <MovieInfo  id = {id}/>
        </Suspense>
        <Suspense fallback = {<h4>Loading video...</h4>}>
            <MovieVideos  id = {id} />
        </Suspense>
    </div>}
