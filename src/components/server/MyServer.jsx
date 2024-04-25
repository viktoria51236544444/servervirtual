import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PowerOffIcon from "@mui/icons-material/PowerOff";



function MyServer() {
  const [paused, setPaused] = useState({});
  const [poweredOff, setPoweredOff] = useState({});

  const handlePause = (id) => {
    setPaused((prevPaused) => ({
      ...prevPaused,
      [id]: !prevPaused[id],
    }));
  };

  const handlePowerOff = (id) => {
    setPoweredOff((prevPoweredOff) => ({
      ...prevPoweredOff,
      [id]: !prevPoweredOff[id],
    }));
  };

  return (
    <div className="wrapper">
      <div className="table">
        <div className="row header green">
          <div className="cell">
            ID
          </div>
          <div className="cell">
            Логин
          </div>
          <div className="cell">
            IP
          </div>
          <div className="cell">
            Пароль
          </div>
          <div className="cell">
            Статус
          </div>
          <div className="cell">
            Перезагрузить
          </div>
          <div className="cell">
            Выключить
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="ID">
            12345
          </div>
          <div className="cell" data-title="Логин">
            Admin
          </div>
          <div className="cell" data-title="IP">
            77.695.88.40.45698
          </div>
          <div className="cell" data-title="Пароль">
            Grup8569
          </div>
          <div className="cell" data-title="Статус">
            Активен до 18.06.24
          </div>
          <div className="cell">
            <IconButton onClick={() => handlePause(12345)}>
              {paused[12345] ? <DoubleArrowIcon /> : <PauseIcon />}
            </IconButton>
          </div>
          <div className="cell">
            <IconButton
              onClick={() => handlePowerOff(12345)}
              style={{ color: poweredOff[12345] ? "grey" : "red" }}
            >
              <PowerOffIcon />
            </IconButton>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="ID">
            18345
          </div>
          <div className="cell" data-title="Логин">
            Admin
          </div>
          <div className="cell" data-title="IP">
            77.695.88.40.45698
          </div>
          <div className="cell" data-title="Пароль">
            Grup8569
          </div>
          <div className="cell" data-title="Статус">
            Активен до 18.06.24
          </div>
          <div className="cell">
            <IconButton onClick={() => handlePause(18345)}>
              {paused[18345] ? <DoubleArrowIcon /> : <PauseIcon />}
            </IconButton>
          </div>
          <div className="cell">
            <IconButton
              onClick={() => handlePowerOff(18345)}
              style={{ color: poweredOff[18345] ? "grey" : "red" }}
            >
              <PowerOffIcon />
            </IconButton>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="ID">
            24569
          </div>
          <div className="cell" data-title="Логин">
            Admin
          </div>
          <div className="cell" data-title="IP">
            77.695.88.40.45698
          </div>
          <div className="cell" data-title="Пароль">
            Grup8569
          </div>
          <div className="cell" data-title="Статус">
            Активен до 18.06.24
          </div>
          <div className="cell">
            <IconButton onClick={() => handlePause(24569)}>
              {paused[24569] ? <DoubleArrowIcon /> : <PauseIcon />}
            </IconButton>
          </div>
          <div className="cell">
            <IconButton
              onClick={() => handlePowerOff(24569)}
              style={{ color: poweredOff[24569] ? "grey" : "red" }}
            >
              <PowerOffIcon />
            </IconButton>
          </div>
        </div>

        <div className="row">
          <div className="cell" data-title="ID">
            12396
          </div>
          <div className="cell" data-title="Логин">
            Admin
          </div>
          <div className="cell" data-title="IP">
            77.695.88.40.45698
          </div>
          <div className="cell" data-title="Пароль">
            Grup8569
          </div>
          <div className="cell" data-title="Статус">
            Активен до 18.06.24
          </div>
          <div className="cell">
            <IconButton onClick={() => handlePause(12396)}>
              {paused[12396] ? <DoubleArrowIcon /> : <PauseIcon />}
            </IconButton>
          </div>
          <div className="cell">
            <IconButton
              onClick={() => handlePowerOff(12396)}
              style={{ color: poweredOff[12396] ? "grey" : "red" }}
            >
              <PowerOffIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServer;
