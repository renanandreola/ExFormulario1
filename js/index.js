//1) Criar um formulário de contato, com Nome, Email, Idade,
//Telefone e endereço. Só serão aceitos maiores de idade, todos
//os campos são obrigatários. Exibir uma mensagem de erro
//informando qual campo deve ser preenchido e uma mensagem de
//sucesso caso concluir o cadastro com sucesso.
var errors = [];

function send (event) {
  
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var idade = document.getElementById("idade").value;
  var telefone = document.getElementById("telefone").value;
  var endereco = document.getElementById("endereco").value;
  var result = document.getElementById("result");
  
	
	if (name === "" || name.split(" ").length < 2) {
		errors.push("Seu nome deve estar completo" + "<br/>");
	}if (email === "") {
		errors.push("Adicione seu endereço de email" + "<br/>");		
	}if (idade === "") {
		errors.push("Adicione sua idade" + "<br/>");
	}if (telefone === "") {
		errors.push("Adicione seu número de telefone" + "<br/>");
	}if (endereco === "") {
		errors.push("Adicione seu endereço" + "<br/>");
	}

	if (errors.length > 0) {
		result.innerHTML = errors;
		result = 0;
		errors = [];
	}else if (idade < 18) {
			result.innerHTML = ("Somente para maiores de idade")
		}else {
			result.innerHTML = "CADASTRO CONCLUÍDO" + "<br/>" + name + "<br/>" + email + "<br/>" + idade + "<br/>" + telefone + "<br/>" + endereco;
			result = 0;
			errors = [];	
		}
}