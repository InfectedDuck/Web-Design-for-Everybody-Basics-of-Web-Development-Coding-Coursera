function upDate(previewPic) {
    console.log("Event triggered on: " + previewPic.alt);

    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.querySelector('img').src})`;

    imageDiv.innerHTML = previewPic.querySelector('figcaption').innerText;
}

function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('placeholder.jpg')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function pageLoaded() {
    console.log("Page loaded successfully.");

    const figures = document.querySelectorAll('figure');
    for (let figure of figures) {
        figure.tabIndex = 0;
    }
}
