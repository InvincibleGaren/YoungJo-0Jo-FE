import React from 'react';
import MemberHeader from '../components/ui/MemberHeader';
import RedButton from '../components/ui/RedButton';
import Footer from '../layouts/Footer';

function SimpleJoin() {
    return ( 
        <div className='SimpleJoin'>
            <MemberHeader title={"회원가입"} />
            <div className="cmem_card">
                <div className="cmem_card_tit"><h3>신세계포인트 통합회원</h3></div>
                <div className="cmem_cont ty_benefit">
                    <ul className="cmem_join_benefit">
                        <li>
                            <span className="sp_cmem_join cmem_ico_birthday_coupon"></span>
                            <span className="cmem_benefit_name"><span>최대 20만원 생일쿠폰 제공</span></span>
                        </li>
                        <li>
                            <span className="sp_cmem_join cmem_ico_ssgpoint"></span>
                            <span className="cmem_benefit_name"><span>신세계포인트 적립 및 사용</span></span>
                        </li>
                        <li>
                            <span className="sp_cmem_join cmem_ico_event"></span>
                            <span className="cmem_benefit_name"><span>다양한 이벤트 참여 혜택</span></span>
                        </li>
                    </ul>
                    <RedButton title={"통합회원가입"} url={"/join/joinform"}/>
                </div>
            </div>
            <div className="cmem_card">
                <div className="cmem_card_tit"><h3>간편회원</h3></div>
                <div className="cmem_cont">
                    <ul className="cmem_sns_login">
                        <li>
                            <a href="/m/member/join/formEmail.ssg">
                                <span className="ico_area">
                                    <span className="sp_cmem_sns cmem_ico_email"></span>
                                </span>
                                <span className="cmem_sns_name">이메일</span></a>
                        </li>
                        <li>
                            <a href="" onClick={()=>{}} className="snsLogin" name="snsLogin">
                                <span className="ico_area">
                                    <span className="sp_cmem_sns cmem_ico_naver"></span>
                                </span>
                                <span className="cmem_sns_name">네이버</span></a>
                        </li>
                        <li>
                            <a href="" onClick={()=>{}} className="snsLogin" name="snsLogin">
                                <span className="ico_area">
                                    <span className="sp_cmem_sns cmem_ico_kakao"></span>
                                </span>
                                <span className="cmem_sns_name">카카오</span></a>
                        </li>
                        <li>
                            <a href="" onClick={()=>{}}  className="snsLogin" name="snsLogin">
                                <span className="ico_area">
                                    <span className="sp_cmem_sns cmem_ico_apple"></span>
                                </span>
                                <span className="cmem_sns_name">애플</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SimpleJoin;