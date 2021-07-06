
function index(){
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const msg = document.getElementById("msg");

    const form = document.getElementById('form-contato');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        window.localStorage.setItem('nome', `${nome.value}`);
        window.localStorage.setItem('email', `${email.value}`);
        window.localStorage.setItem('telefone', `${telefone.value}`);
        window.localStorage.setItem('msg', `${msg.value}`);

        window.location.replace('contato.html');
    });
}

function sucesso(){

    //  get data from localstorage
    const nome = window.localStorage.getItem('nome');
    const email = window.localStorage.getItem('email');
    const telefone = window.localStorage.getItem('telefone');
    const msg = window.localStorage.getItem('msg');

    function loadData(nome, email, telefone, msg){
        const tNome = document.getElementById('nome');
        const tFNome = document.getElementById('f-nome');
        const tEmail = document.getElementById('email');
        const tTel = document.getElementById('telefone');
        const tMsg = document.getElementById('msg');

        tNome.textContent = nome;
        tEmail.textContent = email;
        tTel.textContent = telefone;
        tMsg.textContent = msg;

        //gets first name
        tFNome.textContent = nome.split(' ')[0];
    }

    loadData(nome, email, telefone, msg);
}