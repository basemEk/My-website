import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ContactForm.css";


function ContactForm() {

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => console.log(values);

  const history = useHistory();

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="contact-us">Contact Us</h1>
        <div className="name-phone-email">
          <label>
            <h6>Name</h6>
          </label>
          <span>
            <input
              type="text"
              name="clientName"
              placeholder="Enter your Name Here"
              className="field-length"
              ref={register({ required: true })}
            />
          </span>
          <br />
          <label>
            {errors.clientName && (
              <span className="error">Your name is required</span>
            )}
          </label>
          <br />
          <label>
            <span>
              <h6>Phone</h6>
            </span>
          </label>
          <input
            type="number"
            name="phone_num"
            placeholder="ex: (201) 555-0123"
            className="field-length"
            id="phone_num"
            //   pattern="^-?[0-9]\d*\.?\d*$"
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
            ref={register({ required: true })}
          />
          <br />
          <label>
            {errors.phone_num && (
              <span className="error">Phone number is required</span>
            )}
          </label>
          <br />
          <label>
            <h6>Email</h6>
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            className="field-length"
            ref={register({
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid Email Address",
              },
            })}
          />
          <br />
          <label>
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}{" "}
            <br />
          </label>
        </div>
        <br />
        <textarea
          className="textarea-field"
          name="textHere"
          rows="5"
          placeholder="Tell us about your Business.."
          rows="5"
          cols="80"
          ref={register({
            required: true,
          })}
        />

        <br />
        <br />
        <Button type="submit" variant="danger" className="submit">
          <b>Submit</b>
        </Button>
      </form>

      <div>
        <Button className="back-to-home" onClick={() => history.push("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
