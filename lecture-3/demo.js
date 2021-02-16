const getButton = document.getElementById("btn");

// Fetch single data from API using promise
// const makeRequest = (e) => {
//     console.log("button clicked");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data.title);
//         })
//         .catch((error) => console.log(error));
// };

// Fetch multiple data from API using promise
// const allPost = document.getElementById("allpost");
// const makeRequest = (e) => {
//     console.log("button clicked");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => {
//             console.log(res);
//             if (!res.ok) {
//                 throw Error(res.statusText);
//             }
//             return res.json();
//         })
//         .then((data) => {
//             data.forEach((item) => {
//                 allPost.innerHTML += `
//                <div> ID :${item.id}</div>
//                <div> Title :${item.title}</div>
//                `;
//             });
//         })
//         .catch((error) => console.log(error));
// };

//  using Async Await
const allPost = document.getElementById("allpost");
const makeRequest = async() => {
    try {
        console.log("clicked");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const showData = await res.json();
        showData.forEach((data) => {
            allPost.innerHTML += `
               <div> ID :${data.id}</div>
               <div> Title :${data.title}</div>
               `;
        });
    } catch (error) {
        console.log(error);
    }
};
getButton.addEventListener("click", makeRequest);