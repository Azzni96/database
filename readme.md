MediaSharingApp

MediaSharingApp on Node.js-sovellus, joka käyttää MariaDB-tietokantaa median jakamiseen. Sovellus on rakennettu MVC-mallin mukaisesti ja sisältää API-päätepisteet käyttäjille, medialle, tykkäyksille, kommenteille ja arvosteluille.

📑 Sisältö:
- Ominaisuudet
- Käyttöönotto
- Ympäristömuuttujat
- API-päätepisteet
- Projektirakenne
- Teknologiat
- Ota yhteyttä

🛠 Ominaisuudet:
- Käyttäjä voi luoda, lukea, päivittää ja poistaa (CRUD) tietoja:
  - Käyttäjät
  - Media
  - Tykkäykset
  - Kommentit
  - Arvostelut
- Media-tiedostojen lataaminen palvelimelle (multer).
- MariaDB-tietokannan käyttö tiedonhallintaan.
- MVC-arkkitehtuurin mukainen koodi.

🚀 Käyttöönotto:
1. Kloonaa tämä repositorio:
   git clone https://github.com/kayttaja/MediaSharingApp.git
   cd MediaSharingApp

2. Asenna riippuvuudet:
   npm install

3. Lisää .env-tiedosto ja määritä seuraavat arvot:
   DB_HOST=localhost
   DB_USER=mediasharingapp
   DB_PASSWORD=securepassword123
   DB_NAME=MediaSharingApp
   PORT=3000

4. Aja tietokannan luontiskriptit:
   mysql -u root -p
   SOURCE path/to/media-db.sql;

5. Käynnistä palvelin:
   npm run dev
   Sovellus käynnistyy osoitteessa: http://localhost:3000

🌍 Ympäristömuuttujat:
Sovellus käyttää seuraavia ympäristömuuttujia, jotka määritetään .env-tiedostossa:
- DB_HOST: Tietokantapalvelimen osoite (esim. localhost)
- DB_USER: MariaDB-käyttäjätunnus (esim. mediasharingapp)
- DB_PASSWORD: MariaDB-käyttäjän salasana (esim. securepassword123)
- DB_NAME: Tietokannan nimi (esim. MediaSharingApp)
- PORT: Palvelimen portti (esim. 3000)

📡 API-päätepisteet:
1. Käyttäjät
   - GET /api/users: Hae kaikki käyttäjät
   - GET /api/users/:id: Hae käyttäjä ID:llä
   - POST /api/users: Luo uusi käyttäjä
   - PUT /api/users/:id: Päivitä käyttäjä ID:llä
   - DELETE /api/users/:id: Poista käyttäjä ID:llä

2. Media
   - GET /api/media: Hae kaikki mediat
   - GET /api/media/:id: Hae media ID:llä
   - POST /api/media: Lataa uusi media
   - PUT /api/media/:id: Päivitä media ID:llä
   - DELETE /api/media/:id: Poista media ID:llä

📂 Projektirakenne:
src/
├── controllers/
├── models/
├── routes/
├── utils/
├── index.js
└── .env

🛠 Teknologiat:
- Node.js
- Express.js
- MariaDB
- dotenv
- mysql2
- multer
