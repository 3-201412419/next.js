import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../constants";


export const metadata = {
    title : "Home"
}



async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return fetch(API_URL).then(response => response.json());
}

export default async function HomePage(){

    const movie = await getMovies();

    return (
        <div className = {styles.container}>
            {movie.map((movie) => (
                <Movie key = {movie.id}  id = {movie.id} poster_path = {movie.poster_path} title = {movie.title} />
           ))}
        </div>
    )
}