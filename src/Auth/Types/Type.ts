//Tipo para el Usuario
export type User = {
  id: number;
  cedula: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  lastName: string;
  lastName2: string;
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
  username:string;
  password:string
}
