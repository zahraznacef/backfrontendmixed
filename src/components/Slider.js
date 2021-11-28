import React from 'react'
import "../App.css"
import { Carousel } from 'react-bootstrap'


const Slider = () => {
    return (
        <div className="slider">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-img"
                src="https://news.automobile.tn/2021/11/dongfeng-sinstalle-a-nabeul-1859_max_home.webp?t=1637433914"
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="slider-caption">
                        <h3 className="slider-title">Actu</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-img"
                src="https://news.automobile.tn/2021/11/les-bonnes-affaires-chez-italcar-1860_max_home.webp?t=1637436948"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="slider-caption">
                        <h3 className="slider-title">Actu</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-img"
                src="https://news.automobile.tn/2021/11/le-pickup-toyota-hilux-remporte-le-prixnbspinternational-pick-up-award-20222023-1861_max_home.webp?t=1637607747"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="slider-caption">
                        <h3 className="slider-title">Actu</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
