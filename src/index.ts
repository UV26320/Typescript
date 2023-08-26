// console.log("hello world!");


//--------- Debugging the tsc script --------------------------------
// let age: number = 19;

// if(age < 50){
//     age+=10;
// }


///--------- Any keywords -------------------------------

// let age = 12047;
// let Name = "John";
// let is_published= false;

// let level;  // any type keyword 

// level = 0;
// level = '1';

// function render(documents : any) {
//     console.log(document)
// }


//-------------- Array --------------------------------

// let num: number[] = [1,2,3,'4'];    // error message
let num1: number[] = [1,2,3];    
let num3 = []; 

let num2: number[] = [1, 5, 6];
let someValue = 4; 

num2.forEach(n => {
    if (n >= someValue) {
        n += 10;
    }
});


//----------------- Tuples ----------------

let user: [number, string] = [1 ,'vara']
user[0].valueOf()
user[1].valueOf()

//---------------- Enums ----------------

// const smallEnum = 1;
// const mediumEnum = 2;
// const largeEnum = 3;

 const enum size {smallEnum = 1, mediumEnum , largeEnum}

// how we have use enum size
let num4: size = size.mediumEnum 
console.log(num4)


//--------------- functions --------------------------------

function calculator(income: number, taxYear = 2023): number {
    if (taxYear < 2023) {
        return income * 1.30;
    } else {
        return income * 2.30;
    }
}


//--------------- Object and type of aliases --------------------------------

type Employee = {
        readonly id: number,
        name : string,
        retire : (date: Date) => void
}


let employee: Employee = {
    id : 1,
    name:'vara',
    retire: (date: Date) => {
        console.log(date);
    }
}

//--------------- Union type --------------------------------

function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

  printId('uday')
  printId(10)



  //----------------- Intersection Types ----------------

  type reading = {
    book: () => void
  }
  
  type watching = {
    movie: () => void
  }

  type learning = reading & watching ; 
  
  let exam: learning = {
    book: () => {} ,
    movie: () => {}
  }



  // ----------------------------  Literal Types  ----------------------------

  type Quantity  = 50 | 100 
  let quantity: Quantity = 100

  // ----------------------------  Optional Chaining ----------------------------

type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer: Customer | null | undefined = getCustomer(1);

console.log(customer?.birthday?.getFullYear());
