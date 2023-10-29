import React, {useState} from "react";
import styled from "styled-components";
import SignIn from "./SignIn.jsx";

const Modal = ({closeModal}) => {
    const [isSignOpen, setSignOpen] = useState(false);

    const cloceSign = () => {
        setSignOpen(false)
    }

    return (
        <ModalWrapper>
            <ModalContent>
                <div className="modal">
                    <div className="modal-x">
                        <h2>Sign in</h2>
                    </div>

                    <span className="modal-xx" onClick={closeModal}><ion-icon style={{color: 'grey'}} name="close-outline"></ion-icon></span>

                    <p className="modal-x-p">Sign in to your account using email and password provided during registration.</p>
                    <div className="register-form">
                        <label className="modal-label" htmlFor="1"> Email
                            <input type="text" id="1" placeholder="Your working email"/>
                        </label>

                        <label className="modal-label" htmlFor="2"> Password
                            <input type="password" id="2" placeholder="Your working email"/>
                        </label>

                        <div className="modal-input-checkbox">
                            <input type="checkbox"/>
                            <h5>Keep me signed in</h5>
                            <h4>Forgot password?</h4>
                        </div>

                        <h4 className="modal-signup"> Dont have an account? <span className="signup" onClick={() => setSignOpen(true)}>sign up</span></h4>

                        <CustomButton onClick={() => setSignOpen(true)}>Sign In</CustomButton>

                        {isSignOpen && <SignIn cloceSign={cloceSign}/>}

                    </div>
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
  background: rgba(0, 0, 0, 0.8);
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

  .modal-x {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    text-align: center; 
  }
  
  .modal-x-p  {
    width: 390px;
    color: var(--gray-700, #787A80);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }

  .register-form {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    input {
      color: var(--gray-600, #9A9CA5);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      display: flex;
      width: 390px;
      height: 43px;
      border-radius: 6px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      flex-shrink: 0;
      padding-left: 20px;
      padding-top: 8px;
    }
    
    label {
      color: var(--gray-800, #424551);
      font-size: 16px;
      font-weight: 400;
    }
  }
  
  .modal-label2 input {
    height: 100px;
  }

  .modal-input-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-input-checkbox h4 {
    margin-left: 130px;
    color: var(--primary, #17696A);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  
  .modal-input-checkbox h5 {
    margin-left: 10px;
    color: var(--gray-800, #424551);
    font-size: 14px;
    font-weight: 400;
  }
  
  .modal-input-checkbox input {
    width: 16px;
    height: 16px;
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
  
  .modal-xx {
    position: relative;
    top: -35px;
    left: 190px;
    & ion-icon {
      font-size: 23px;
    } 
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

    &:hover {
        background-color: #45a049;
    }
`;


export default Modal;
