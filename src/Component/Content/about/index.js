import React, {Component, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const style = {
        color:"black"
    };

    return (
        <div className="content" >
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"
                         alt="First slide" width="auto" height="500px"
                    />
                    <span style={{backgroundColor:"black"}} aria-hidden="true" className="carousel-control-next-icon" />

                    <Carousel.Caption>
                        <h3 style={style}>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"
                         alt="Second slide" width="auto" height="500px"
                    />
                    <span style={{backgroundColor:"black"}} aria-hidden="true" className="carousel-control-next-icon" />

                    <Carousel.Caption>
                        <h3 style={style}>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src="https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"
                         alt="Third slide" width="auto" height="500px"
                    />
                    <span style={{backgroundColor:"black"}} aria-hidden="true" className="carousel-control-next-icon" />
                    <Carousel.Caption>
                        <h3 style={style}>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default About;
