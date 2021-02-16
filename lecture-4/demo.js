const getButton = document.getElementById("btn");

// Post request using promise
// const postRequest = () => {
//     console.log("request post");
//     const myInit = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: '{"name": "nezam", "job": "web dev"}',
//     };
//     fetch("https://reqres.in/api/users", myInit)
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             return res.json();
//         })
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// };

// Post request using async await
const postRequest = async() => {
    console.log("post request");
    try {
        const myInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: '{"name": "nezam", "job": "web dev"}',
        };
        const res = await fetch("https://reqres.in/api/users", myInit);
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getButton.addEventListener("click", postRequest);