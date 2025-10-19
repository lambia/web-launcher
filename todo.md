# Funzionalità
[x] struttura dati
[x] searchbar base
[x] movies
[x] providers
[x] parse year, stars, descr.len
[x] fix providers async order
[x] providers filter
[x] tv show
[x] link base: in base a id servizio, rimanda alla sua pagina di search
[x] fix getProviders con debouncer o interrupt
[x] aggiungi streaming community/google a tutti?
[.] link medio: trova modo per autorizzare il passaggio del bearer (estensione?) così faccio le chiamate dirette
[.] link advanced: trakt, justwatch o simile
[.] aggiungi alla ricerca youtube e spotify creando interfaccia generica
[.] a questo punto cerca direttamente su tutte le piattaforme tramite api
[ ] integrazioni node.js su macchina (spegni, avvio app)
[ ] history (scrubble in iframe)
[ ] launch external command (VLC, shutdown, steam, cambio utente) -> node.js resident rootkit
[ ] webstorage: icons, order, theme, search history?
[ ] navbar (se ci sono altre funzioni)
[ ] ordering
[ ] x-ray musica e attori?
[ ] ricerca per attori, personaggi e registi

# Stile / UI
[.] mostra targheta per TV/film
[.] movie cards -> lista?
[.] unisci movie cards e app cards
[.] layout flessibile in base al numero cards
[ ] navigazione tabindex da arrowkeys
[ ] card con box-shadow e gradiente overlay
[ ] dimensionare correttamente icone con testo (magari farlo andare daccapo?)
[ ] transition hover scale o pad
[ ] caption overlay
[ ] in mancanza di immagine mostra testo
[ ] logo + testo
[ ] cards video

# Codice
[ ] check se valori di default oggetti sono ok
[ ] crea componente svg che accetti il colore