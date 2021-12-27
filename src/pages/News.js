import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import Navigation from '../components/Navigation';
import "../styles/news.css"


const News = () => {
    const url = "http://localhost:3003/articles";
    const [newData,setNewsData] = useState([]);
    const [author,setAuthor] = useState("");
    const [content,setContent] = useState("");
    const [error,setError] = useState(false)


const getApi =()=>{
    axios
    .get(url)
    .then(res=>setNewsData(res.data))
}


    useEffect(()=>{
        getApi()
    },[])


    const handleSubmit =(e)=>{
        e.preventDefault()

        if (content.length <120){
            setError(true)
        }
        else{
            axios
            .post(url,
                {
                    author,
                    content,
                    date: Date.now()
                })
            .then(()=>{
                setError(false)
                getApi()
                setAuthor("")
                setContent("")
            })
    
        }
        }


    return (
        <div className='contener-news'>
            <Navigation/>
            <h1>News</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='nom' 
                    onChange={(e)=>setAuthor(e.target.value)}
                    value={author}
                />
                <textarea placeholder='message'
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                    style={error? {border:"1px solid red"} : {border:"1px solid green"}}
                />
                {error?<em style={{color:"red"}}>Veuillez saisir un texte de 140 mots </em>
                      : <em style={{color:"green"}}>Formulaire envoyé </em>}
                
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {newData
                .sort((a,b)=>b.date - a.date)
                .map((article)=>(
                    <Article key={article.id} article={article}/>
                ))}
            </ul>
        </div>
    );
};

export default News;