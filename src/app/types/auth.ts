export type TypeSignin ={
 email:string, 
 password:string
};


export type TypeSigninResponse ={
    token:string,
    user:{
        email:string,
        password:string
    }
}
export type User ={
    _id:string,
    name:string,
    phone:number,
    email:string,
    address:string,
    password:string
};

export type UserCreate ={
    name:string,
    phone:number,
    email:string,
    address:string,
    password:string
}