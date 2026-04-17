
document.addEventListener('DOMContentLoaded', function() {
    
    const googlePhotosLink = "svadba_qr_gold.png";
    const qrCodeImg = document.getElementById('qrCode');
    
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(googlePhotosLink)}`;
    qrCodeImg.src = qrUrl;
    
    qrCodeImg.addEventListener('click', function() {
        window.open(googlePhotosLink, '_blank');
    });
    
    qrCodeImg.title = "Klikni da otvoriš galeriju!";
});
