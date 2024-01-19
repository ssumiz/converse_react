import React from 'react';

import Style from "../sass/footer/Footer.module.scss"
import styled from 'styled-components';

const TextSpan = styled.p`

    font-size: 0.7rem;
    color: ${props => props.color || "#9b9b9b"}


`

function Footer(props) {
    return (
        <div className='d-flex flex-row justify-content-center align-items-center bg-black text-left mt-15'>
            <div className='col-6 mt-5 mb-5 ps-15'>
                <TextSpan color='white'>(유)컨버스코리아 | 대표 이명재 | 개인정보책임 이명재 | 사업자등록번호 220-88-74818</TextSpan>
                <TextSpan>통신판매업 신고번호 제2016-서울강남-00478호 | 통신판매업자 신원정보 확인</TextSpan>
                <TextSpan>주소 서울특별시 강남구 테헤란로 152(역삼동) 강남파이낸스센터 32층</TextSpan>
                <TextSpan color="white">고객상담팀:080-987-0182(상담시간 월-금: AM 09:00 - PM 05:30, 주말/공휴일 휴무)</TextSpan>
                <TextSpan>conversekorea@converse.co.kr(24시간 접수 가능)</TextSpan>
                <TextSpan></TextSpan>
                <TextSpan>2020 Converse Korea LLC. All Right Reserved.</TextSpan>
            </div>
            <div className='col-6 mt-5 mb-5 ps-5'>
                <TextSpan>KG 이니시스 구매안전 서비스</TextSpan>
                <TextSpan>고객님은 안전거래를 위해 현금 등으로 결제시</TextSpan>
                <TextSpan>저희 쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다.</TextSpan>
                <TextSpan>결제대금예치업 등록번호 02-006-00013</TextSpan>
                <TextSpan color="white">서비스 가입사실 확인</TextSpan>
            </div>
        </div>
    );
}

export default Footer;