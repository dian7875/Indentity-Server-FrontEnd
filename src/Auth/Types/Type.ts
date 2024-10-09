//Tipo para el Usuario
export type User = {
  id: number;
  cedula: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  lastName1: string;
  lastName2: string;
  birthDate: Date;
  password: string;
  repeatPassword: string;
  termsAndCondicions: boolean;
};

// interfaz para respuestas del servidor
export interface ErrorResponse {
  statusCode: number;
  message: string;
}

//Mensaje de error
export type ApiError = {
  message: string;
  error: string;
  statusCode: number;
};

export interface credencial {
  cedula: string;
  password: string;
}
export interface RecoveryForm {
  email: string;
  cedula: string;
}
