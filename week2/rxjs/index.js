const {Observable} = require("rxjs")
const {map, pluck, filter} = require("rxjs/operators")

const users = {
    data: [
        {
            status: "active",
            age: 14
        },
        {
            status: "inactive",
            age: 24
        },
        {
            status: "active",
            age: 36
        },
        {
            status: "inactive",
            age: 56
        },
        {
            status: "active",
            age: 19
        },
        {
            status: "inactive",
            age: 22
        },
    ]
}

const observable = new Observable((subscriber)=>{
 
    subscriber.next(users)
    subscriber.next(users)
    subscriber.complete()
}).pipe(
    pluck("data"),
    filter((value)=> value.length >=5),
    map((value)=>{
        console.log("second op", value);
        return value.filter((user)=>user.status === "active")
    }),
    map((value)=>{
        console.log("third op", value);
        return value.reduce((sum,user)=> sum + user.age, 0) / value.length
    }),
    map((value)=>{
        console.log("forth op", value);
        if(value <24){
           throw new Error("avg age too young") 
        }
    })
)

const observer = {
    next:(value) =>{
        console.log("observer got value of "+ value);
    },
    error:(err) =>{
        console.log("observer got an " + err);
    }
}

observable.subscribe(observer)