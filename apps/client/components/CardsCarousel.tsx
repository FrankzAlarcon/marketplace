import { Carousel, Button, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import CourseCard from './CourseCard';
import 'swiper/css';
import { useState, useEffect } from 'react';

const buttonStyles = {
  backgroundColor: '#5C0F8B',
  height: '40px',
  width: '40px',
  border: 'none'
};
const containerStyles = {
  overflow: 'hidden',
  width: '320px',
};
export function CardsCarousel({isMobile, isTablet, coursesData}) {
  return (
      isMobile ?
      <Carousel interval={null} indicators={false} variant="dark" className='my-4 shadow'>
        {coursesData.map((course,index) => {
            const {src,title,teacher, text, price} = course;
            return (
              <Carousel.Item  key={`item-${index}`}>
                <CourseCard key={`card-${index}`} src={src} title={title} teacher={teacher} text={text} price={price} tags={course.tags}/>
              </Carousel.Item>
              );
          })}
      </Carousel>
      :
      <Container className='d-flex justify-content-around align-items-center'>
      <Button style={buttonStyles} >{'<'}</Button>
      <Container  style={{width: `${!isTablet ? '300px': '1200px'} `, margin: '0 10px', padding: '0', overflow: 'hidden'}} className='d-flex gap-3 align-items-center' >
        {coursesData.map((course,index) => {
          const {src,title,teacher, text, price} = course;
          return (<CourseCard key={index} src={src} title={title} teacher={teacher} text={text} price={price} tags={course.tags} isTablet={isTablet}/>);
        })}
      </Container>
      <Button style={buttonStyles} >{'>'}</Button>
      </Container>
  );
}

export default CardsCarousel;
