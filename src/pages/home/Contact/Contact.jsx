import React from "react"
import "./Contact.scss"
import map from "../../../assets/contact/map.png"
import { Formik, Field, Form } from "formik"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-back"> </div>
      <div className="contact-container">
        <h1 className="title">
          Fill up the form and we’ll get <br /> in touch within a few hours
        </h1>
        <div className="form-back">
          <div className="form">
            <h1 className="form-title">
              Hi, we’re <span> Tinvio! </span> And you?
            </h1>
            <Formik
              initialValues={{
                Name: "",
                BusinessName: "",
                Phone: "",
              }}
              onSubmit={(values) => console.log(JSON.stringify(values))}
            >
              <Form className="formik-form">
                <label>Name</label>
                <Field
                  className="formik-input"
                  id="Name"
                  name="Name"
                  placeholder="John Appleseed"
                />

                <label>BusinessName</label>
                <Field
                  className="formik-input"
                  id="BusinessName"
                  name="BusinessName"
                  placeholder="Burgers &Boba (Singapore)"
                />

                <label>Phone</label>
                <Field
                  className="formik-input"
                  id="Phone"
                  name="Phone"
                  placeholder="65 9123 4567"
                  type="phone"
                />
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
            <h5 className="spam">No spam, promise</h5>
          </div>
          </div>
        <img src={map} alt="map" />
      </div>
      
    </section>
  )
}

export default Contact
