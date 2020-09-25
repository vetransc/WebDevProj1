let myIndex = 0;

function carousel() {
    let i;
    const x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].classList.add('hide');
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].classList.remove('hide');
    setTimeout(carousel, 8000); // Change image every 8 seconds

}

carousel();
