import axios, { AxiosError } from "axios";
import api from "./ApiConfig";
import { credencial, ErrorResponse, RecoveryForm, User } from "../Types/Type";

// Servicio de Login
const LogIn = async (data: credencial) => {
  try {
    console.table(data);
    const response = await api.post("Auth/login", data);
    localStorage.setItem("Token", response.data);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};

const forgetPassword = async (data: RecoveryForm) => {
  try {
    const response = await api.post("auth/send-password-reset", data, {
      timeout: 10000,
    });
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};

const register = async (data: User) => {
  try {
    const response = await api.post("Auth/register", data);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};

export { LogIn, forgetPassword, register };
