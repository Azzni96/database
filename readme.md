Tässä on README.md-tiedosto projektillesi, joka käyttää Node.js:ää, MariaDB
ä ja Express.js:ää MVC-rakenteella:

markdown
Kopioi koodi
# MediaSharingApp

MediaSharingApp on Node.js-sovellus, joka käyttää MariaDB-tietokantaa median jakamiseen. Sovellus on rakennettu **MVC**-mallin mukaisesti ja sisältää API-päätepisteet käyttäjille, medialle, tykkäyksille, kommenteille ja arvosteluille.

## 📑 Sisältö

- [Ominaisuudet](#ominaisuudet)
- [Käyttöönotto](#käyttöönotto)
- [Ympäristömuuttujat](#ympäristömuuttujat)
- [API-päätepisteet](#api-päätepisteet)
- [Projektirakenne](#projektirakenne)
- [Teknologiat](#teknologiat)

---

## 🛠 Ominaisuudet

- Käyttäjä voi luoda, lukea, päivittää ja poistaa (CRUD) tietoja:
  - Käyttäjät
  - Media
  - Tykkäykset
  - Kommentit
  - Arvostelut
- Media-tiedostojen lataaminen palvelimelle (multer).
- MariaDB-tietokannan käyttö tiedonhallintaan.
- **MVC**-arkkitehtuurin mukainen koodi.

---

## 🚀 Käyttöönotto

### 1. Kloonaa tämä repositorio
```bash
git clone https://github.com/kayttaja/MediaSharingApp.git
cd MediaSharingApp
2. Asenna riippuvuudet
bash
Kopioi koodi
npm install
3. Lisää .env-tiedosto
Luo projektin juureen .env-tiedosto seuraavilla tiedoilla:

plaintext
Kopioi koodi
DB_HOST=localhost
DB_USER=mediasharingapp
DB_PASSWORD=securepassword123
DB_NAME=MediaSharingApp
PORT=3000
4. Aja tietokannan luontiskriptit
Luo MariaDB-tietokanta ajamalla media-db.sql-tiedosto:

sql
Kopioi koodi
-- Käynnistä MariaDB ja kirjaudu sisään
mysql -u root -p

-- Luo tietokanta ja taulut
SOURCE path/to/media-db.sql;
5. Käynnistä palvelin
Käynnistä sovellus kehitystilassa:

bash
Kopioi koodi
npm run dev
Sovellus käynnistyy oletuksena osoitteessa: http://localhost:3000.

🌍 Ympäristömuuttujat
Sovellus käyttää seuraavia ympäristömuuttujia, jotka määritetään .env-tiedostossa:

Muuttuja	Kuvaus	Esimerkki
DB_HOST	Tietokantapalvelimen osoite	localhost
DB_USER	MariaDB-käyttäjätunnus	mediasharingapp
DB_PASSWORD	MariaDB-käyttäjän salasana	securepassword123
DB_NAME	Tietokannan nimi	MediaSharingApp
PORT	Palvelimen portti	3000
📡 API-päätepisteet
Alla on listaus käytettävissä olevista API-päätepisteistä.

Käyttäjät
Verbi	Reitti	Kuvaus
GET	/api/users	Hae kaikki käyttäjät
GET	/api/users/:id	Hae käyttäjä ID
ä
POST	/api/users	Luo uusi käyttäjä
PUT	/api/users/:id	Päivitä käyttäjä ID
ä
DELETE	/api/users/:id	Poista käyttäjä ID
ä
Media
Verbi	Reitti	Kuvaus
GET	/api/media	Hae kaikki mediat
GET	/api/media/:id	Hae media ID
ä
POST	/api/media	Lataa uusi media
PUT	/api/media/:id	Päivitä media ID
ä
DELETE	/api/media/:id	Poista media ID
ä
Tykkäykset
Verbi	Reitti	Kuvaus
GET	/api/likes/media/:id	Hae mediatykkäykset
GET	/api/likes/user/:id	Hae käyttäjän tykkäykset
POST	/api/likes	Lisää tykkäys
DELETE	/api/likes/:id	Poista tykkäys
Kommentit
Verbi	Reitti	Kuvaus
GET	/api/comments/media/:id	Hae mediakommentit
POST	/api/comments	Lisää kommentti
DELETE	/api/comments/:id	Poista kommentti
Arvostelut
Verbi	Reitti	Kuvaus
GET	/api/ratings/media/:id	Hae media-arvostelut
POST	/api/ratings	Lisää arvostelu
DELETE	/api/ratings/:id	Poista arvostelu
📂 Projektirakenne
plaintext
Kopioi koodi
src/
├── controllers/
│   ├── commentsController.js
│   ├── likesController.js
│   ├── mediaController.js
│   ├── ratingsController.js
│   └── userController.js
├── models/
│   ├── commentsModel.js
│   ├── likesModel.js
│   ├── mediaModel.js
│   ├── ratingsModel.js
│   └── userModel.js
├── routes/
│   ├── commentsRoutes.js
│   ├── likesRoutes.js
│   ├── mediaRoutes.js
│   ├── ratingsRoutes.js
│   └── userRoutes.js
├── utils/
│   └── database.js
├── index.js
└── .env
🛠 Teknologiat
Node.js
Express.js
MariaDB
dotenv
mysql2
multer
📬 Ota yhteyttä
Jos sinulla on kysyttävää tai haluat raportoida ongelmista, lähetä viestiä projektin ylläpitäjälle.

r
Kopioi koodi

Tämä README.md antaa selkeän ja kattavan yleiskatsauksen projektistasi ja helpottaa muiden kehitt