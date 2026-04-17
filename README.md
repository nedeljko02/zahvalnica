# Wedding Thank You Website - Jелена & Филип

Zahvalnica sajt sa galerijom fotos za goste.

## 📋 Šta trebam da uradim:

### 1. Kreiraj Google Photos Album
- Otvori [Google Photos](https://photos.google.com)
- Kreiraj novi albuma sa fotkama sa svadbe
- Klikni "Deli" (Share)
- Kopira link (izgleda kao: `https://photos.app.goo.gl/a1b2c3d4e5f6g7h8i9`)

### 2. Ažuriraj script.js
- Otvori `script.js` fajl
- Zameni `YOUR_ALBUM_ID` sa linkom iz koraka 1
- Primer:
```javascript
const googlePhotosLink = "https://photos.app.goo.gl/a1b2c3d4e5f6g7h8i9";
```

### 3. Postavi na GitHub Pages

**Opcija A: Preko GitHub Desktop (najjednostavnije)**
1. Skini [GitHub Desktop](https://desktop.github.com)
2. Kreiraj novi repo sa imenom `username.github.io` (zameni sa tvojim GitHub username)
3. Otpremi sve fajlove iz ovog foldera
4. Commit i push
5. Tvoj sajt će biti dostupan na: `https://username.github.io`

**Opcija B: Preko web interfejsa**
1. Ideš na [github.com](https://github.com) i napraviš novi repo `username.github.io`
2. Klikneš na "Upload files"
3. Prebacuješ sve fajlove (index.html, styles.css, script.js)
4. Tvoj sajt će biti dostupan na: `https://username.github.io`

### 4. Generiši QR kod
- Pošto je sajt live, koristi [QR Code Generator](https://www.qr-code-generator.com)
- Generiši QR kod koji linkuje na `https://username.github.io`
- Sada gosti mogu da skene QR kod i pristupe galeriji!

## 📱 Karakteristike

✨ Elegantan dizajn sa zlatnim motivima
- Responzivan (radi na svim uređajima)
- Animacije na učitavanju
- Google Photos integracija
- Nema potrebe za serverom - potpuno besplatan hosting!

## 🎨 Ako želiš da promeniš:

- **Boje**: Izmeni vrednosti u `styles.css` (pogledaj `#b89632` za zlatnu, `#6b5d4f` za smeđu)
- **Tekst**: Izmeni u `index.html`
- **Font**: Ažuriraj `font-family` u `styles.css`
- **Datum**: Izmeni "2. 5. 2026." u `index.html`

## ❓ Pomoć

Ako nešto ne radi, provjeri:
- Je li Google Photos link korektan?
- Je li sajt na adresi `https://username.github.io/`?
- Jesu li svi fajlovi (html, css, js) u istom direktorijumu?

**Srećno sa galerijom! 💍**
