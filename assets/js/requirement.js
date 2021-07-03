function readMoreFunction(dots, more_1, more_2, read_more) {
    var dots1 = document.getElementById(dots);
    var moreText1 = document.getElementById(more_1);
    var moreText2 = document.getElementById(more_2);
    var btnText1 = document.getElementById(read_more);

    if (dots1.style.display == "none") {
        dots1.style.display ="inline";
        btnText1.innerHTML = "Read More";
        moreText1.style.display = "none";
        moreText2.style.display = "none";
    } else {
        dots1.style.display ="none";
        btnText1.innerHTML = "Read Less";
        moreText1.style.display = "inline";
        moreText2.style.display = "inline";
    }
}

function enlargeImage(space, target, zoomedImage) {
    var modal = document.getElementById(space);
    var imgTarget = document.getElementById(target);
    var zoomImg = document.getElementById(zoomedImage);

    modal.style.display = "flex";
    zoomImg.src = imgTarget.src;
}

function closeImage(target) {
    var myTarget = document.getElementById(target);
    myTarget.style.display ="none"
}