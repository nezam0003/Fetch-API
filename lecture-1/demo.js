const getButton = document.getElementById("btn");
const showData = document.querySelector(".showData");
// const makeRequest = (e) => {
//     e.preventDefault();
//     console.log("button clicked");
//     fetch("demo.txt")
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             console.log(res);
//             return res.text();
//         })
//         .then((data) => {
//             showData.innerText = data;
//             console.log(data);
//         })
//         .catch((error) => console.log(error));
// };

// Async Await

async function makeRequest(e) {
    try {
        console.log("button clickde");
        const res = await fetch("demo.txt");
        if (!res.ok) {
            throw Error(res.statusText);
        }
        console.log(res);

        const data = await res.text();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getButton.addEventListener("click", makeRequest);