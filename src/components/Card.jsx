export default function Card({ pokemon }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[300px] h-[400px] border rounded items-center">
        <div className="flex justify-center items-center w-[200px] h-[200px] border my-5">
          <img
            className="w-full h-full"
            src={pokemon?.sprites?.["front_default"]}
          />
        </div>
        <h1>{pokemon.name}</h1>
        <h2>Type</h2>
        <p></p>
      </div>
    </div>
  );
}
