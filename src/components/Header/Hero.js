import React from "react";

function Hero() {
    return (
        <div
            className="p-5 text-center bg-image"
            style={{
                backgroundImage:
                    "url('https://source.unsplash.com/uzlwdoUBlNc')",
                height: 300,
            }}>
            <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <div className="d-flex justify-content-center align-items-center h-100 container">
                    <div className="text-white">
                        <h1 className="mb-3">Amazing gadgets for developers</h1>
                        <h4 className="mb-3">
                            Here we gathered the cool tech gadgets we can’t live
                            without.
                        </h4>
                        <a
                            className="btn btn-outline-light btn-lg"
                            href="#!"
                            role="button">
                            Shop All
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
