const getButton = document.getElementById("btn");
const makeRequest = (e) => {
    e.preventDefault();
    console.log("button clicked");
    const promiseObj = fetch("demo.txt");
    console.log(promiseObj);
    promiseObj
        .then((res) => {
            console.log(res);
            return res.text();
        })
        .then((data) => {
            console.log(data);
        });
};
getButton.addEventListener("click", makeRequest);