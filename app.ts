//basic
var id:number  = 5

let company: string = 'codewalla'
let isPub: boolean = true
let x: any = 'Hello'

let ids:number[] = [1,2,3,4,5]
let arr : any[] = [1,true,'k']

//tuple
let person:[number,string, boolean] = [1,'brad',true]

let employee:[number,string][] 
employee = [
    [1,'king'],
    [4,'shuk'],
    [6,'shake'],
    [56,'frag'],
]

//Union
let pid: string | number =22

pid = 2

//enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)


//objects
type User = {
    id: number,
    name: string
}


const user:User={
        id: 1, 
        name: 'John',
    }

//Type Assertion
 let cid: any =1
 let customerId = cid as number

 //function 

 function addnum(x:number,y:number):number{
     return x+y
 }

 console.log(addnum(1,2))

 function log(message : string | number){
     console.log(message);
 }

//interfaces
interface UserInterface{
    readonly id: number,
    name: string,
    age?:number
}


const user1:UserInterface = {
        id: 1, 
        name: 'John',
    }


interface MathFunc {
    (x: number, y: number) :number
}

const add: MathFunc = (x: number, y: number) : number => x+y
const sub: MathFunc = (x: number, y: number) : number => x-y


//Classes

interface PersonInterface{
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface { 
    id : number
    name : string
    constructor(id: number, name:string){
        this.id =  id
        this.name = name
    }
    register(): string {
        return `${this.name} is now registered`
    }
}

const kingshuk  = new Person(1,'kingshuk')
