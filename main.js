/*const firstName = 'John';
const lastName = 'Wayne';
//Afficher "je m'appelle John Wayne"
const fullName = firstName + ' ' + lastName;
console.log ("je m'appelle", fullName);

//Afficher le nombre de caractère
console.log (fullName.length);

// afficher la deuxième lettres du la chaine complète
console.log (fullName.charAt("1"));
console.log (fullName[0]);

//afficher en majuscule la chaine complète
console.log(fullName.toUpperCase());

//mettre la première lettre en majuscule de la chaine suivante.
//Le reste de la chaine doit etre en miniscule

const titre = "narCos";

const firstLetter = titre.charAt(0);
//0 = afficher le titre et la premiere lettre


console.log(titre)
console.log(firstLetter.toUpperCase());

const restOfTheWord = (titre.substr(1));

console.log (restOfTheWord.toLowerCase());

console.log (firstLetter.toUpperCase() + restOfTheWord.toLowerCase());


const firstName ='Tony';
const lastName ='Stark'
const victoire = '20'
console.log (`je m'appelle ${firstName} ${lastName} et j'ai ${victoire} victoires`)


const villes = ['Paris', 'Lyon', 'Marseille'];
for (let index = 0; index < villes.length; index++) {
    console.log(villes[index].toUpperCase());
}



//calculer la moyenne de la classe :

const notes = [12, 16, 13, 17, 19, 15];
let notesTotales = 0;

for (let index = 0; index < notes.length ; index++) {
    notesTotales = notesTotales + notes[index];
    
}
console.log (notesTotales);
notesTotales = notesTotales/notes.length;
console.log (notesTotales);



// const notesTotales = notes.reduce((a, b)=> a + b);

// for (let index = 0; index <= notes.length; index++) 

//1 Je fais lire par la boucle tout les éléments de mon tableau

//2 J'additionne les chiffres du tableau

//3 je divise le totale par le nombre d'éléments
 

const fibonacci = [0, 1, 1, 2, 3, 5];

for (let index = 6; index < 50; index++) {
    fibonacci[index] = fibonacci[index -1] + fibonacci [index -2];
    fibonacci.push(fibonacci[index]);
}

console.log(fibonacci);



const n = [2, 4, 9];

for (let index = 0; index < n.length; index++) {
    n[index] = n[index] * n[index];
    
}
console.log(n);



//mot inversé

const film = "avengers";

let s = 'avengers';

let inverse = s.split('').reverse().join('');
console.log(inverse);




//1 diviser la chaine de caractère et la mettre dans un tableau --> avec split 

//2 inverser les chaines de caractère --> avec reverse

//3 affiche les chiffres inverse dans le tableau --> join









//afficher l'heure et le jour avec condition if et else qui dit bonjour ou bonsoir


const date = new Date();
console.log(date);




const login = 'avatar200';
const pwd = '12345678';

let signe = prompt("Entrez votre login");

console.log(signe);

if (signe === login) {

    console.log("c'est le bon login");
} else {
    console.log ("C'est pas le bon login")
}


if (signe === login) {
let mdp = prompt("Entrez votre pwd");

console.log(mdp);

if (mdp === pwd) {
    console.log("c'est le bon pwd");
} else {
    console.log ("C'est pas le bon pwd")
}

}


const login = 'avatar200';
const pwd = '12345678';

let lgn;
let mdp;
let vcompteur= 0;

while (lgn !== login || mdp !== pwd) {
    lgn = prompt("Entrez votre login");
    mdp = prompt("Entrez le mdp");
    vcompteur++;

    if (lgn === login && mdp === pwd) {
        console.log("Success");

    } else {
        console.log("mot de passe ou login incorrect");
    }
    if (vcompteur >= 3) {
        console.log("Compte bloqué");
        break;
    }
}



*/





