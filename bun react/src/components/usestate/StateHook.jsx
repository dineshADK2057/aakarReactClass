import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function StateHook() {
    const [answer, setAnswer] = useState('');
    // const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null)

    
    const apiDay = async () => {
        try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a3263411e7b49d3883b5d28163ff919");
            const data = await response.json();
            
            
            setArticles(data.articles); // Store the articles in state
        } catch (error) {
            setError(error.message); // Set error message
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        apiDay(); // Call the function in useEffect
    }, []); // Empty dependency array to run once when component mounts


    apiDay();

    return (
        <>        
            {/* <form onSubmit={() => {
                setStatus("submiting")
            }
            }>
                <textarea
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value)
                        // answer = e.target.value;= 
                        setStatus("typing")
                    }}
                />
                <br />
                <button disabled={
                    answer.length === 0 || status === "submiting"
                }>
                    Submit
                </button>

            </form> */}
            <div className="articles-container">
                {error && <p>Error: {error}</p>} {/* Display error if exists */}
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div key={index} className="article">
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))
                ) : (
                    <p>No articles found.</p>
                )}

                {/* (condition) ? (statements if true) : (statements if false); */}
            </div>

        </>
    );
}