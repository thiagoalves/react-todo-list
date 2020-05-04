import React from 'react';

export function getMovies(callback) {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => callback(json.movies))
      .catch((error) => console.error(error));
}
