

export interface SignUpProps {
    username: string,
    email: string,
    password: string,
    password_confirmation: string
}
export interface SignInProps {
    email: string,
    password: string,
}

export interface IGenericResponse {
    status: string;
    message: string
}