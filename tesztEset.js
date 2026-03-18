import { utesEllenorzes } from "./fuggvenyek.js";
export function tesztek() {
    const tesztEsetLista = [
        {
            poz1: "b1",
            poz2: "h1",
            vart: true
        },
        {
            poz1: "d5",
            poz2: "d3",
            vart: true
        },
        {
            poz1: "b2",
            poz2: "c3",
            vart: true
        },
        {
            poz1: "b5",
            poz2: "d1",
            vart: false
        },
        {
            poz1: "h8",
            poz2: "a1",
            vart: true
        },
        {
            poz1: "a8",
            poz2: "h1",
            vart: true
        },
        {
            poz1: "",
            poz2: "",
            vart: false
        },
        {
            poz1: "x123",
            poz2: "p1",
            vart: false
        }
        
    ]

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = utesEllenorzes(tesztEsetLista[index].poz1,tesztEsetLista[index].poz2);
        console.assert(eredmeny === tesztEsetLista[index].vart, `${tesztEsetLista[index].poz1},${tesztEsetLista[index].poz2},elvárt: ${tesztEsetLista[index].vart}, kapott: ${eredmeny}`);
        
    }
    console.log("Minden teszt lefutott!")
    
}