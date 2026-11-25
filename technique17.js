(()=>{'use strict';
const march=[
['Postura e imbracatura','Base','Regola il supporto secondo il produttore, mantenendo il tamburo stabile e le spalle rilassate.','Su pad: 4 battute di quarti, 4 di ottavi a 60 BPM. Marca il passo sul posto solo dopo aver stabilizzato i colpi.','Controlla che il busto non oscilli e che il tamburo non cambi altezza.'],
['Mark time e passo','Base','Il piede sinistro e il destro alternano sul battito; le mani mantengono la suddivisione.','4 battute con soli piedi, poi aggiungi ottavi R L. Ripeti 4 volte a 60 BPM.','Se perdi il passo, torna ai quarti.'],
['Altezze e accenti','Base','Distingui colpo accentato e tap controllando l’altezza iniziale della bacchetta.','Suona otto sedicesimi R L R L R L R L; accentua 1 e 5, poi 2 e 6. 60–80 BPM.','I colpi non accentati devono restare omogenei.'],
['Double stroke e rimbalzo','Intermedio','Lascia rimbalzare la bacchetta senza stringere troppo la presa.','Alterna RR LL per 4 battute in ottavi, poi sedicesimi a 60 BPM.','Secondo colpo della coppia uguale al primo.'],
['Flam e drag','Intermedio','Nel flam la nota di abbellimento è bassa e precede la principale. Nel drag sono due note leggere.','Alterna flam destro e sinistro su quarti; poi drag alternati. 55 BPM.','Abbellimenti distinti ma vicini; evita due accenti.'],
['Tenori: zone e spostamenti','Intermedio','Numerazione dei tamburi da adattare alla propria configurazione. Cerca zone di battuta coerenti.','Otto ottavi: tamburi 1 1 2 2 3 3 4 4, con mani alternate. Inverti direzione.','Niente incroci forzati; spostamento fluido.'],
['Tenori: incroci controllati','Avanzato','Sposta le mani con piccoli movimenti e prova a velocità bassa prima di incrociarle.','Alterna due tamburi vicini su quarti; inserisci un incrocio solo quando il gesto è comodo.','La bacchetta non deve colpire il bordo.'],
['Bass line: parti divise','Intermedio','Ogni grancassa esegue un sottoinsieme del ritmo complessivo.','Quattro percussionisti: B1 B2 B3 B4 sui quattro quarti, poi su quattro ottavi consecutivi.','Ascolta il ritmo risultante e le pause degli altri.'],
['Piatti: entrate e smorzamento','Base','Studia attacchi coerenti, smorzamento controllato e gesti del direttore.','Suona sul primo quarto di ogni battuta; smorza sul terzo. Alterna con una battuta di pausa.','Nessun urto doloroso; usa protezioni uditive.'],
['Cadenza e segnali','Intermedio','Concorda un segnale di ingresso, il conteggio iniziale e una chiusura chiara.','4 battute groove, 2 di fill, 1 di risposta, 1 di chiusura. Ripeti a 80 BPM.','Tutti terminano insieme senza accelerare.'],
['Ensemble: ascolto e allineamento','Avanzato','Lavora con una sezione alla volta e poi unisci le parti.','Registra 8 battute a 80 BPM con click iniziale; riascolta senza suonare.','Verifica allineamento, dinamica e pause.'],
['Prova generale','Avanzato','Organizza una prova con riscaldamento, passaggi isolati e cadenza completa.','5 minuti rudimenti, 5 parti singole, 5 insieme, 5 revisione. Aumenta il tempo solo se pulito.','Mantieni uniformità anche durante il passo.']];
const advanced=[
['Spazzole: movimento circolare','Base','Su rullante con pelle adatta, tieni le setole aperte e il movimento leggero.','Mano sinistra: cerchio continuo in 4/4; destra: tap sui quarti a 60 BPM.','Il fruscio non deve interrompersi fra i battiti.'],
['Spazzole: sweep e tap','Intermedio','Alterna sfioramento continuo e colpi leggeri per creare contrasto.','Sinistra sweep su 1–2 e 3–4; destra tap su 2 e 4. Ripeti 8 battute.','Mantieni il volume uniforme, poi varia la dinamica.'],
['Spazzole: swing','Intermedio','Conta la suddivisione ternaria senza appesantire ogni terzina.','Destra: quarti 1 2 3 4, aggiungi il terzo ottavo della terzina dopo 2 e 4. Sinistra sweep.','Ascolta il flusso e la leggerezza.'],
['Spazzole: ballad','Avanzato','Usa piccoli cerchi e respiri fra i colpi, con attenzione al suono.','A 45 BPM, 4 battute piano, 4 pianissimo, 4 crescendo.','Evita che il crescendo alteri il tempo.'],
['Doppio pedale: impostazione','Base','Siediti stabile, regola i pedali simmetricamente e non irrigidire caviglie o anche.','Alterna piede D S su quarti, poi ottavi a 50 BPM per 20 secondi.','Colpi uniformi, stop se compare dolore.'],
['Doppio pedale: sedicesimi','Intermedio','Mantieni movimenti piccoli e controllati senza inseguire la velocità.','4 battute di ottavi D S; 1 battuta di sedicesimi; 3 di riposo. 60 BPM.','Aumenta 5 BPM solo dopo tre prove pulite.'],
['Doppio pedale: indipendenza','Intermedio','Separa il movimento dei piedi da quello delle mani.','Piedi in ottavi alternati, ride sui quarti, rullante su 2 e 4. 55 BPM.','Isola ogni arto prima di combinarli.'],
['Doppio pedale: gruppi dispari','Avanzato','Accentua gruppi di tre sopra una pulsazione in quattro.','Piedi in sedicesimi, accenti ogni terzo colpo; mani sul click. 60 BPM.','Ricomincia il ciclo dopo 3 battute da 4/4.'],
['Doppio pedale: resistenza','Avanzato','L’obiettivo è qualità costante, non durata a ogni costo.','20 secondi suonati e 40 di pausa, 4 ripetizioni al tempo comodo.','Interrompi se perdi controllo o senti tensione.']];
const care=[
['Rullante: accordatura','Base','Allenta e rimonta la pelle seguendo indicazioni del produttore. Avvicina i tiranti a mano.','Stringi a piccoli incrementi incrociati e confronta il suono vicino a ogni tirante. Regola la cordiera dopo la pelle.','Tensione omogenea, nessun tirante forzato.'],
['Tom: accordatura','Base','Le pelli battente e risonante influenzano attacco e sustain.','Parti da una tensione uniforme; modifica una pelle per volta e ascolta la differenza.','Niente pieghe e niente risonanze indesiderate eccessive.'],
['Cassa: suono e smorzamento','Base','Scegli attacco e durata in funzione del genere e della stanza.','Accorda in piccoli passi. Prova un piccolo smorzamento rimovibile, poi confronta senza.','Evita di bloccare completamente la vibrazione della pelle.'],
['Piatti: pulizia','Base','Identifica finitura e istruzioni del fabbricante.','Usa panno morbido; niente abrasivi o detergenti aggressivi.','Controlla bordi e fori; usa feltri e manicotti.'],
['Meccaniche e pedali','Intermedio','Controlla fissaggi, viti e catene secondo il manuale.','Rimuovi polvere, verifica giochi e lubrifica solo punti e prodotti indicati dal produttore.','Pedale fluido e stabile senza slittamento.'],
['Pelli e sostituzione','Intermedio','Sostituisci quando la risposta è irregolare, compaiono danni o non mantiene accordatura.','Pulisci il bordo con panno morbido; centra la nuova pelle, stringi gradualmente a croce.','Non eccedere la tensione prevista.'],
['Protezione e trasporto','Base','Proteggi l’udito, lo strumento e la schiena.','Usa custodie, smonta i piatti e trasporta carichi gestibili. Conserva in ambiente asciutto.','Prima di suonare verifica stabilità e serraggi.']];
const glossary=`Accento|Colpo intenzionalmente più forte degli altri.
Backbeat|Accento tipico sul secondo e quarto movimento in 4/4.
BPM|Battiti al minuto.
Battuta|Unità delimitata da stanghette secondo il metro.
Beat|Pulsazione regolare della musica.
Break|Interruzione o passaggio speciale del groove.
Brushes|Spazzole utilizzate per sweep e tap.
Buzz roll|Rullo con rimbalzi multipli controllati.
Cadence|Sequenza ritmica per marcia o drumline.
Clave|Schema ritmico di riferimento in varie musiche afro-cubane.
Click|Suono del metronomo.
Count-in|Conteggio preparatorio.
Crescendo|Aumento graduale dell’intensità.
Cross-stick|Colpo sul bordo del rullante con bacchetta appoggiata sulla pelle.
Diddle|Due colpi consecutivi della stessa mano.
Dinamica|Variazione dell’intensità sonora.
Downstroke|Colpo che termina con la bacchetta in posizione bassa.
Drag|Due note di abbellimento prima della principale.
Drumless|Base musicale priva della parte di batteria.
Drumline|Sezione di percussionisti, spesso in marcia.
Fill|Passaggio che collega o varia sezioni musicali.
Flam|Nota leggera immediatamente prima del colpo principale.
Foot technique|Tecnica dei piedi sui pedali.
Ghost note|Nota suonata molto piano.
Grip|Impugnatura della bacchetta.
Groove|Schema ritmico e suo carattere esecutivo.
Half-time|Sensazione di pulsazione dimezzata, pur conservando il metro.
Hi-hat|Coppia di piatti azionata con pedale.
Indipendenza|Capacità di eseguire parti diverse con arti diversi.
Levare|Posizione debole fra pulsazioni principali.
Loop|Ripetizione continua di un segmento.
Mark time|Marcare il passo sul posto.
Matched grip|Impugnatura simmetrica delle mani.
Metro|Organizzazione delle pulsazioni in gruppi.
MIDI|Protocollo digitale per trasmettere eventi musicali.
Moeller|Famiglia di movimenti fluidi della bacchetta che sfrutta il gesto e il rimbalzo.
Ostinato|Figura ritmica ripetuta.
Paradiddle|Rudimento che combina colpi singoli e doppi.
Pentagramma|Cinque linee per la notazione musicale.
Polimetria|Sovrapposizione di metri differenti.
Poliritmia|Sovrapposizione di suddivisioni ritmiche differenti.
Quads|Configurazione di quattro tenori da marcia.
Ride|Piatto usato per mantenere il tempo.
Rimshot|Colpo simultaneo su pelle e bordo.
Rudimento|Figura tecnica fondamentale per percussioni.
Shuffle|Groove con suddivisione ternaria e coppie lungo-breve.
Sincopi|Accenti o durate che spostano l’enfasi rispetto al metro.
Sticking|Indicazione della mano da utilizzare, R o L.
Subdivision|Suddivisione della pulsazione in parti uguali.
Sustain|Durata della risonanza sonora.
Sweep|Movimento strisciato della spazzola sulla pelle.
Swing|Interpretazione ritmica con particolare elasticità e articolazione.
Tap|Colpo leggero da altezza ridotta.
Terzina|Tre note nello spazio di due dello stesso valore.
Traditional grip|Impugnatura tradizionale asimmetrica.
Upstroke|Colpo seguito dal sollevamento della bacchetta.
Velocity|Valore MIDI relativo alla forza/velocità del colpo.
Warm-up|Riscaldamento tecnico graduale.`.split('\n').map(x=>x.split('|'));
function mount(id,data,select,out,key){const sel=$(select),panel=$(out);let done=[];try{done=JSON.parse(localStorage.getItem(key)||'[]')}catch{};if(!Array.isArray(done))done=[];data.forEach((x,i)=>sel.add(new Option(x[0]+' · '+x[1],i)));function render(){let i=Number(sel.value),x=data[i];panel.replaceChildren();let h=document.createElement('h4');h.textContent=x[0];panel.append(h);for(let [label,t] of [['Tecnica',x[2]],['Esercizio',x[3]],['Autocontrollo',x[4]]]){let p=document.createElement('p'),b=document.createElement('strong');b.textContent=label+': ';p.append(b,document.createTextNode(t));panel.append(p)}let b=document.createElement('button');b.textContent=done.includes(i)?'✓ Completata (annulla)':'Segna come completata';b.onclick=()=>{done=done.includes(i)?done.filter(n=>n!==i):[...done,i];try{localStorage.setItem(key,JSON.stringify(done))}catch{}render()};let p=document.createElement('p');p.className='muted';p.textContent=`${done.length}/${data.length} lezioni completate`;panel.append(b,p)}sel.onchange=render;render()}
mount('march17',march,'march17select','march17detail','drumMarch17');mount('advanced17',advanced,'advanced17select','advanced17detail','drumAdvanced17');mount('care17',care,'care17select','care17detail','drumCare17');
function dictionary(){let q=$('gloss17search').value.toLocaleLowerCase('it').trim(),out=$('gloss17out');out.replaceChildren();let results=glossary.filter(x=>x.join(' ').toLocaleLowerCase('it').includes(q));$('gloss17count').textContent=results.length+' / '+glossary.length+' termini';for(let [a,b] of results){let dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=a;dd.textContent=b;out.append(dt,dd)}}$('gloss17search').oninput=dictionary;dictionary();
})();
