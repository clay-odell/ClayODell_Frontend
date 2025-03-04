// import { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   occupation: "",
  //   linkedIn: "",
  //   gitHub: "",
  //   socialMedia: "",
  //   reasonForContact: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here, such as sending form data to a server
  // };

  // return (
  //   <>
  //     <h2>Contact Form</h2>
  //     <p>
  //       Thanks for visiting the page, and for taking the time to fill out this
  //       form.
  //     </p>
  //   <section className="form">
  //     <form className="contact-form" onSubmit={handleSubmit}>
  //       <label>
  //         Name: <br />
  //         <input
  //           type="text"
  //           name="name"
  //           placeholder="Enter your name here..."
  //           value={formData.name}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Email: <br />
  //         <input
  //           type="email"
  //           name="email"
  //           placeholder="youremail@email.com"
  //           value={formData.email}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Phone: <br />
  //         <input
  //           type="tel"
  //           name="phone"
  //           placeholder="(123) 456-7890"
  //           value={formData.phone}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Occupation: <br />
  //         <input
  //           type="text"
  //           name="occupation"
  //           placeholder="Your occupation"
  //           value={formData.occupation}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         LinkedIn: <br />
  //         <input
  //           type="url"
  //           name="linkedIn"
  //           placeholder="LinkedIn profile URL"
  //           value={formData.linkedIn}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         GitHub: <br />
  //         <input
  //           type="url"
  //           name="gitHub"
  //           placeholder="GitHub profile URL"
  //           value={formData.gitHub}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Social Media Handle/Profile : <br />
  //         <input
  //           type="url"
  //           name="socialMedia"
  //           placeholder="@handle or url.com"
  //           value={formData.socialMedia}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Reason for Contact: <br />
  //         <input
  //           type="text"
  //           name="reasonForContact"
  //           placeholder="Why are you contacting me?"
  //           value={formData.reasonForContact}
  //           onChange={handleChange}
  //           required
  //         />
  //       </label>
  //       <br />
  //       <label>
  //         Detailed Message: <br />
  //         <textarea
  //           name="message"
  //           placeholder="Enter your message here..."
  //           value={formData.message}
  //           onChange={handleChange}
  //           required
  //         ></textarea>
  //       </label>
  //       <br />
  //       <button type="submit">Submit</button>
  //     </form>
  //     </section>
  //     </>
  // );
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate("/");
  }
  return (
    <>
    <h1>Contact Form:</h1>
    <h3>Coming Soon....</h3>
    <button onClick={handleClick}>Return to Homepage</button>
    </>
  )
};

export default Contact;
