function ChickenCard({ ImgSrc }, { Name }, { Role }, { Description }) {
  return (
    <div>
      <img src={ImgSrc} />
      <h2>{Name}</h2>
      <h3> {Role} </h3>
      <P> {Description} </P>
    </div>
  );
}
export default ChickenCard;
