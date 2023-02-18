// create an interface
interface obj{
    title:string,
    status:boolean,
    id:number
}
// create function getname
interface Person{
    firstname:string,
    lastname?:string
}
function getName({firstname,lastname}:Person){
    return `${firstname} ${lastname}`
}

//create an interface
interface address{
    houseNumber:number,
    street:number,
    city:string,
    state:string,
    postalCode:number,
    country:string,
}

//create a PersonDetails interface
interface PersonDetails{
    Prefix?,
    phones:number[],
    addresses:string[],
    firstname:string,
    lastname:string,
    middlename?:string
}

//create a function PhoneBook
  