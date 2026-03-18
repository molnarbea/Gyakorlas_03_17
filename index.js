import {SAKKLISTA} from "./adatok.js"
import { rendezes, gombLenyom } from "./fuggvenyek.js";
import { adatMegjelenit } from "./tartalmatMegjelenit.js";
import { tesztek } from "./tesztEset.js";


gombLenyom();
adatMegjelenit(SAKKLISTA);
rendezes(SAKKLISTA);
tesztek();
