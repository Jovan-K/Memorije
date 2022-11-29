let rezultat = document.getElementById("rez");
let memorija = [];
let skor = 0;
let rez = 0;
let i = 0;

let tekstRez = "Rezultat: "
let tekstHajskor = "Haj-Skor: "


let polje1 = document.getElementById("p1");
let polje2 = document.getElementById("p2");
let polje3 = document.getElementById("p3");
let polje4 = document.getElementById("p4");

function dodajEventListenere(i){
    if(i == 0){
        polje1.addEventListener("click", tacan);
        polje2.addEventListener("click", netacan);
        polje3.addEventListener("click", netacan);
        polje4.addEventListener("click", netacan);
    }
    else if(i == 1){
        polje1.addEventListener("click", netacan);
        polje2.addEventListener("click", tacan);
        polje3.addEventListener("click", netacan);
        polje4.addEventListener("click", netacan);
    }
    else if(i == 2){
        polje1.addEventListener("click", netacan);
        polje2.addEventListener("click", netacan);
        polje3.addEventListener("click", tacan);
        polje4.addEventListener("click", netacan);
    }
    else if(i == 3){
        polje1.addEventListener("click", netacan);
        polje2.addEventListener("click", netacan);
        polje3.addEventListener("click", netacan);
        polje4.addEventListener("click", tacan);
    }
}

function brisiEventListenere(i){
    if(i == 0){
        polje1.removeEventListener("click", tacan);
        polje2.removeEventListener("click", netacan);
        polje3.removeEventListener("click", netacan);
        polje4.removeEventListener("click", netacan);
    }
    else if(i == 1){
        polje1.removeEventListener("click", netacan);
        polje2.removeEventListener("click", tacan);
        polje3.removeEventListener("click", netacan);
        polje4.removeEventListener("click", netacan);
    }
    else if(i == 2){
        polje1.removeEventListener("click", netacan);
        polje2.removeEventListener("click", netacan);
        polje3.removeEventListener("click", tacan);
        polje4.removeEventListener("click", netacan);
    }
    else if(i == 3){
        polje1.removeEventListener("click", netacan);
        polje2.removeEventListener("click", netacan);
        polje3.removeEventListener("click", netacan);
        polje4.removeEventListener("click", tacan);
    }
}


function randomNaredni(){
    let mem = Math.floor(Math.random() * 4)
    memorija.push(mem);
}

function obelezi(mem){
    if(mem == 0){
        polje1.classList.add("mark");
        setTimeout(() => {
            polje1.classList.remove("mark");
        }, "400")
    }
    else if(mem == 1){
        polje2.classList.add("mark");
        setTimeout(() => {
            polje2.classList.remove("mark");
        }, "400")
    }
    else if(mem == 2){
        polje3.classList.add("mark");
        setTimeout(() => {
            polje3.classList.remove("mark");
        }, "400")
    }
    else if(mem == 3){
        polje4.classList.add("mark");
        setTimeout(() => {
            polje4.classList.remove("mark");
        }, "400")
    }
}


function petlja(){
    setTimeout(() => {
        obelezi(memorija[i]);
        i++;
        if(i < memorija.length){
            petlja();
        }
        else{
            i = 0;
            provera();
        }
    }, "800")
}

function netacan(){
    brisiEventListenere(memorija[i])
    if (rez > skor){
        skor = rez;
    }
    memorija.length = 0;
    rez = 0;
    rezultat.innerHTML = tekstRez + rez;
    main();
}

function tacan(){
    i++;
    provera()
}

function provera(){
    if(i > 0){
        brisiEventListenere(memorija[i-1]);
    }

    if(i < memorija.length){
        dodajEventListenere(memorija[i]);
    }
    else{
        rez++;
        if(rez > skor){
            skor = rez;
        }
        rezultat.innerHTML = tekstRez + rez;
        main();
    }
}


function main(){
    i = 0;
    randomNaredni();
    petlja();
}

// Dodaci:


function hajskor(){
    rezultat.innerHTML = tekstHajskor + skor;
}

function vratiRezultat(){
    rezultat.innerHTML = tekstRez + rez;
}


divrez = document.getElementById("rezultati");

divrez.addEventListener("mouseenter", hajskor);
divrez.addEventListener("mouseleave", vratiRezultat);