import { useState, useEffect } from "react";
import {getNews} from "../../api/external";
import styles from "./Home.module.css";


function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async function newsApiCall() {
            const response = await getNews();
            setArticles(response);
        })();
        setArticles([]);
    }, []);

   const handelCardClick=(url)=>{
        window.open(url,"_blank");
    }
    return (
        <>
            <div className={styles.header}>Latest Articales</div>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <div className={styles.card} key={article.url}
                    onClick={()=>handelCardClick(article.url)}
                    >
                        <img src={article.urlToImage} />
                      <h3>
                        {article.title}
                        </h3>  
                    </div>
                    ))}

            </div>
        </>
    );
}

export default Home;