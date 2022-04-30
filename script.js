/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
var risposta_1 = false;
var risposta_2 = false;
var risposta_3 = false;
var quiz_completato = false;

var prima_scelta = "";
var risposte_date = { 1:"", 2:"", 3:"" };

function svolgi_quiz(evento) {
    const s = evento.currentTarget;
    const img_list = document.querySelectorAll(".img_risposta");

    if(s.dataset.questionId == "one") {
        prima_scelta = s.dataset.choiceId;
    }
    
    for(let e of img_list) {
        
        if(e.dataset.scartata === "false") {
            if(e.dataset.questionId == s.dataset.questionId && e.dataset.choiceId != s.dataset.choiceId) {
                e.querySelector("div").classList.add("non_selezionata");
                e.querySelector(".checkbox").src = "images/unchecked.png";
                e.style.backgroundColor = "#f4f4f4";
                e.dataset.scartata = "true";
            } else if(e.dataset.questionId == s.dataset.questionId && e.dataset.choiceId == s.dataset.choiceId) {
                e.querySelector(".checkbox").src = "images/checked.png";
                e.style.backgroundColor = "#cfe3ff";
                
                if(s.dataset.questionId == "one") {
                    risposte_date[1] = s.dataset.choiceId;
                } else if(s.dataset.questionId == "two") {
                    risposte_date[2] = s.dataset.choiceId;
                } else if(s.dataset.questionId == "three") {
                    risposte_date[3] = s.dataset.choiceId;
                }
            }
        }//if prima_selezione
        
        if(e.dataset.scartata === "true") {
            if(e.dataset.questionId == s.dataset.questionId && e.dataset.choiceId == s.dataset.choiceId) {
                e.querySelector("div").classList.remove("non_selezionata");
                e.querySelector(".checkbox").src = "images/checked.png";
                e.style.backgroundColor = "#cfe3ff";
                e.dataset.scartata = "false";
            }
        }//if selezioni_successive
    }//for of
    
    if(s.dataset.questionId == "one" && risposta_1 == false) {
        risposta_1 = true;
    } else if(s.dataset.questionId == "two" && risposta_2 == false) {
        risposta_2 = true;
    } else if(s.dataset.questionId == "three" && risposta_3 == false) {
        risposta_3 = true;
    }
    
    if(risposta_1 && risposta_2 && risposta_3) {
        quiz_completato = true;
    }
    
    if(quiz_completato == true) {
        for(let x of lista_img) { x.removeEventListener("click", svolgi_quiz); }
        document.querySelector("#blocco_conclusivo").style.display = "block";
        
        let blep_flag = 0;
        let burger_flag = 0;
        let cart_flag = 0;
        let dopey_flag = 0;
        let happy_flag = 0;
        let nerd_flag = 0;
        let shy_flag = 0;
        let sleeping_flag = 0;
        let sleepy_flag = 0;
        
        for(let i=1; i<=3; i++) {
            if(risposte_date[i] == "blep") {
                blep_flag++;
            } else if(risposte_date[i] == "burger") {
                burger_flag++;
            } else if(risposte_date[i] == "cart") {
                cart_flag++;
            } else if(risposte_date[i] == "dopey") {
                dopey_flag++;
            } else if(risposte_date[i] == "happy") {
                happy_flag++;
            } else if(risposte_date[i] == "nerd") {
                nerd_flag++;
            } else if(risposte_date[i] == "shy") {
                shy_flag++;
            } else if(risposte_date[i] == "sleeping") {
                sleeping_flag++;
            } else if(risposte_date[i] == "sleepy") {
                sleepy_flag++;
            }
        }
        
        if(blep_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["blep"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(burger_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["burger"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(cart_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["cart"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(dopey_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["dopey"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(happy_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["happy"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(nerd_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["nerd"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(shy_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["shy"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(sleepy_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["sleepy"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else if(sleeping_flag>=2) {
            const mappa_temporanea = RESULTS_MAP["sleeping"];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        } else {
            const mappa_temporanea = RESULTS_MAP[prima_scelta];
            document.querySelector(".giudizio").textContent = mappa_temporanea["title"];
            document.querySelector(".testo_giudizio").textContent = mappa_temporanea["contents"];
        }
    }
}//seleziona_img
const lista_img = document.querySelectorAll(".img_risposta");
for(let x of lista_img) { x.addEventListener("click", svolgi_quiz); }



function reset_quiz() {
    //ripristino dei parametri + ri-assegnazione dell'event_listener
    for(let x of lista_img) { x.addEventListener("click", svolgi_quiz); }
    risposta_1 = false;
    risposta_2 = false;
    risposta_3 = false;
    quiz_completato = false;
    prima_scelta = "";
    
    for(let chiave in risposte_date) {
        risposte_date[chiave] = "";
    }
    
    //ripristino del layout
    const img_list = document.querySelectorAll(".img_risposta");
    for(let e of img_list) {
        
        if(e.dataset.scartata == "true") {
            e.querySelector("div").classList.remove("non_selezionata");
            e.dataset.scartata = "false";
        } else {
            e.style.backgroundColor = "#f4f4f4";
            e.querySelector(".checkbox").src = "images/unchecked.png";
        }
    }
    
    document.querySelector("#blocco_conclusivo").style.display = "none";
}//reset_quiz
const pulsante = document.querySelector("button");
pulsante.addEventListener("click", reset_quiz);
