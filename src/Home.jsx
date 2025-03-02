import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
    const [error, setError] = useState("");
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const getStoicQuote = async () => {
            try {
                const result = await fetch("https://stoic-quotes.com/api/quote");
                if (!result.ok) {
                    throw new Error("Failed to fetch data.");
                }
                const data = await result.json();  // Await the JSON parsing
                setQuote(data.text);
                setAuthor(data.author);
            } catch (error) {
                setError(error.message);  // Use error.message to display the error text
            }
        };
        getStoicQuote();
    }, []);

    return (
        <>
            <h2 id="home-h2">Welcome to the Homepage of Clay O'Dell</h2>
            <p>Software/Web Developer</p>
            <img src="/CODellLogo_Color_NONAME.png" alt="Logo for Clay O'Dell" id="home-logo"/>
            {error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <>
                    {quote && author && (
                        <div className="quote-container">
                            <p className="quote">{quote}</p>
                            <p className="author">— {author}</p>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Home;
