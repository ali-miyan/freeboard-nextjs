/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ValidationErrors, FormData } from "@/tests/form";
import { useState } from "react";

const useForm = (formType: string) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    } else if (name === "password") {
      validatePassword(value);
    } else if (name === "username") {
      validateName(value);
    }
  };

  const validateName = (username: string) => {
    if (!username) {
      setErrors((prevState) => ({
        ...prevState,
        username: "Username is required",
      }));
    } else {
      setErrors((prevState) => {
        const { username, ...rest } = prevState;
        return rest;
      });
    }
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setErrors((prevState) => ({ ...prevState, email: "Email is required" }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({ ...prevState, email: "Email is invalid" }));
    } else {
      setErrors((prevState) => {
        const { email, ...rest } = prevState;
        return rest;
      });
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
    } else {
      setErrors((prevState) => {
        const { password, ...rest } = prevState;
        return rest;
      });
    }
  };

  const validate = () => {
    const newErrors: ValidationErrors = {};

    if (formType !== "login") {
      if (!formData.username) {
        newErrors.username = "Username is required";
      }
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { formData, errors, handleChange, validate };
};

export default useForm;
