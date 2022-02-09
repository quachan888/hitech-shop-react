import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

export default function Hero() {
    return (
        <MDBCarousel showIndicators showControls className="mb-4 shadow">
            <MDBCarouselInner style={{ height: 400 }}>
                <MDBCarouselItem className="active">
                    <MDBCarouselElement src="https://source.unsplash.com/1600x900/?store" alt="..." />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src="https://source.unsplash.com/1600x900/?reactjs" alt="..." />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement src="https://source.unsplash.com/1600x900/?ecommerce" alt="..." />
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}
