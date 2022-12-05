export default function CarouselControlsNo({ prev, next }) {
  return (
    <div>
      <button className="carousel-control left" onClick={prev}>
        {"🢀"}
      </button>
      <button className="carousel-control right" onClick={next}>
        {"🢂"}
      </button>
    </div>
  );
}
