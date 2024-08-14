import { API_URL } from "../app/constants";
import styles from "../styles/movie-credit.module.css";

export async function getCredit(id:string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredit({id} : {id : string}) {
    const credits = await getCredit(id);

    return (
        <div>
           {
            credits.map((credits) => (
                <div key = {credits.id} className = {styles.container}>
                    <img src = {credits.profile_path} />
                    <h1>{credits.name}</h1>
                    <h4>{credits.character}</h4>
                </div>
            ))
           }
        </div>
    )
}