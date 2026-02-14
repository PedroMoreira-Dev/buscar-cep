async function searchCep() {
  var cep = document.getElementById("cep").value;

  if (cep == "") {
    alert("Digite um CEP!");
    return;
  }

  if (cep.length != 8) {
    alert("O CEP precisa ter 8 números!");
    return;
  }
  var loading = document.getElementById("loading");
  loading.style.display = "block";

  try {

    var resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    var dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
    } else {

      // 8️⃣ Mostrar na tela
      document.getElementById("rua").innerHTML = dados.logradouro;
      document.getElementById("bairro").innerHTML = dados.bairro;
      document.getElementById("localidade").innerHTML = dados.localidade;
      document.getElementById("estado").innerHTML = dados.uf;
    }

  } catch (erro) {

    alert("Erro ao buscar o CEP!");
  }
  loading.style.display = "none";
}


function clearFields() {

  document.getElementById("cep").value = "";
  document.getElementById("rua").innerHTML = "-";
  document.getElementById("bairro").innerHTML = "-";
  document.getElementById("localidade").innerHTML = "-";
  document.getElementById("estado").innerHTML = "-";
}


// Modo escuro simples
var botao = document.getElementById("toggleTheme");

botao.onclick = function() {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    botao.innerHTML = "☀️";
  } else {
    botao.innerHTML = "🌙";
  }

};
