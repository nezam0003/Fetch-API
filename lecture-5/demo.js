const getButton = document.getElementById("btn");
const postRequest = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    console.log("request post");
    const myInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, job: job }),
    };
    fetch("https://reqres.in/api/users", myInit)
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};
getButton.addEventListener("click", postRequest);