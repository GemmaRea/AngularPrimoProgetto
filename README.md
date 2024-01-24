# AngularPrimoProgetto
condivido il primo progetto sviluppato autonomamente 
### Traccia
Angular Pokédex
Il progetto consiste nella creazione di una single page application che gestisca una lista di
pokémon e la creazione di una o più squadre.
La GUI deve essere composta da un header, un footer e una navbar, utilizzando uno stile in tema
con l’argomento trattato dalla piattaforma.
La Navbar deve contenere i tasti homepage, lista pokémon e squadra pokémon.
L’homepage è a tua discrezione e deve contenere solo elementi grafici.
Esempio: un testo con scritto “Benvenuto nel Pokédex della regione di Kanto” o delle immagini dei
pokémon.
La voce “Lista Pokémon” deve contenere una tabella che mostri la lista di pokémon. Per la lista
utilizzare la seguente API: https://pokeapi.co/api/v2/pokemon?limit=${30} da richiamare con una
GET.
La voce “Squadra Pokémon” deve contenere le funzionalità di:
 Crea Squadra
o Nome Squadra
o Nome Allenatore
o Lista Pokemon (da scegliere tra i pokemon disponibili nella lista)
 Lista Squadre
o Mostra tutte le squadre create e, per ogni squadra:
 Elimina Squadra
 Modifica Squadra

(Le squadre possono essere salvate solo in locale)
Utilizza opportunamente tutte le funzionalità studiate e le diverse possibilità offerte da Angular.
Determina come e quanti componenti creare e stabilisci gli opportuni gradi di parentela. Utilizza
librerie grafiche come Bootstrap e Angular Material per una migliore GUI. Inizializza correttamente
il progetto e suddividi in maniera opportuna i diversi componenti e servizi.
Materiale Aggiuntivo
Se vuoi approfondire lo studio di Angular, ti suggerisco i seguenti strumenti:
1. https://jasonwatmore.com/angular-15-free-course-1-create-base-project-structure
Progetto-tutorial da replicare
2. https://www.youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ
Video di Teoria

## Documentazione Scrum - AngularPrimoProgetto
Introduzione
Il seguente documento fornisce una panoramica del primo progetto Angular sviluppato autonomamente da Gemma Rea. Il progetto è stato realizzato nel periodo dal 15/12/23 al 19/12/23 e coinvolge lo sviluppo di un'applicazione web basata su Angular.

Sprint Review
Sprint 1 - Venerdì 15/12/23
Revisione del materiale e approfondimento con video consigliato.
Inserimento di un video su Angular Material con il link aggiunto nel footer del sito.
Costruzione delle rotte, dei componenti e della logica per l'utilizzo delle chiamate "get" nel componente lista-pokemon.
Sprint 2 - Sabato 16/12/23
Ricerca e perfezionamento delle immagini utilizzate.
Lavoro dedicato allo stile del progetto e al componente homepage (totalmente grafico).
Creazione dei modelli utilizzati nel progetto e inizializzazione degli stessi.
Sprint 3 - Domenica 17/12/23
Revisione della logica delle rotte.
Approfondimento della libreria rxjs, in particolare di BehaviorSubject.
Completamento delle logiche per la gestione dei componenti squadre e form, con l'aggiunta di stile.
Sprint 4 - Lunedì 18/12/23
Studio dei diversi team in Pokémon e dei vari protagonisti.
Completamento delle logiche per la gestione dei componenti squadre e form, con l'aggiunta di stile.
Sprint 5 - Martedì 19/12/23
Revisione del progetto con l'aggiunta di modifiche per la visualizzazione dei team.
Miglioramento dello stile del form con l'utilizzo di mat-stepper.
Stesura del documento di progetto.
#### Scelte di Progettazione
###### Colore
Scelta dei colori: giallo e blu con un tocco di rosso, richiamando i colori del protagonista.
Spaziatura tra il blu e il giallo, considerando il rosso un colore forte per essere gestito nelle prime fasi.
#### Logiche e Stili dei Componenti
##### app.component:
 Aggiunta di header, footer e router-outlet per consentire l'interazione con i vari componenti.
##### homepage: 
Inizializzazione con un percorso vuoto e strutturazione della navbar. Creazione di card con link esterni e tabs.
##### lista-pokemon: 
Utilizzo dei metodi dei servizi per inizializzare i Pokémon. Visualizzazione in tabella.
##### squadra: 
Inizializzazione di allenatori e team. Utilizzo di mat-expansivepanel per la visualizzazione delle squadre.
###### form: 
Creazione del costruttore e gestione dell'aggiunta/modifica delle squadre. Visualizzazione in uno stepped verticale.
### Conclusioni
Il progetto ha visto la realizzazione di un'applicazione Angular con una struttura ben definita, logiche di routing, e l'implementazione di funzionalità di gestione squadre e form. Le scelte di design e stile sono state attentamente considerate, riflettendo la visione del prodotto di Gemma Rea. Il documento fornisce una panoramica completa delle attività svolte durante il periodo di sviluppo.





