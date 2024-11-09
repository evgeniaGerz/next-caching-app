// components/SSGTab.tsx
import { useState } from 'react';

const SSGTab = ({ pokemonData }: { pokemonData: any }) => {
  const [cacheState, setCacheState] = useState('HIT'); // Simulated state

  return (
    <div>
      <h2>Static Site Generation (SSG)</h2>
      <button onClick={() => setCacheState('MISS')}>Fetch Data</button>
      <div>
        <p>Cache State: {cacheState}</p>
        <p>Pokémon: {pokemonData?.name ? pokemonData.name : 'Loading...'}</p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // Fetch Pokémon #1
  const pokemonData = await res.json();

  return {
    props: { pokemonData }, // Will be passed to the component
    revalidate: 10, // Revalidate every 10 seconds (for ISR simulation)
  };
}

export default SSGTab;
