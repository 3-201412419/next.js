import { API_URL } from "../app/constants";
import styles from  "../styles/movie-video.module.css";
async function getvideos(id : string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json()
}

export default async function MovieVideos({id} : {
    id: string
}) {
    const videos = await getvideos(id);
    return (
        <div className = {styles.container}>
            {
                videos.map((video) => (
                    <iframe
                        key={video.id}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.name}/>
                ))
            }
        </div>
    );
}