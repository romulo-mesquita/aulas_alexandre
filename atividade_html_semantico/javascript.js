var contatos = []
function preencher_tabela(formulario){
    var tbody = document.querySelector(".tbody_contato")    
    var contato = [
    document.getElementById('id_Nome').value,
    document.getElementById('id_Email').value,
    document.getElementById('id_Tel').value,
    ]
    
    contatos.push(contato);
    tbody.innerHTML=""; 
    for(i=0; i <contatos.length; i++){
        tbody.innerHTML += "<tr><td>"+contatos[i][0]+"</td><td>"+contatos[i][1]+"</td><td>"+contatos[i][2]+"</td></tr>";
    }
    // document.getElementsByTagNameNS("input").value = "";
    document.getElementById('id_Nome').value="";
    document.getElementById('id_Email').value="";
    document.getElementById('id_Tel').value="";
    return false;
    
}