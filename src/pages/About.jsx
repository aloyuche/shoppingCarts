import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6 text-start">
          <h1 className="text-primary fw-bold mb-4">ABOUT US</h1>
          <hr />
          <p className="lead text-justify">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Felis eget nunc lobortis mattis.
            Suscipit adipiscing bibendum est ultricies integer quis auctor elit.
            Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.
            At volutpat diam ut venenatis tellus in metus. <p></p>
            Dignissim cras tincidunt lobortis feugiat vivamus at. Elementum
            tempus egestas sed sed risus pretium quam vulputate dignissim. Enim
            neque volutpat ac tincidunt vitae semper quis lectus. Hac habitasse
            platea dictumst quisque sagittis purus sit amet. At varius vel
            pharetra vel. Mattis pellentesque id nibh tortor id. Egestas diam in
            arcu cursus. Non arcu risus quis varius quam quisque id diam.
            Dignissim convallis aenean et tortor at. Eu tincidunt tortor aliquam
            nulla facilisi cras fermentum. Sed odio morbi quis commodo odio
            aenean sed. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
          </p>
          <NavLink to={"/contact"} className="btn btn-outline-primary">
            Contacts
          </NavLink>
        </div>
        <div className="col-md-6 items-center">
          <img
            src="https://res.cloudinary.com/cheloytec/image/upload/v1665333369/online-shop/car.png"
            alt=""
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
