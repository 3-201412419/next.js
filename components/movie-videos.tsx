import { API_URL } from "../app/(home)/page";

async function getvideos(id:string){
    console.log(`fetching video:${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('SomeThing broke...');
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json()
}

export default async function MovieVideos({id} : {id : string}){
    const videos = await getvideos(id);
    return <h4>{JSON.stringify(videos)}</h4>
}