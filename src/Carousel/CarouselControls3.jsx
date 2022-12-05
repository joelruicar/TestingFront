export default function CarouselControls({ prev, next, del, sub }) {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        {"🢀"}
      </button>
      <button className="carousel-control right" onClick={next}>
        {"🢂"}
      </button>
      <button className="carousel-control2 del" onClick={del}>
        {"✖"}
      </button>
      <input type="file" onChange={sub} accept=".png, .jpg" />
    </div>
  );
}
