import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Information from "./Information";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Btn } from "./Information";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [date, setDate] = useState("2012-03-24");
  const apiKey = "Jz0JKubQ4OawzIo1KDsb4C9Z9dqbh3FC56Pqz7FU";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
      .then(res => {
        setData(res.data);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [date]);

  const changeDate = dateInfo => {
    setDate(dateInfo.dates);
  };
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode container" : "container"}>
      <ToggleBg>
        <ToggleBtn
          onClick={toggleTheme}
          className={darkMode ? "dark-mode-btn" : ""}
        >
          {darkMode ? "light" : "dark"}
        </ToggleBtn>
      </ToggleBg>
      <Parent>
        {isLoaded ? (
          <Information data={data} changeDate={changeDate} />
        ) : (
          <Loading>
            Loading
            <CircularProgress />
          </Loading>
        )}
      </Parent>
    </div>
  );
};

export default MainApp;

const Parent = styled.div`
  max-width: 800px;
  margin: 5rem auto 0;
  border-radius: 5px;
  padding: 2rem 0;
  box-shadow: -1px -1px 14px 0px rgba(94, 87, 94, 0.78);
`;

const ToggleBg = styled.div`
  padding: 4rem 0 0 4rem;
`;

const ToggleBtn = styled(Btn)`
  font-size: 0.7rem;
`;

const Loading = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
