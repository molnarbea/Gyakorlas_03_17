export function adatMegjelenit(SAKKLISTA) {
    let tablazatElem = document.querySelector("tbody");
    tablazatElem.innerHTML = ""
    SAKKLISTA.forEach(function(sakk,i){
    megjelenit(sakk);
})
}




function megjelenit(adatok={nev,nemzetiseg,gyozelmek_szama}) {
    let tablazatElem = document.querySelector("tbody");
    tablazatElem.innerHTML += `<tr>
                                <td>${adatok.nev}</td>
                                <td>${adatok.nemzetiseg}</td>
                                <td>${adatok.gyozelmek_szama}</td>
                                </tr>`;
}