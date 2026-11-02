function Aumentarvoto(idvoto) {
    let contador = Number(document.getElementById(idvoto).innerText);
    contador++;
    document.getElementById(idvoto).innerText = contador;
}