var btnCadastro = document.getElementById('botao-cadastro');
var containerLogin = document.getElementById('container-login');
var container = document.getElementById('container');

var cadastroExistente = localStorage.getItem('email') && localStorage.getItem('senha');
if (cadastroExistente){
    criarBotaoVerCadastro()
}



btnCadastro.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    
    
    if(!document.getElementById('VerCadastro')){
        criarBotaoVerCadastro()
    }
})

function criarBotaoVerCadastro(){
    let btnVerCadastro = document.createElement('button');
    btnVerCadastro.textContent = `Ver Cadastro`;
    containerLogin.appendChild(btnVerCadastro);
    btnVerCadastro.setAttribute('id', 'VerCadastro');

    btnVerCadastro.addEventListener('click', () =>{
    let email = localStorage.getItem('email');
    let senha = localStorage.getItem('senha');
    
    let div = document.getElementById('divCadastro');

    if (!div){
        div = document.createElement('div');
        div.setAttribute('id', 'divCadastro');
        container.appendChild(div);

        let emailEstilizar = document.createElement('h1');
        emailEstilizar.textContent = `Email: ${email}`;
        div.appendChild(emailEstilizar);

        let senhaEstilizar = document.createElement('h1');
        senhaEstilizar.textContent = `Senha: ${senha}`;
        div.appendChild(senhaEstilizar);

        let btnRemover = document.createElement('button');
        btnRemover.textContent = `Remover Cadastro`;
        div.appendChild(btnRemover);
        btnRemover.setAttribute('id', 'btnRemover');

        btnRemover.addEventListener('click', () => {    
            localStorage.removeItem('email');
            localStorage.removeItem('senha');
            container.removeChild(div);
            containerLogin.removeChild(btnVerCadastro);

        })
        }
        else if(div){
            div.classList.toggle('esconder');
        }
    
        
    })
}





