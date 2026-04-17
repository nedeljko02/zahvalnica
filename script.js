// Kada učita stranicu, pripremi QR kod
document.addEventListener('DOMContentLoaded', function() {
    
    const googlePhotosLink = "https://photos.google.com/share/AF1QipOqgP14vbc_MCBZjcEvsDjSVeaPikrcUzQlXY_Hex9Nkv9JF0a_HksJRHf6QpvOJw?key=MVVmano4dW9SQTdJbGh4S1c1UERBeTZGenBMbXFn";
    const qrCodeImg = document.getElementById('qrCode');
    
    // Kada se klikne na QR kod, otvori Google Photos
    qrCodeImg.addEventListener('click', function() {
        window.open(googlePhotosLink, '_blank');
    });
    
    // Dodaj tooltip
    qrCodeImg.title = "Klikni ili skeniraj da otvoriš galeriju!";
});
