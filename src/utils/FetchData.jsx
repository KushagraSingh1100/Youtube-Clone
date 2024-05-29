
export const baseUrl = 'https://yt-api.p.rapidapi.com';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8940936314msh924d7e812f2c3efp14927ejsn2186e6911cf6',
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    const FetchData = async (url) => {    
        try{
            const response = await fetch(`${baseUrl}/${url}`, options);
            const data = await response.json();
            return data;
        }
    catch(error){
        console.log(error);
    }
}
 
export default FetchData;