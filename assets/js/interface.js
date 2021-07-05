function readMoreFunction(dots, more_obj, read_more) {
    var dots1 = document.getElementById(dots);
    var btnText1 = document.getElementById(read_more);

    if (dots1.style.display == "none") {
        dots1.style.display ="inline";
        btnText1.innerHTML = "Read More";
        more_obj.forEach((item, i) => {
          var moreText = document.getElementById(item);
          moreText.style.display = "none";
        });
    } else {
        dots1.style.display ="none";
        btnText1.innerHTML = "Read Less";
        more_obj.forEach((item, i) => {
          var moreText = document.getElementById(item);
          moreText.style.display = "inline";
        });
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
