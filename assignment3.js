// Assignment 3: Analyzing JavaScript Heap Memory
// Task: Create a program that continuously adds data to an array to simulate a memory leak.
// Monitor heap memory usage using Chrome DevTools or performance.memory.
// Implement a cleanup mechanism to prevent memory issues.
//  Use Chrome DevTools to capture a memory snapshot and analyze retained objects to observe the simulated memory leak.

const startLeakButton = document.querySelector('#start-leak');
const cleanUpLeakButton = document.querySelector('#clean-up-leak');
const box1ToUpdate = document.querySelector('#box1-to-update');
const box2ToUpdate = document.querySelector('#box2-to-update');
const showArrayButton = document.querySelector('#show-array');
const showMemoryButton = document.querySelector('#show-memory');

let memoryLeakTestArray = [];
let i = 0;
let memoryLeaker;

const startLeak = ()=>{
    console.log('starting the leak');
    memoryLeaker = setInterval(()=>{
        updateTextBoxContent();
        memoryLeakTestArray.push(i++);
    },1000);
}

const cleanUpLeak = () => {
    console.log("Stopping the leak");
    clearInterval(memoryLeaker);
    i=0;
    memoryLeakTestArray=[];
}
const updateTextBoxContent = () =>{
    box1ToUpdate.textContent = [...memoryLeakTestArray];
    box2ToUpdate.textContent = `usedJSHeapSize :${performance.memory.usedJSHeapSize}\n,jsHeapSizeLimit :${performance.memory.jsHeapSizeLimit}\n,totalJSHeapSize :${performance.memory.totalJSHeapSize}`;
}

startLeakButton.addEventListener('click',startLeak);
cleanUpLeakButton.addEventListener('click',cleanUpLeak);
showArrayButton.addEventListener('click',()=>{
    box1ToUpdate.textContent = [...memoryLeakTestArray];
});
showMemoryButton.addEventListener('click',()=>{
    box2ToUpdate.textContent = `usedJSHeapSize :${performance.memory.usedJSHeapSize}\n,jsHeapSizeLimit :${performance.memory.jsHeapSizeLimit}\n,totalJSHeapSize :${performance.memory.totalJSHeapSize}`;
});

