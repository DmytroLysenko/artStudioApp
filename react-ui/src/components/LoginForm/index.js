import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../common/UI/Button";

import { login } from "../../redux/auth/authOperations";

import styles from "./loginForm.module.css";

export default function LoginForm() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return console.log("Need feel all field of form");

    const credentials = {
      email,
      password,
    };

    dispatch(login(credentials));

    setMail("");
    setPassword("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button type="submit" bgImage="login" />
    </form>
  );
}
