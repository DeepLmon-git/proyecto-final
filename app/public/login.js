const mensajeError = document.getElementsByClassName("error")[0]


document.getElementById("login-form").addEventListener("submit",async (e)=>{
  e.preventDefault();
  const email = e.target.children.email.value;
  const password = e.target.children.password.value;
  const res = await fetch("https://neumovies.onrender.com/api/login" ,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,password
    })
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})

