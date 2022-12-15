// Exercice 1
function prime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

n = parseInt(prompt("Entrez un nombre", 1));
console.log(prime(n));

// Exercice 2
function Max_Min(N1, N2, N3, N4, N5) {
    console.log("Max = " + Math.max(N1, N2, N3, N4, N5));
    console.log("Min = " + Math.min(N1, N2, N3, N4, N5));
}

Max_Min(prompt("Entrez Nombre 1 :"), prompt("Entrez Nombre 2 :"), prompt("Entrez Nombre 3 :"), prompt("Entrez Nombre 4 :"),
    prompt("Entrez Nombre 5 :"));

// Exercice 2 (version 2)
function maxMin(n1, n2, n3, n4, n5) {
    let min, max;
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
        max = n1
    }
    else if (n2 > n3 && n2 > n4 && n2 > n5) {
        max = n2;
    } else if (n3 > n4 && n3 > n5) {
        max = n3;
    } else if (n4 > n5) {
        max = n4;
    } else {
        max = n5;
    }

    if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
        min = n1
    }
    else if (n2 < n3 && n2 < n4 && n2 < n5) {
        min = n2;
    } else if (n3 < n4 && n3 < n5) {
        min = n3;
    } else if (n4 < n5) {
        min = n4;
    } else {
        min = n5;
    }

    console.log("max = " + max);
    console.log("min = " + min);
}

let n1 = parseInt(prompt("Entrez un nombre"));
let n2 = parseInt(prompt("Entrez un nombre"));
let n3 = parseInt(prompt("Entrez un nombre"));
let n4 = parseInt(prompt("Entrez un nombre"));
let n5 = parseInt(prompt("Entrez un nombre"));

maxMin(n1, n2, n3, n4, n5);

// Exercice 3
function compteur(chaine = "", lettre = "") {
    let j = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (chaine.charAt(i) === lettre) {
            j++;
        }
    }
    return j;
}
let s = "Sofia";
let l = "f";
let c = compteur(s, l);

console.log("la lettre " + l + " est répétée " + c + " fois dans la chaîne " + s);


// Exercice 4
function unique(chaine) {
    for (let i = 0; i < chaine.length; i++) {
        let c = chaine.charAt(i);
        if (chaine.indexOf(c) == i && chaine.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return "";
}

// Exercice 4 (version 2)
function uniqueV2(chaine="") {
    for (let i = 0; i < chaine.length; i++) {
        let unique = true;
        for (let j = 0; j < chaine.length; j++) {
            if(chaine.charAt(i) === chaine.charAt(j) && i !== j){
                unique = false;
                break;
            }
        }

        if(unique){
            return chaine.charAt(i);
        }
    }
    return "";
}

let chaine = prompt("Chaine :");
console.log(uniqueV2(chaine));

// Exercice 5
let MatrixUnitaire = function (n) {
    let s = ""
    for (let i = 0; i < n; i++) {
        for (let i1 = 0; i1 < n; i1++) {
            s += (i1 === i ? "1" : "0")
        }
        s += "\n"
    }
    return s
}

console.log(MatrixUnitaire(5))

