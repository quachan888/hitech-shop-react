import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

export default function LoadingSpinner() {
    return (
        <div className="container bg-light m-5 rounded-5 p-5">
            <MDBSpinner grow color="primary">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
            <MDBSpinner grow color="primary">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
            <MDBSpinner grow color="primary">
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        </div>
    );
}
