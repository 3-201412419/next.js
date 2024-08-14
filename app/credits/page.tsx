import { API_URL } from "../constants"

export const metadata = {
    title : "Credits"
}

async function getCredit() {
    console.log(API_URL);
    return fetch (API_URL).then(response => response.json());
}

export default async function CreditPage() {
    const credit = await getCredit();
    
    return (
        <div>
            <h1>hi i'm credit</h1>
        </div>
    )
}