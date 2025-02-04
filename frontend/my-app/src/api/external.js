import axios from "axios";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const NEWS_API_ENDPOINT = `https://newsapi.org/v2/everything?q=business AND blockchain&sortBy=publishedAt&language=en&apiKey=a78f6236cf4b42a3865d047cab58b8b6`;

export const getNews = async () => {
    let response;
    try {
        response = await axios.get(NEWS_API_ENDPOINT);
        response=response.data.articles.slice(0, 15);

    } catch (error) {
        return error;

    }
    return response;
}

