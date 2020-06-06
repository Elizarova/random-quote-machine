import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';

const Quote = ({
  quote: { quoteText, quoteAuthor },
  loading,
  getRandomQuote,
}) => {
  useEffect(() => {
    getRandomQuote();
    // eslint-disable-next-line
  }, []);

  const tweet = `"${quoteText}" / ${quoteAuthor} /`;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="quote-box" id="quote-box">
        <div className="quote-text">
          <blockquote id="text">"{quoteText}"</blockquote>
          <div>
            <cite id="author">- {quoteAuthor}</cite>
          </div>
        </div>
        <div className="quote-footer">
          <a
            href={`https://twitter.com/intent/tweet?text=${tweet}`}
            target="_blank"
            rel="noopener noreferrer"
            id="tweet-quote"
          >
            <button className="twitter-btn">
              <i className="fab fa-twitter fa-2x"></i>
            </button>
          </a>
          <button className="btn" id="new-quote" onClick={getRandomQuote}>
            More
          </button>
        </div>
      </div>
    );
  }
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Quote;
