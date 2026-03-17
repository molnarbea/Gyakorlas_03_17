import { adatMegjelenit } from "./tartalmatMegjelenit.js";

export function rendezes(lista) {
    const szamlalok = {
        nev: 0,
        nemzetiseg:0,
        gyozelmek_szama:0
    }
    let thElemek = document.querySelectorAll("th");
    thElemek.forEach(function(elem){
        elem.addEventListener("click", function(event){
            let aktualisKulcs = event.target.id+
            console.log(event.target.id)
            switch (event.target.id) {
                case "gyozelmek_szama":
                    if(szamlalok[aktualisKulcs]%2 == 0){
                        lista.sort(function (a,b) {
                        return a.gyozelmek_szama - b.gyozelmek_szama;
                        })
                        szamlalok[aktualisKulcs]++;
                    }else{
                        lista.sort(function (a,b) {
                        return b.gyozelmek_szama - a.gyozelmek_szama;
                        })
                        szamlalok[aktualisKulcs]++;
                    }
                    adatMegjelenit(lista);
                    break;
                default:
                    if(szamlalok[aktualisKulcs]%2 == 0){
                        lista.sort(function (a,b) {
                        return a[aktualisKulcs] > b[aktualisKulcs] ? 1:-1;
                        })
                        szamlalok[aktualisKulcs]++;
                    }else{
                        lista.sort(function (a,b) {
                        return a[aktualisKulcs] < b[aktualisKulcs] ? 1:-1;
                        })
                        szamlalok[aktualisKulcs]++;
                    }
                    adatMegjelenit(lista);
                    break;
                }})
    })
}