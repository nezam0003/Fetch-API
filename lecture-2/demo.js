const getButton = document.getElementById("btn");

// function makeRequest(e) {
//     console.log("button clicked");
//     fetch("demo.json")
//         .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

const makeRequest = async() => {
    try {
        console.log("button clicked");
        const res = await fetch("demo.json");
        console.log(res);
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getButton.addEventListener("click", makeRequest);