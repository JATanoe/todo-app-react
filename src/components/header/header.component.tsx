import * as React from 'react';
import {useState, useEffect} from 'react';

import MoonIcon from "../../assets/images/icon-moon.svg?react";
import SunIcon from "../../assets/images/icon-sun.svg?react";
import {Container, HeaderLogo, HeaderSwitch, SwitchLabel, SwitchToggle} from "./header.styles.tsx";

const Header = () => {
  const [checked, setChecked] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", checked ? "light" : "dark");
  }, [checked]);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setChecked(prefersDark);
    document.documentElement.setAttribute("data-theme", prefersDark ? "light" : "dark");
  }, []);

  return (
    <Container>
      <HeaderLogo>TODO</HeaderLogo>
      <HeaderSwitch>
        <SwitchLabel htmlFor="switch">
          <SwitchToggle id="switch" checked={checked} onChange={onChangeHandler}/>
          <MoonIcon className="switch-on"/>
          <SunIcon className="switch-off"/>
        </SwitchLabel>
      </HeaderSwitch>
    </Container>
  );
};

export default Header;
