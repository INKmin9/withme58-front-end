import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// import Advertise from './Advertise';

const data = [
  {
    id: 1,
    title: '너네 이런거 써 봤냐?',
    image: '/images/team.png',
    container: '여기는 설명 영역',
  },
  {
    id: 2,
    title: '미리 금 사놓을 걸..',
    image: '/images/gold.png',
    container: '여기는 설명 영역',
  },
  {
    id: 3,
    title: '로그인하러 가자',
    image: '/images/coin.png',
    container: '여기는 설명 영역',
  },
];

export default function PagenaionForLanding() {
  return (
    <Container>
      <Swiper
        // className="landing-add"
        spaceBetween={260}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        speed={500} //슬라이더 넘어가는 속도
        // onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
            <div>{item.container}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.div``;
