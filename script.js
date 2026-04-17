// Kada učita stranicu, pripremi QR kod
document.addEventListener('DOMContentLoaded', function() {
    // VAŽNO: Zameni YOUR_ALBUM_ID sa pravim ID-om Google Photos albuma
    // Primer: https://photos.app.goo.gl/a1b2c3d4e5f6g7h8i9
    
    const googlePhotosLink = "https://photos.app.goo.gl/YOUR_ALBUM_ID";
    const qrCodeImg = document.getElementById('qrCode');
    
    // Generiši QR kod sa QR Server API-jem
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(googlePhotosLink)}`;
    qrCodeImg.src = qrUrl;
    
    // Kada se klikne na QR kod, otvori Google Photos
    qrCodeImg.addEventListener('click', function() {
        window.open(googlePhotosLink, '_blank');
    });
    
    // Dodaj tooltip
    qrCodeImg.title = "Klikni da otvoriš galeriju!";
});
