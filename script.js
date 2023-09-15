fetch("https://whatyearisit-backend-rils.vercel.app/")
.then(response=> response.json())
.then(data => {
    console.log(data)
    document.querySelector("#year").textContent =  data.year

}) //comment