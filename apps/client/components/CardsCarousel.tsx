import { Button, Container } from "react-bootstrap";
import CourseCard from "./CourseCard";

const buttonStyles = {
  backgroundColor: '#5C0F8B',
  height: '40px',
  width: '40px',
  border: 'none'
}
export function CardsCarousel(props) {
  return (
    <Container className='d-flex justify-content-around align-items-center'>
      <Button style={buttonStyles} >{'<'}</Button>
      {props.coursesData.map((course,index) => {
        const {src,title,teacher, text, price} = course;
        return (<CourseCard key={index} src={src} title={title} teacher={teacher} text={text} price={price} tags={course.tags}/>);       
      })}
      <Button style={buttonStyles} >{'>'}</Button>
    </Container>
  );
}

export default CardsCarousel;