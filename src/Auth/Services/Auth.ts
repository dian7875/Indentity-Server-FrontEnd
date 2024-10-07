import axios, { AxiosError } from "axios";
import api from "./ApiConfig";
import { credencial, ErrorResponse } from "../Types/Type";

// Servicio de Login
const LogIn = async (data: credencial) => {
  try {
    console.table(data);
    const response = await api.post("auth/login", data);
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

export { LogIn };
