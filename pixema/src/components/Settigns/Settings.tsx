import { useState } from "react";
import Input from "../ui/Input";
import { SettingsBtns, StyledBtnContainer, StyledInputTitle, StyledSettings, StyledSettingsInputContainer, StyledSettingsSection, StyledSettingsSectionTitle, StyledSettingsSections } from "./styled";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { isEmailValid, isNameValid, isPasswordValid, strsMatch } from "src/utils/validation";
import { useDispatch } from "react-redux";
import { SET_USER_DATA_CREATOR } from "src/actions/actions";
import { IUser } from "src/interfaces/IUser";
import { USERS_URL } from "src/constants/URLS";
import { EMAIL_ERR_MSG, NAME_ERR_MSG, PASSWORDS_ERR_MSG, PASSWORD_AUTH_ERR_MSG, PASSWORD_REG_ERR_MSG } from "src/constants/TextConstants";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const userData = useSelector(({userData}) => userData);
  const dispatch = useDispatch();
  
  const [name, setName] = useState<string>(userData.name);
  const [email, setEmail] = useState<string>(userData.email);
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errType, setErrType] = useState<("name" | "email" | "passwordReg" | "passwordAuth" |"passwords")[]>([]);

  const navigate = useNavigate();

  const clearFields = () => {
    setPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  const updateUser = async () => {
    let errs: ("name" | "email" | "passwordReg" | "passwordAuth" |"passwords")[] = [];

    if (!isNameValid(name)) {
      errs.push("name");
    }
    if (!isEmailValid(email)) {
      errs.push("email");
    }
    if (!errs.length) {
      setErrType([]);
      let newUserData: IUser = {
        id: userData.id,
        name: name,
        email: email,
        password: userData.password,
        favoritesId: userData.favoritesId
      }
      dispatch(SET_USER_DATA_CREATOR(newUserData));
      await fetch(`${USERS_URL}/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      });
    } else {
      setErrType(errs);
    }
  }

  const updatePassword = async () => {
    let errs: ("name" | "email" | "passwordReg" | "passwordAuth" |"passwords")[] = [];

    if (!isPasswordValid(newPassword)) {
      errs.push("passwordReg");
    }
    if (!strsMatch(password, userData.password)) {
      errs.push("passwordAuth");
    }
    if (!strsMatch(newPassword, confirmPassword)) {
      errs.push("passwords");
    }
    clearFields();
    if (!errs.length) {
      setErrType([]);
      let newUserData: IUser = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: newPassword,
        favoritesId: userData.favoritesId
      }
      dispatch(SET_USER_DATA_CREATOR(newUserData));
      await fetch(`${USERS_URL}/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      });
    } else {
      setErrType(errs);
    }
  }

  const logout = () => {
    dispatch(SET_USER_DATA_CREATOR(null));
    navigate('/');
  }

  return (
    <StyledSettings>
      <StyledSettingsSections>
        <div>
          <StyledSettingsSectionTitle>Profile</StyledSettingsSectionTitle>
          <StyledSettingsSection>
            <StyledSettingsInputContainer>
              <StyledInputTitle>Name</StyledInputTitle>
              <Input 
                placeholder="Your name"
                type="text"
                value={name}
                callback={setName}
                isSearch={false}
                errText={(errType.includes("name")) ? NAME_ERR_MSG : ""}
              />
            </StyledSettingsInputContainer>
            <StyledSettingsInputContainer>
              <StyledInputTitle>Email</StyledInputTitle>
              <Input 
                placeholder="Your email"
                type="email"
                value={email}
                callback={setEmail}
                isSearch={false}
                errText={(errType.includes("email")) ? EMAIL_ERR_MSG : ""}
              />
            </StyledSettingsInputContainer>
          </StyledSettingsSection>
        </div>
        <SettingsBtns>
          <StyledBtnContainer>
            <Button isGrey={false} callback={() => updateUser()}>Save</Button>
          </StyledBtnContainer>  
        </SettingsBtns>
        <div>
          <StyledSettingsSectionTitle>Password</StyledSettingsSectionTitle>
          <StyledSettingsSection>
            <StyledSettingsInputContainer>
              <StyledInputTitle>Password</StyledInputTitle>
              <Input
                placeholder="Your password"
                type="password"
                value={password}
                callback={setPassword}
                isSearch={false}
                errText={(errType.includes("passwordAuth")) ? PASSWORD_AUTH_ERR_MSG : ""}
              />
            </StyledSettingsInputContainer>
            <StyledSettingsInputContainer>
              <StyledInputTitle>New Password</StyledInputTitle>
              <Input
                placeholder="New password"
                type="password"
                value={newPassword}
                callback={setNewPassword}
                isSearch={false} 
                errText={(errType.includes("passwordReg")) ? PASSWORD_REG_ERR_MSG : ""}
              />
            </StyledSettingsInputContainer>
            <StyledSettingsInputContainer>
              <StyledInputTitle>Confirm Password</StyledInputTitle>
              <Input
                placeholder="Confirm password"
                type="password"
                value={confirmPassword}
                callback={setConfirmPassword}
                isSearch={false}
                errText={errType.includes("passwords") ? PASSWORDS_ERR_MSG : ""}
              />
            </StyledSettingsInputContainer>
          </StyledSettingsSection>
        </div>
      </StyledSettingsSections>
      <SettingsBtns>
        <StyledBtnContainer>
          <Button isGrey={false} callback={() => updatePassword()}>Save</Button>
        </StyledBtnContainer>
        <StyledBtnContainer>
          <Button isGrey callback={() => logout()}>Logout</Button>
        </StyledBtnContainer>
      </SettingsBtns>
    </StyledSettings>
  );
};

export default Settings;
