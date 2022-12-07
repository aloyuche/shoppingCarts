import React from "react";

const Signin = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Sign In
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <input
                  type="text"
                  placeholder="User Name:"
                  name="username"
                  ref={"userRef"}
                  onChange={"(e) => setUser(e.target.value)"}
                  value={"user"}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  placeholder="Password:"
                  name="password"
                  onChange={"(e) => setPwd(e.target.value)"}
                  value={"pwd"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
