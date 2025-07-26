// Script to add sound effects to the buttons
function btnClick(event, link){
    event.preventDefault();
    var audio = document.getElementById('audioBtnClick');
    audio.play();

    setTimeout(() => {
        window.location.href = link.href;
    }, 100);
}