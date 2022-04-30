//REST-API SENZA AUTENTICAZIONE
function onJson_frase(J) {
    const sezione_output = document.querySelector("#ricerca_frase .output_ricerca");
    sezione_output.innerHTML = "";

    let N_risultati = J.total_results;
    
    // Scelgo di mostrare fino a 3 risultati
    if(N_risultati>3) {
        N_risultati=3;
    }
    
    for(let i=0; i<N_risultati; i++) {
        const x = J.slips[i];
        const messaggio = x.advice;
        const consiglio_output = document.createElement("p");
        consiglio_output.textContent = messaggio;
        sezione_output.appendChild(consiglio_output);
    }//for
}//onJson_frase

function onResponse_frase(R) {
    return R.json();
}//onResponse_frase

function cerca_frase(E) {
    E.preventDefault();
    const feeling_input = document.querySelector("#ricerca_frase .selezione .barra_selezione");
    const feeling_content = encodeURIComponent(feeling_input.value);
    
    url = "https://api.adviceslip.com/advice/search/" + feeling_content;
    fetch(url).then(onResponse_frase).then(onJson_frase);
}//cerca_frase

const riferimento_frase = document.querySelector("#ricerca_frase .selezione");
riferimento_frase.addEventListener("submit", cerca_frase);



//REST-API CON AUTENTICAZIONE
function onJson_giappone(J) {
    const sezione_output = document.querySelector("#ricerca_frase .output_ricerca");
    sezione_output.innerHTML = "";
    
    let N_risultati = J.total_results;
    
    // Scelgo di mostrare un solo risultato
    if(N_risultati>1) {
        N_risultati=1;
    }
    
    /*
     parte di codice in cui si dovrebbe prelevare l'immagine dall'oggetto di tipo json, creare un elemento html di tipo <img>, riempire la src dell'elemento appena creato con quanto prelevato dall'oggetto di tipo json e inserire il prodotto finale nella sezione (lasciata appositamente vuota) destinata all'output
    */
}//onJson_giappone

function onResponse_giappone(R) {
    return R.json();
}//onResponse_giappone

function cerca_giappone(E) {
    E.preventDefault();
    const japan_input = document.querySelector("#ricerca_giappone .selezione .barra_selezione");
    const japan_content = encodeURIComponent(japan_input.value);

    fetch("https://api.gfycat.com/v1/search?q=" + japan_content,
        {
          headers: {
          "Authorization": "Bearer " + token
          }
        }
    ).then(onResponse_giappone).then(onJson_giappone);
}//cerca_giappone

const riferimento_giappone = document.querySelector("#ricerca_giappone .selezione");
riferimento_giappone.addEventListener("submit", cerca_giappone);

// SEZIONE DI OTTENIMENTO DEL TOKEN
function onTokenJson_giappone(J) {
    console.log(J)
    token = J.access_token;
}//onTokenJson_giappone

function onTokenResponse_giappone(R) {
    return R.json();
}//onTokenResponse_giappone

const client_id = "2_mHxfpQ";
const client_secret = "okv53T4tr4jzxocwYXwXBT1JeUfuzjdPU3jlMnrp0PUwlREiworzLb-GCZllrpaU";

let token;

const contenuto = {
    "grant_type":"client_credentials",
    "client_id":client_id,
    "client_secret":client_secret
};

fetch("https://api.gfycat.com/v1/oauth/token",
  {
      method: "post",
      body: JSON.stringify(contenuto),
      headers:
      {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(client_id + ":" + client_secret)
      }
  }
).then(onTokenResponse_giappone).then(onTokenJson_giappone);
