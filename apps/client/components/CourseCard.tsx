import {Card} from 'react-bootstrap';

export function CourseCard(props) {
  return (
    <Card style={{width:'450px'}}>
      <Card.Body>
        <Card.Img src={props.src}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.teacher}</Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>        
      </Card.Body>
    </Card>
  );
}

export default CourseCard;