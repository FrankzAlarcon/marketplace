import { Carousel, Image } from "react-bootstrap";


const itemsStyles ={
  width: '100%',
}
export function MainCarousel({ isDesktop }) {
  const carouselStyles = {
    display: 'block',
    width: `${isDesktop ? '936px': '100%'}`,
  }
  return (
    <Carousel className="my-4 shadow" style={carouselStyles}>
      <Carousel.Item style={itemsStyles}>
        <Image
          className="d-block w-100"
          src="https://i.ytimg.com/vi/6gOH3o77J8A/maxresdefault.jpg"
          alt="First slide"          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemsStyles}>
        <Image
          className="d-block w-100"
          src="https://escuelafullstack.com/web/image/slide.channel/22/image_512"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={itemsStyles}>
        <Image
          className="d-block w-100"
          src="https://i.ytimg.com/vi/AR1tLGQ7COs/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}