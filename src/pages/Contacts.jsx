import React from "react";

const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63404.88736574954!2d3.41707935!3d6.6710115000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1670424027149!5m2!1sen!2sng" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
const Contacts = () => {
  const Iframe = (props) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  };
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Contact us for more Info</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Iframe iframe={iframe} />
          </div>
          <div className="col-md-6 mb-5">
            <form>
              <div class="mb-3 justify-start">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  placeholder="Full Name:"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Comment"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
