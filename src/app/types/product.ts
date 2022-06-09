export type Product ={
    _id:string,
    name:string,
    price:number,
    quantity:number,
    images:string,
    desc:string
};

export type ProductCreate ={
    name:string,
    price:number,
    quantity:number,
    images:string,
    desc:string
}