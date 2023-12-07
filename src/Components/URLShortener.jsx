import React, { useState } from 'react';

const URLShortener = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenURL = () => {
    // Implement URL shortening logic here
  };

  return (
   <div class="container mt-5">
  <h2>URL Shortener</h2>
  <form>
    <div class="form-group">
      <label for="originalURL">Original URL:</label>
      <input type="url" class="form-control" id="originalURL" value="{originalURL}" onChange={(e) => setOriginalURL(e.target.value)} />
    </div>
    <button type="button" class="btn btn-primary" onClick={handleShortenURL}>Shorten URL</button>
  </form>

  {shortenedURL && (
    <div class="mt-3">
      <p>Shortened URL:</p>
      <a href="{shortenedURL}" target="_blank" rel="noopener noreferrer" class="btn btn-success">{shortenedURL}</a>
    </div>
  )}
</div>

  );
};

export default URLShortener;
