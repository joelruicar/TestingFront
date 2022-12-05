export default function CarouselItem({ slide }) {
  return (
    <div className="carousel-item">
      <img className="imagen-carousel" src={slide} alt="imagen mascota" />
    </div>
  );
}
