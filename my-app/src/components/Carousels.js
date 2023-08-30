import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from '../images/title_image1.jpg';
import exampleImage2 from '../images/title_image2.jpg';
import exampleImage3 from '../images/title_image3.jpg';


export default function Carousels() {
return (
	<div>
	<Carousel>
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100" style={{height:'500px',width:'475px'}}
src={exampleImage1}
			alt="One"
		/>
		<Carousel.Caption>
			<h3>Label for first slide</h3>
			<p>Sample Text for Image One</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
    <img
			className="d-block w-100" style={{height:'500px',width:'475px'}}
src={exampleImage2}
			alt="Two"
		/>
		<Carousel.Caption>
			<h3>Label for second slide</h3>
			<p>Sample Text for Image Two</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100" style={{height:'500px',width:'115px'}}
src={exampleImage3}
			alt="Three"
		/>
		<Carousel.Caption>
			<h3>Label for Third slide</h3>
			<p>Sample Text for Image Third</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
