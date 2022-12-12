const formulario = document.querySelector('form');

/*Classes*/
const Iname = document.querySelector('.name');
const Iemail = document.querySelector('.email');
const Isenha = document.querySelector('.senha');
const Ifone = document.querySelector('.fone');

function cadastrar() {
   /* End Point, endereço de acesso a API*/
   fetch("http://localhost:888/cadastrar", {
      /* Aplicação e conteudo */
      headers: {    
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      /* Metodo */
      method: "POST", 
      /* Conversor */
      body: JSON.stringify({
         name: Iname.value,
         email: Iemail.value,
         senha: Isenha.value,
         fone: Ifone.value
      })
   })
   .then(function (res) {console.log(res)})
   .catch(function (res) {console.log(res)})
};

/* Limpa cadastro */
function limpar() {
   name: Iname.value = "";
   email: Iemail.value = "";
   senha: Isenha.value = "";
   fone: Ifone.value = "";
};

formulario.addEventListener('submit', function (event) {
   event.preventDefault();

   cadastrar();
   limpar();
})