function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor telah disalin: " + number);
    });
}