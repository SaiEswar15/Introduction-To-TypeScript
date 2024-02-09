//Emuns

let ticket = {
    aisle : 1,
    window : 2,
    middle : 3
}

let bookTicket = ticket.aisle

//now we can manipulate it with

ticket.aisle = 10;
console.log(ticket.aisle);

//so this is not good way of writing 

enum ticket1 {
    aisle = 1,
    window = 2,
    middle = 3,
}

let bookTicket1 = ticket1.aisle

/*ticket1.aisle = 12 */
//uncomment and see
//this is not poosible and shows error


//the point here is we can use any and default 

enum ticket2 {
    aisle,
    window,
    middle,
}

console.log(ticket2.aisle) //0

//if you dont provide any value it will start with defult 0
// and the next values keep increasing.
//hover and see over the properties

enum ticket3 {
    aisle = "aisle",
    window = 0,
    middle,
}

let bookTicket3 = ticket3.aisle

//you can also start with whatever string you want
//and next must be initialized
//if initialized with num they will keep on continuing
