"use client"
import React, { useState, useEffect } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR, RiVolumeUpLine, RiFileCopyLine, RiTwitterXLine } from 'react-icons/ri';

const Love = () => {
    const [content, setContent] = useState("私は狼。独りで歩くのは慣れているわ。");
    const [author, setAuthor] = useState("Anonymous");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = () => {
        setLoading(true);
        fetch("https://quotify-api.vercel.app/quote/random/japanese/love")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(result => {
                setContent(result.content);
                setAuthor(result.author);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                setLoading(false);
            });
    };
    

    const readQuote = () => {
        let utterance = new SpeechSynthesisUtterance(content);
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex justify-center items-center h-screen" style={{backgroundImage: 'url(/Love.jpg)', backgroundSize: 'cover'}}>
            <div className="wrapper bg-white rounded-lg p-8" style={{ width: '600px' }}>
                <header className="text-3xl font-bold mb-6 text-center">Quote of the Day</header>
                <div className="content">
                    <div className="quote-area flex justify-center items-center mb-6">
                        <RiDoubleQuotesL className="text-xl font-semibold mr-2" />
                        <p className="quote text-lg font-semibold text-center">{content}</p>
                        <RiDoubleQuotesR className="text-xl ml-2" />
                    </div>
                    <div className="author font-semibold flex justify-end italic text-lg">
                        <span className="font-mono">__</span>
                        <span className="name">{author}</span>
                    </div>
                </div>
                <div className="button border-t border-black mt-5">
                    <div className="features flex items-center justify-between mt-5">
                        <ul className="flex">
                            <li className="sound list-none m-0 p-0 h-12 w-12 flex items-center justify-center text-purple-500 border-2 border-purple-500 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-purple-500" onClick={readQuote}><RiVolumeUpLine /></li>
                            <li className="copy list-none m-0 p-0 h-12 w-12 flex items-center justify-center text-purple-500 border-2 border-purple-500 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-purple-500"><RiFileCopyLine /></li>
                            <li className="X list-none m-0 p-0 h-12 w-12 flex items-center justify-center text-purple-500 border-2 border-purple-500 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-purple-500"><RiTwitterXLine /></li>
                        </ul>
                        <button className={`p-3 rounded-full text-white cursor-pointer text-lg ${loading ? 'bg-purple-300' : 'bg-purple-500'} hover:bg-purple-600`} onClick={fetchQuote} disabled={loading}>
                            {loading ? 'Loading...' : 'New Quote'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Love;