//Code césar - cryptographie
//Créez un algorithme permettant de crypter une chaine de caractères.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : avengers
//    chaine cryptée : bwfohfst
/*
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nonCryptee = "avengers";



const cryptedTab = [];
let lettreCryptee = '';
 

    const cryptee = nonCryptee.split("");
    stringToTab.forEach((lettre) => {
        if(lettre === 'b'){
            lettreCryptee = 'a';
        } else {
            let  = alphabet.indexOf(letter);
            cryptedLetter = alphabet[indexOfLetter + 1];
        }
        cryptedTab.push(cryptedLetter);
    });
    return cryptedTab.join('');
};
console.log(dataCrypted(nonCryptee));

//1 attribuer un chiffre croissant a chaque lettre (a = 1 ; b = 2 ; c = 3  etc)


//2  diviser la chaine de caractère avengers et la mettre dans un tableau --> avec split 



//3 afficher les nombres et les chiffres  dans le tableau --> join

//4 afficher le tableau +1 pour chaque caractère.


*/
/*

let Nmystere;
let Joueur2;
let vcompteur= 0;

Nmystere = prompt("Joueur 1 : Entrez le nombre mystère ");


while (Nmystere !== Joueur2) {

    Joueur2 = prompt("Joueur 2 : Devinez le nombre mystère");
    vcompteur++;
    if (Joueur2 < Nmystere){
        console.log("C'est plus grand que " + Joueur2 + " !");	
    } else if (Joueur2 > Nmystere) {
        console.log("C'est plus petit que " + Joueur2 + " !");
    } else {
        console.log("Bravo, vous avez trouvé le nombre mystère");
    }
    if (vcompteur >= 5) {
        console.log("Perdu");
        break;
    }
}


//Code césar - cryptographie
//Créez un algorithme permettant de crypter une chaine de caractères.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : avengers
//    chaine cryptée : bwfohfst

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nonCryptee = "avengers";


const nonCrypteeTab = nonCryptee.split('');


let i1;
alphabet[i1] 
let i2 =0;


for (i1 = 0; i1 < alphabet.length; i1++){
    if (alphabet[i1] === nonCrypteeTab[i2]) {
        nonCrypteeTab[i2] = alphabet[i1 + 1];
        i2++;
        i1=0;
    }


}
console.log (nonCrypteeTab.join(''));





//1 attribuer un chiffre croissant a chaque lettre (a = 1 ; b = 2 ; c = 3  etc)


//2  diviser la chaine de caractère avengers et la mettre dans un tableau --> avec split 



//3 afficher les nombres et les chiffres  dans le tableau --> join

//4 afficher le tableau +1 pour chaque caractère.




//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
const add = (num1, num2) => {
    return (num1 + num2);
  };
 const resultat = add (3, 4);
 console.log(resultat);


 //Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.



const square = (number) => {
  return (number * number);
};
const resultat = square(5);
console.log (resultat);




// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];

const map1 = beatles.map (x => x.toUpperCase());
console.log(map1);

/*


//Créez un tableau nommé tab dont le premier
//élément est 2, le deuxième 3 et le troisième 4.
//Créez une fonction qui renvoit la somme des éléments du tableau.

const tab = [2, 3, 4];

const somme = (tableau) => {
    let resultat = 0;
    for (i = 0; i < tableau.length; i++) {
        resultat = resultat + (tableau[i]);
    } return resultat;
}

console.log(somme(tab));



//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est positif.

const array2 = [-2, 4, -5, 3, 6];
console.log (array2);
const addPositiveNumber = (tableau) => {
    let resultat = 0;
    for (i = 0; i < array2.length; i++) {
        const tab = array2[i];
        if (tab > 0){
         resultat = resultat + (array2[i]);
        }
    }  return resultat;
}
    console.log(addPositiveNumber(array2));




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
    const perimetre = (2 * 3.14);
    return perimetre * r;
};
const resultat = périmetreCercle(2);
console.log(resultat);

// ou console.log (resultat = périmetreCercle(2));//



*/
/*


//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
let nouveauMot = "SimpLoN";


const nouveauMot2 = nouveauMot.toLowerCase();
console.log(nouveauMot2);
let lettreS = nouveauMot[0].toUpperCase();
console.log ( lettreS );

let mot = nouveauMot2.split('');
console.log(mot);
let mot2 = mot.splice(0, 1);
console.log (mot);


console.log (lettreS + mot.join(''));


const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  console.log(capitalizeFirstLetter('SimpLoN'));



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.

const chiffre = (number) => {
    if (number % 2 <= 0) {
        return "pair";
    } else if (number % 2 > 0) {
        return "impair";
    }

}
const resultat = chiffre(140);
console.log(resultat);





//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
    return word.split('').reverse().join('');
  }
  
  console.log(reverseWord('simplon'));

*/



//Reprendre la fonction qui permet de calculer la somme d'un tableau
//Le tableau est le suivant : 
const nombres = [3, 5, 6, 2];


const somme = (tableau) => {
    let resultat = 0;
    for (i = 0; i < tableau.length; i++) {
        resultat = resultat + (tableau[i]);
    } return resultat;
}

console.log(somme(nombres));