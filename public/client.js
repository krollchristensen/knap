document.getElementById('btn').addEventListener('click', () => {
    fetch('/api/message')
        .then(res => res.json())
        .then(data => {
            document.getElementById('output').innerText = data.message;
        });
});

/* Forklaring trin for trin
 1. document.getElementById('btn')
Finder HTML-elementet med id="btn" (altså knappen), som brugeren kan klikke på.

2. .addEventListener('click', () => { ... })
Siger: “Når knappen bliver klikket på, så skal denne funktion køre.”
Det kaldes en event listener – altså: Lyt efter klik.

3. fetch('/api/message')
Når der klikkes, sendes der en HTTP GET-anmodning til backenden på adressen /api/message.
    Det svarer til at hente noget data fra en server – fx fra en API.

4. .then(res => res.json())
Når serveren svarer, konverteres svaret fra JSON til et JavaScript-objekt.

5. .then(data => { document.getElementById('output').innerText = data.message; })
Til sidst sættes svaret ind i HTML-elementet med id="output".
    Så hvis serveren svarer { "message": "Hej fra backend!" }, vises teksten i browseren.
    */
 */