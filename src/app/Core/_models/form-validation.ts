export class CustomFormValidation {
    eduEmailValidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+.[e]+[d]+[u]+$'
    regularEmailValidation = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    passwordValidation = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'
}