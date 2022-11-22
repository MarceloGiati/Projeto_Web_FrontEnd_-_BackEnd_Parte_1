const formulario = document.querySelector('form');

/*Classes*/
const Iname = document.querySelector('.name');
const Iemail = document.querySelector('.email');
const Isenha = document.querySelector('.senha');
const Ifone = document.querySelector('.fone');

function cadastrar() {
   fetch("http://localhost:888/cadastrar", {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({a: 1, b: 2})
   })
   .then(function (res) {console.log(res)})
   .catch(function (res) {console.log(res)})
};

formulario.addEventListener('submit', function (event) {
   event.preventDefault();
   const dados = {
      name: Iname.value,
      email: Iemail.value,
      senha: Isenha.value,
      fone: Ifone.value
   };

})