import { Container, Card } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

const coursesData = [
  {
    src: 'https://i.ytimg.com/vi/6gOH3o77J8A/maxresdefault.jpg',
    title: 'Curso de react',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
  },
  {
    src: 'https://escuelafullstack.com/web/image/slide.channel/22/image_512',
    title: 'Curso de Vue.js',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
  },
  {
    src: 'https://i.ytimg.com/vi/AR1tLGQ7COs/maxresdefault.jpg',
    title: 'Curso de Angular',
    teacher: 'Nombre de profesor',
    text: 'En este curso aprederas a. ........',
  }
]

export function Home() {
  return (
    <Container className='d-flex gap-3'>
      {coursesData.map((course,index) => {
        const {src,title,teacher, text} = course;
        return (<CourseCard key={index} src={src} title={title} teacher={teacher} text={text} />);       
      })}
    </Container>
  );
}

export default Home;