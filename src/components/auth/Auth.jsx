import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";

const Auth = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      initializeParticles();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeParticles = () => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          color: {
            value: "#00a10d",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              width: 80,
              height: 80,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#7c8db5",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 300,
              rotateY: 900,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 100,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 6, // Initial number of particles when clicked
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "black",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      });
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidData, setIsValidData] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error("Пожалуйста, заполните все поля.");
    } else {
      // Проверка правильности введенных данных
      if (username === "admin@gmail.com" && password === "654321") {
        // Если данные правильные, устанавливаем флаг в true
        setIsValidData(true);
      } else {
        // Если данные неправильные, показываем ошибку
        toast.error("Пожалуйста, введите правильный email и пароль.");
      }
    }
  };
  useEffect(() => {
    if (isValidData) {
      // Если данные правильные, перенаправляем на "/home"
      navigate("/");
    }
  }, [isValidData, navigate]);

  return (
    <div className={styles.auth_container}>
      <div id={styles.login_box}>
        <div className={styles.logo}>
          <h1 className={styles.logo_caption}>Business Soft</h1>
        </div>
        <div className={styles.controls}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.form_control}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.form_control}
            />

            <button
              type="submit"
              className={`${styles.btn} ${styles.btn_default} ${styles.btn_block} ${styles.btn_custom}`}
            >
              Войти
            </button>
          </form>
        </div>
      </div>

      <div id="particles-js"></div>

      <ToastContainer />
    </div>
  );
};

export default Auth;
