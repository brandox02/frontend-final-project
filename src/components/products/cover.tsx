export default function Cover({ image }) {
  return (
    <div className="cover-img">
      <figure>
        <img src={image} alt="" />
      </figure>
    </div>
  );
}
