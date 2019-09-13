import {useState, useEffect} from 'react';
import Axios from 'axios';

export function useJoke() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    async function fetchJoke() {
      const res = await Axios.get('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'},
      });
      setJoke(res.data.joke);
    }
    fetchJoke();
  }, []);

  if (joke === null) {
    return 'Loading...';
  }

  return joke;
}
