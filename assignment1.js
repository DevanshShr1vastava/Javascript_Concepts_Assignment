// Assignment 1: Callback Functions
// Task: Write a function fetchData that simulates fetching data from a server using a callback function.
// The function should take a callback that processes the data after a delay of 2 seconds.
// Use setTimeout to simulate the server delay.
// The data should be an array of user names. Bonus Task: Implement error handling in the callback function to simulate a case where the server might fail.

const fetchData = (cbFunction,err)=>{
    setTimeout(()=>{
        if(err){
            cbFunction(null,'Error');
        }
        else{
            cbFunction(['Johnny Karate','Billy Baxter','homosapien','Chrissy Stranger Things','Tommy Gun','Super Saiyajin','Kakarot!!'],null);
        }
    },2000);
}

const getData = (userNames,err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(userNames);
    }
};

fetchData(getData,false);
