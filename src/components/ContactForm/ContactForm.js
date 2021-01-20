import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import "./ContactForm.css";

function ContactForm() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <label>{errors.clientName && <span className="error">Your name is required</span>}</label>
        <br />
        <label>
          <span>
            <h6>Phone</h6>
          </span>
        </label>
        <input
          type="tel"
          name="phone_num"
          placeholder="ex: (201) 555-0123"
          className="field-length"
          id="phone_num"
          // pattern="\d{3}[\-]\d{3}[\-]\d{4}"
          ref={register({ required: true })}
        />
        <br />
        <label>{errors.phone_num && <span className="error">Phone number is required</span>}</label>
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
              message: "Invalid Email address",
            },
          })}
        />
        <br />
        <label>
          {errors.email && <span className="error">{errors.email.message}</span>} <br />
        </label>
        <br />
        <textarea
          name="textHere"
          rows="5"
          placeholder="Tell us about your business.."
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
    </div>
  );
}

export default ContactForm;
