import axios from 'axios';
const API_URL = "https://fakestoreapiserver.reactbd.com/tech";
export const tech = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } 
    catch (error) {
        console.error("Error fetching tech data: ",error);
    }
}