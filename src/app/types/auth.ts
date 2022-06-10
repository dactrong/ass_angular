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