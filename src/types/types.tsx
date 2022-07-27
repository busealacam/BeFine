
/**** type of navigation ****/
export type NavigationTypeParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
}

/**** type of operation form registration form ****/
export type IFormType = {
    formType: "login" | "signin" | "loggedin"
}

/**** type of registration form ****/
export type RForm = {
    email: string,
    password: string,
    operation: "login" | "signin" | "loggedin"
}

/**** type of dashboard form ****/
export type DashForm = {
    name: string,
    email: string,
    password: string,
    id: string,
}

