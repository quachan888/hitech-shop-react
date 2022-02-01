import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import MetaData from "../components/MetaData";

function ContactPage() {
    return (
        <div className="container my-4 rounded-5 p-3 bg-light">
            <MetaData title={"Contact Us"} />
            <div className="row">
                <div className="col-md-6 p-5">
                    <h1>Contact Us</h1>
                    <p>
                        Due to increased volume and the impact of COVID-19 our
                        customer service team is busier than usual. Rest assured
                        while you may experience a higher wait time our team is
                        working hard to reply as soon as possible.
                    </p>
                    <p>
                        Note: Including the PO Number of your order will help
                        shorten the response time.
                    </p>
                    <p>
                        To speak with a Customer Service Representative Phone:
                        <br />
                        (123) 123-1234
                        <br /> Monday-Friday 8am-5pm PST
                    </p>
                </div>
                <div className="col-md-6 p-5">
                    <form>
                        <MDBInput
                            id="form4Example1"
                            wrapperClass="mb-4"
                            label="Name"
                        />
                        <MDBInput
                            type="email"
                            id="form4Example2"
                            wrapperClass="mb-4"
                            label="Email address"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            textarea
                            id="form4Example3"
                            rows={4}
                            label="Message"
                        />

                        <MDBCheckbox
                            wrapperClass="d-flex justify-content-center mb-4"
                            id="form4Example4"
                            label="Send me a copy of this message"
                            defaultChecked
                        />

                        <MDBBtn type="submit" className="mb-4" block>
                            Submit
                        </MDBBtn>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
