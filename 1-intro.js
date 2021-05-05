// Async code ex

console.log("start");

setTimeout(() => {
    var c = "bye";

    console.log("hello");
},
2000);

async () => {
    console.log(c);
}

console.log("end");