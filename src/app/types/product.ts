export type Product ={
    _id:string,
    name:string,
    price:number,
    quantity:number,
    images:string,
    category:string,
    sale:number,
    status:string,
    desc:string
};

export type ProductCreate ={
    name:string,
    price:number,
    quantity:number,
    images:string,
    category:string,
    sale:number,
    status:string,
    desc:string
}