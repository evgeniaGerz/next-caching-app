// components/ISRTab.tsx
import { useEffect, useState } from 'react';

const ISRTab = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [cacheState, setCacheState] = useState('STALE');

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/4') // Fetch Pokémon #4
        .then((res) => res.json())
        .then((data) => {
          setPokemonData(data);
          setCacheState('HIT');
        })
        .catch(() => setCacheState('MISS'));
    }, 7000); // Fetch every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Incremental Static Regeneration (ISR)</h2>
      <p>Cache State: {cacheState}</p>
      {pokemonData && <p>{pokemonData?.name ? pokemonData.name : 'Loading...'}</p>}
    </div>
  );
};

export default ISRTab;
