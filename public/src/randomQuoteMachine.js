import React, { useState, useEffect } from 'react';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    const tweet = encodeURIComponent(`"${quote}" - ${author}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href="#" onClick={handleTweetQuote}>
        Tweet Quote
      </a>
    </div>
  );
};

export default RandomQuoteMachine;
