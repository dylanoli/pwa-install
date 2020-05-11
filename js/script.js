let btnAdd = document.getElementById("btnAdd");
btnAdd.style.display = "none"
let deferredPrompt;

window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt = e;
    btnAdd.style.display = "block"
    console.log("aqui")
});

btnAdd.addEventListener("click",(e)=>{
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) =>{
        if(choiceResult.outcome === 'accepted')
        {
            console.log("User accepted the A2HS prompt");
        }
        deferredPrompt = null;
    });
});