import { FC, useEffect, useState } from "react";
import { StyledForm, StyledFormInputGroup, StyledFormInputTitle, StyledFormNoAcc, StyledFormTitle, StyledLink } from "./styled";
import Input from "../Input";
import Button from "../Button";
import { EMAIL_ERR_MSG, NAME_ERR_MSG, NO_USER_ERR_MSG, PASSWORDS_ERR_MSG, PASSWORD_AUTH_ERR_MSG, PASSWORD_REG_ERR_MSG } from "src/constants/TextConstants";
import { isEmailValid, isNameValid, isPasswordValid, strsMatch } from "src/utils/validation";
import { USERS_URL } from "src/constants/URLS";
import { IUser } from "src/interfaces/IUser";
import { useDispatch } from "react-redux";
import { SET_MODAL_VISIBILITY_CREATOR, SET_USER_DATA_CREATOR } from "src/actions/actions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errType, setErrType] = useState<("name" | "email" | "passwordReg" | "passwordAuth" |"passwords" | "noUser")[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearFields = () => {
    setPassword('');
    setConfirmPassword('');
  }

  const authorization = async () => {
    if (!isEmailValid(email)) {
      setErrType(["email"]);
    } else {
      let userData: IUser = {} as IUser;
      await fetch(`${USERS_URL}?email_like=${email}`)
        .then((res) => res.json())
        .then((data) => {
          userData = data[0] as IUser;
        })
        .catch((err) => console.log(err.message));
      if (userData) {
        if (strsMatch(password, userData.password)) {
          dispatch(SET_USER_DATA_CREATOR(userData));
          dispatch(SET_MODAL_VISIBILITY_CREATOR());
          navigate('/');
        } else {
          setErrType(["passwordAuth"]);
        }
      } else {
        setErrType(["noUser"]); 
      }
    }
    clearFields();
  }

  const registration = async () => {
    let errs: ("name" | "email" | "passwordReg" | "passwordAuth" |"passwords" | "noUser")[] = [];

    if (!isNameValid(name)) {
      errs.push("name");
    }
    if (!isEmailValid(email)) {
      errs.push("email");
    }
    if (!isPasswordValid(password)) {
      errs.push("passwordReg");
    }
    if (!strsMatch(password, confirmPassword)) {
      errs.push("passwords");
    }
    clearFields();
    if (!errs.length) {
      await register();
      dispatch(SET_MODAL_VISIBILITY_CREATOR());
      navigate('/');
    } else {
      setErrType(errs);
    }
  }

  const register = async () => {
    const userData: IUser = {
      name,
      email,
      password,
      favoritesId: [],
      id: 0
    }
    await fetch(`${USERS_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((data) => {
      userData.id = data.id;
    })
    .catch((err) => console.log(err.message));
    dispatch(SET_USER_DATA_CREATOR(userData));
  }

  return (
    <StyledForm>
      <StyledFormTitle>Sign {isSignIn ? "In" : "Up"}</StyledFormTitle>
      <StyledFormInputGroup>
        {!isSignIn && 
          <div>
            <StyledFormInputTitle>Name</StyledFormInputTitle>
            <Input 
              placeholder="Your name"
              type="text"
              value={name}
              callback={setName}
              isSearch={false} 
              errText={(errType.includes("name")) ? NAME_ERR_MSG : ""}
            />
          </div>
        }
        <div>
          <StyledFormInputTitle>Email</StyledFormInputTitle>
          <Input 
            placeholder="Your email"
            type="email"
            value={email}
            callback={setEmail}
            isSearch={false}
            errText={(errType.includes("email")) ? EMAIL_ERR_MSG : 
              (errType.includes("noUser")) ? NO_USER_ERR_MSG :""
            }
          />
        </div>
        <div>
          <StyledFormInputTitle>Password</StyledFormInputTitle>
          <Input
            placeholder="Your password"
            type="password"
            value={password}
            callback={setPassword}
            isSearch={false}
            errText={(errType.includes("passwordReg")) ? PASSWORD_REG_ERR_MSG : 
              (errType.includes("passwordAuth")) ? PASSWORD_AUTH_ERR_MSG : ""
            }
          />
        </div>
        {!isSignIn && 
          <div>
            <StyledFormInputTitle>Confirm password</StyledFormInputTitle>
            <Input
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              callback={setConfirmPassword}
              isSearch={false}
              errText={errType.includes("passwords") ? PASSWORDS_ERR_MSG : ""}
            />
          </div>
        }
      </StyledFormInputGroup>
      <Button isGrey={false} callback={isSignIn ? authorization : registration}>Sign {isSignIn ? "In" : "Up"}</Button>
      <StyledFormNoAcc>
        {isSignIn ? "Don't" : "Allready"} have an account?
        <StyledLink onClick={() => setIsSignIn(!isSignIn)}> Sign {isSignIn ? "Up" : "In"}</StyledLink>
      </StyledFormNoAcc>
    </StyledForm>
  );
};

export default Form;
