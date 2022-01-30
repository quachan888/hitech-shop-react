import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function Hero() {
    return (
        <MDBCarousel showIndicators showControls>
            <MDBCarouselInner style={{ height: 300 }}>
                <MDBCarouselItem className="active">
                    <MDBCarouselElement
                        src="https://source.unsplash.com/HONJP8DyiSM"
                        alt="..."
                    />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement
                        src="https://source.unsplash.com/tMI2_-r5Nfo"
                        alt="..."
                    />
                </MDBCarouselItem>
                <MDBCarouselItem>
                    <MDBCarouselElement
                        src="https://source.unsplash.com/SYTO3xs06fU"
                        alt="..."
                    />
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}
