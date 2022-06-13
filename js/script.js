document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(){
  if(document.getElementById("nome-usuario").value != "" && document.getElementById("email-usuario").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as mensagens por email.")
  }else{
    alert("Por favor, preencha os campos Nome, Email e Telefone!")
  }
}