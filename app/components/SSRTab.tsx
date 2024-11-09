// components/SSRTab.tsx
import { useState } from 'react';

const SSRTab = ({ pokemonData }: { pokemonData: any }) => {
  const [cacheState, setCacheState] = useState('MISS');

  return (
    <div>
      <h2>Server-Side Rendering (SSR)</h2>
      <button onClick={() => setCacheState('MISS')}>Fetch Data</button>
      <div>
        <p>Cache State: {cacheState}</p>
        <p>Pokémon: {pokemonData.name}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/7'); // Fetch Pokémon #7
  const pokemonData = await res.json();

  return { props: { pokemonData } };
}

export default SSRTab;
