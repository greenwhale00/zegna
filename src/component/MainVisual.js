import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SLIDE = [
    { id: 1, content: "OASI CASHIMERE", desc: "BORN IN OASI ZEGNA", link: "/" }
    { id: 2, content: "TRIPLE STICH 스니커즈", desc: "BORN IN OASI ZEGNA", link: "/" }
    { id: 3, content: "TRIPLE STICH 스티커즈", desc: "BORN IN OASI ZEGNA", link: "/" }
]










const MainVisual = () => {




    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'number0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                    <a href={slide.link} target="_blank" className='cbtn'>VIEW MORE
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>

            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;