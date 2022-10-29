import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form");
  };

  const handleChange = () => {};

  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <h1>CheloyTec</h1>
          </div>
          <input
            type="text"
            placeholder="User Name:"
            name="username"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            placeholder="Password:"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button className="btn btn-success">Register</button>
          <p>
            New member please <a href="/register">Register</a>
          </p>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    gap = 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: colunm;
    background:#131324;
    .brand{
        display:flex;
        justify-content: center;
        align-items:center;
        gap: 1rem;
        h1{
        font-size:2.8rem;
        color:white;
        
        }
        img{
            width: 20%;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        gap:1.2rem;
        background:#00000076;
        border-radius:2rem;
        padding: 2rem 4rem;

        input{
            border:0.1px solid #4e0eff;
            padding: 1rem;
            background: transparent;
            border-radius: 0.4rem;
            color:white;
            width:100%;
            font-size:1rem;
            
        }

    }
    button{
        padding: 1rem 2rem;
        background: #997af0;
        color:white;
        width:100%;
        font-weight:bold;
        border-radius: 1rem;
    }
    p{
        color: orange;
        font-size:1.2rem
    }
    
`;

export default Login;
