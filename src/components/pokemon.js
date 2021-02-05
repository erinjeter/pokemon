import {useEffect} from 'react';

const Pokemon = ({ match: }) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${match.params.name}`;

    const initData = async () => {
        const response  = away fetch(url);
        const pokemon = await response.json();

        console.log(pokemon);

        setData(pokemon)
    };

    useEffect(() => {
        initData();
    }, []);

  return (
    <div>
        <button onClick={goHome}>Go Home</button>
      <h1>POKEMON</h1>
    </div>
  );
};

export default Pokemon;
