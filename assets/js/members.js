function seeDetails(member) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('activate');

    switch(member) {
        case 'ali':
            var popupAli = document.getElementById('popup-ali');
            popupAli.classList.toggle('activate');
            break;
        case 'amalia':
            var popupAmalia = document.getElementById('popup-amalia');
            popupAmalia.classList.toggle('activate');
            break;
        case 'farra':
            var popupFarra = document.getElementById('popup-farra');
            popupFarra.classList.toggle('activate');
            break;
        case 'laras':
            var popupLaras = document.getElementById('popup-laras');
            popupLaras.classList.toggle('activate');
            break;
    }
}