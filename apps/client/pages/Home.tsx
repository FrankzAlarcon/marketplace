import { Container, Carousel } from 'react-bootstrap';
import CardsCarousel from '../components/CardsCarousel';
import CourseCard from '../components/CourseCard';
import { MainCarousel } from '../components/MainCarousel';
const coursesData = [
  {
    src: 'https://i.ytimg.com/vi/6gOH3o77J8A/maxresdefault.jpg',
    title: 'Curso de react',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
    price: 9.99,
    tags: [
      {
        name: 'programacion',
        bgColor: 'bg-info'
      },
      {
        name: 'popular',
        bgColor: 'bg-warning'
      }
    ]
  },
  {
    src: 'https://escuelafullstack.com/web/image/slide.channel/22/image_512',
    title: 'Curso de Vue.js',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
    price: 9.99,
    tags: [
      {
        name: 'programacion',
        bgColor: 'bg-info'
      },
      {
        name: 'popular',
        bgColor: 'bg-warning'
      }
    ]

  },
  {
    src: 'https://i.ytimg.com/vi/AR1tLGQ7COs/maxresdefault.jpg',
    title: 'Curso de Angular',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
    price: 9.99,
    tags: [
      {
        name: 'programacion',
        bgColor: 'bg-info'
      },
      {
        name: 'popular',
        bgColor: 'bg-warning'
      },
      {
        name: 'nuevo',
        bgColor: 'bg-secondary'
      }
    ]
  }
]

export function Home() {
  return (
    <Container className='d-flex flex-column align-items-center'>
      <MainCarousel />
      <CardsCarousel coursesData={coursesData}/>
    </Container>
  );
}

export default Home;