import {Card, Button, ListGroup, Container, Image} from 'react-bootstrap';
import '../../public/star.svg';

const buttonStyles = {
  fontSize: '10px',
  border: 'none',
  fontWeight: 'bold'
}
const carStyles = {
  width: '30px',
  backgroundColor: ''
}
export function CourseCard(props) {
  const cardStyles = {
    minWidth: '250px',
    minHeight: '320px',
    height: 'auto',
    padding: `${props.isTablet ? '0':'0 25px'}`
  }
  return (    
    <Card style={cardStyles}>
      <Card.Body>
        <Card.Img src={props.src} style={{maxWidth: '250px'}}/>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.teacher}</Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>
            <Container className='px-0 ms-1'>
              <Button className='bg-danger' style={buttonStyles} size='sm'>${props.price}</Button>
              <Image src='https://i.pinimg.com/originals/81/46/cb/8146cbe3eb0e43afee75317c3c473741.png' style={carStyles}/>
            </Container>
            {
              props.tags.map((tag, index) => {
                return (<Button key={index} className={`d-inline-block ms-1 ${tag.bgColor}`} style={buttonStyles} size='sm'>{tag.name}</Button>)
              })
            }
          </ListGroup.Item>
        </ListGroup>
    </Card>
  );
}

export default CourseCard;