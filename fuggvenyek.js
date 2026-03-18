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

export function gombLenyom() {
    let gombElem = document.querySelector("button");
    let poz1Elem = document.getElementById("pozicio1");
    let poz2Elem = document.getElementById("pozicio2");
    gombElem.addEventListener("click",function() {
        let poz1 = poz1Elem.value;
        let poz2 = poz2Elem.value;
        console.log(poz1,poz2);

        if(utesEllenorzes(poz1,poz2)){
        console.log("Leütötték egymást!")
        }else{
            console.log("Nem ütötték le egymást!")
        }
    })
    
}
export function utesEllenorzes(poz1, poz2) {
    let o1 = poz1[0];
    let s1 = poz1[1];

    let o2 = poz2[0];
    let s2 = poz2[1];

    if(o1 == 'a'){
        o1 = 1;
    }else if(o1 == "b"){
        o1 = 2;
    }else if(o1 == "c"){
        o1 = 3;
    }else if(o1 == "d"){
        o1 = 4;
    }else if(o1 == "e"){
        o1 = 5;
    }else if(o1 == "f"){
        o1 = 6;
    }else if(o1 == "g"){
        o1 = 7;
    }else if(o1 == "h"){
        o1 = 8;
    }else{
        o1 = 0;
    }

    if(o2 == "a"){
        o2 = 1;
    }else if(o2 == "b"){
        o2 = 2;
    }else if(o2 == "c"){
        o2 = 3;
    }else if(o2 == "d"){
        o2 = 4;
    }else if(o2 == "e"){
        o2 = 5;
    }else if(o2 == "f"){
        o2 = 6;
    }else if(o2 == "g"){
        o2 = 7;
    }else if(o2 == "h"){
        o2 = 8;
    }else{
        o2 = 0;
    }

    if ((poz1 != "" && poz2 != "") && (9>o1>0 && 9>o2>0 && 9>s1>0 && 9>s2>0 )){
        if(s1 == s2 || o1 == o2){
        return true;
    }else if(Math.abs(o1-o2) == Math.abs(s1-s2)){
        return true
    }else{
        return false
    }
    }else{
        return false;
    }
    
}