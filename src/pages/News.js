import React from 'react';
import "../styles/news.css"
const News = () => {
    return (
        <div className='contener-news'>
            <h1>News</h1>
            <form>
                <input placeholder='nom' />
                <textarea placeholder='message'></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default News;