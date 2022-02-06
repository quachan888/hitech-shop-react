import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function LoadingSpinner() {
    return (
        <div className="container my-3 bg-light p-5 rounded-5 text-center">
            <div className="row">
                <div className="col my-5">
                    <MDBSpinner className="mx-2" color="secondary">
                        <span className="visually-hidden">Loading...</span>
                    </MDBSpinner>
                </div>
            </div>
        </div>
    );
}
