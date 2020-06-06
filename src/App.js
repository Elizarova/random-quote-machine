import React, { useState } from 'react';
import Quote from './components/quote/Quote';
import Footer from './components/footer/Footer';
import axios from 'axios';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  // get Quote
  const getRandomQuote = async () => {
    setLoading(true);

    const res = await axios.get(
      'http://quotes.stormconsultancy.co.uk/random.json'
    );

    setQuote(res.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <Quote getRandomQuote={getRandomQuote} loading={loading} quote={quote} />
      <Footer />
    </div>
  );
};

export default App;
