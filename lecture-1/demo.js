const getButton = document.getElementById("btn");
const showData = document.querySelector(".showData");
const makeRequest = (e) => {
    e.preventDefault();
    console.log("button clicked");
    fetch("demo.txt")
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            console.log(res);
            return res.text();
        })
        .then((data) => {
            showData.innerText = data;
            console.log(data);
        })
        .catch((error) => console.log(error));
};
getButton.addEventListener("click", makeRequest);