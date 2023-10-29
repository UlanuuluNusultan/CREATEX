import React from "react";
import styled from "styled-components";

const SignIn = ({ cloceSign }) => {
    return (
        <ModalWrapper>
            <ModalContent>
                <div className="modal">
                    <h2>Sign Up</h2>

                    <p className="modal-x-p">Sign in to your account using email and password provided during registration.</p>
                    <label className="modal-label" htmlFor="email"> Full Name
                        <input type="email" id="email" placeholder="Your email"/>
                    </label>

                    <label className="modal-label" htmlFor="password"> Email
                        <input type="password" id="password" placeholder="Your password"/>
                    </label>

                    <label className="modal-label" htmlFor="password"> Password
                        <input type="password" id="password" placeholder="Your password"/>
                    </label>


                    <label className="modal-label" htmlFor="password"> Confirm Password
                        <input type="password" id="password" placeholder="Your password"/>
                    </label>

                    <h4 className="modal-signup"> Dont have an account? <span  onClick={cloceSign}>sign in</span></h4>

                    <CustomButton onClick={cloceSign}>Sign Up</CustomButton>
                </div>
            </ModalContent>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;

    .modal {
        text-align: center;
    }

    .modal-label {
        margin-bottom: 20px;
    }

    input {
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
  
  .modal-x-p {
    color: var(--gray-700, #787A80);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    padding: 20px 0;
  }

  .modal-signup {
    color: var(--gray-800, #424551);
    font-size: 14px;
    font-weight: 400;
    margin-left: -200px;
  }

  .modal-signup span {
    color: var(--primary, #17696A);
    font-size: 14px;
    font-weight: 400;
  }
`;

const CustomButton = styled.button`
    width: 200px;
    height: 33px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  margin-top: 20px;

    &:hover {
        background-color: #45a049;
    }
`;

export default SignIn;
