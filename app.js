class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class GerenciadorUsuarios {
    #usuarios = []; 

    constructor() {
       
        this.root = document.documentElement;
        this.btnTema = document.getElementById("btnTema");
        this.anoSpan = document.getElementById("ano");
        this.inputNome = document.getElementById("nomi");
        this.inputEmail = document.getElementById("emaill");
        this.formulario = document.getElementById("formulario");

        
        this.definirAnoAtual();
        this.registrarEventos();
    }

    definirAnoAtual() {
        this.anoSpan.textContent = new Date().getFullYear();
    }

    registrarEventos() {
        
        this.formulario.addEventListener("submit", (event) => this.cadastrarUsuario(event));
     
        this.btnTema.addEventListener("click", () => this.alternarTema());
    }

    cadastrarUsuario(event) {
        event.preventDefault();
        
        const nome = this.inputNome.value;
        const email = this.inputEmail.value;
        const novoId = this.#usuarios.length + 1;

        const novoUsuario = new Usuario(novoId, nome, email);
        
        this.#usuarios.push(novoUsuario);
        
        
        this.formulario.reset();

        alert(`Parabéns, ${novoUsuario.nome}! Você agora faz parte da nossa newsletter. Seu ID é: ${novoUsuario.id}`);
        console.log("Lista atual de usuários inscritos:", this.#usuarios);
    }

    alternarTema() {
        const modoEscuroAtivo = this.root.getAttribute("data-tema") === 'escuro';

        if (modoEscuroAtivo) {
            this.root.removeAttribute("data-tema");
        } else {
            this.root.setAttribute("data-tema", "escuro");
        }
    }
}


const app = new GerenciadorUsuarios();



