function ChickenCard({ imgSrc, name, position, biography }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <h2> {position} </h2>
      <p>{biography}</p>
    </div>
  );
}
export default ChickenCard;
