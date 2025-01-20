// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// selezione richiesta dati



    const selectNamePassenger = document.getElementById('SelectName');


    const selectKM = document.getElementById('selectKM');
    
    
    const selectAge = document.getElementById('name-passenger');
    
    const maggiorenne = document.getElementById("age-18");
    
    
    
    
    // selezione biglietto effettivo 
    
    
    const namePassenger = document.getElementById('name-passenger');
    const typeTicket = document.getElementById('type-ticket');
    const cariage = document.getElementById('cariage');
    const ticketCode = document.getElementById('ticket-code');
    const ticketPrice = document.getElementById('ticket-price');
    const btnInvio =  document.getElementById('calculateBtn');

btnInvio.addEventListener('click', function() {



    let eta = selectAge.value;
    let km = selectKM.value;
    let nome = selectNamePassenger.value;




    let offerta = "Standard"




    let priceBase = 0.21;    
    const scontoGiovani = 0.20;
    const scontoAnziani = 0.40;
  
    
    let finalPrice;  
    let price = km * priceBase
    let priceDiscount = 0;
    
    if (eta === " age-min18") {
        
        priceDiscount = price * scontoGiovani;
        
        finalPrice = price - priceDiscount
        offerta = "sconto giovani"
        
    } else if (eta === "age-over") {
        
        priceDiscount = price * scontoAnziani;
        
        finalPrice= price - priceDiscount
        offerta = "sconto over 65"

        
    } else {
        

        finalPrice = price;
    }
    
    // Generate random carriage and CP code
    const randomCarriage = Math.floor((Math.random() * 10) + 1);
    const randomCP = Math.floor((Math.random() * 99999) + 1);
    
    namePassenger.textContent = nome;
    cariage.textContent = randomCarriage;
    ticketCode.textContent = randomCP;
    ticketPrice.textContent = finalPrice;
    typeTicket.textContent = offerta;


})    




