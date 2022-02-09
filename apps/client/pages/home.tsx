import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardsCarousel from '../components/carousels/CardsCarousel';
import { MainCarousel } from '../components/carousels/MainCarousel';
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
  },
  {
    src: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/06/python.jpg?itok=XqTS1eVy',
    title: 'Curso de Python',
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
  },
]

const Home = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(()=> {
    setIsTablet(window.screen.width > 600 );
    setIsMobile(window.screen.width < 400);
    setIsDesktop(window.screen.width > 992);
    window.addEventListener('resize', () => {
      setIsTablet(window.screen.width > 600 );
      setIsMobile(window.screen.width < 400);
      setIsDesktop(window.screen.width > 992);
      console.log(isDesktop)
    })
  }, [])
  return ( 
    <Container className='d-flex flex-column align-items-center' style={{width: '100%'}}>
      <MainCarousel isDesktop={isDesktop} />
      <CardsCarousel isTablet={isTablet} isMobile={isMobile}  coursesData={coursesData}/>
    </Container>
  );
};

export default Home;
