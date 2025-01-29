//Callback Hell -- callback nesting

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// };

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000)

// setTimeout(() => {
//     h1.style.color = "green";
// }, 2000);



//Promises:

// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10) +1;
//         if(internetSpeed > 4){
//             resolve("success: data is saved")
//         } else{
//             reject("fail: weak connection data not saved");
//         }
//     })
// }


// savetoDb("apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })



// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     changeColor("blue", 1000);
// }


// let jsonData = `{
//   "fact": "There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.",
//   "length": 162
// }`;

// let newjsonDta = JSON.parse(jsonData);
// console.log(newjsonDta.fact);


//API's

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data = ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ",data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR ",err);
//     })
 

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch(e) {
//         console.log("error ",e);
//     }
//     console.log("bye");
// }



// let url = "https://catfact.ninja/fact";

// let dogurl = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });


// async function getImage() {
//     try {
//         let  res = await axios.get(dogurl);
//         return res.data.message;
//         // return res.data.fact;
//     } catch (e) {
//         console.log("error = ", e);
//         return "No Image found";
//     }
// }


// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res.data.joke);
//     } catch (err) {
//         console.log(err);
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch(e) {
        console.log("error : ", e);
    }
}



