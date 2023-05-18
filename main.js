canvas = document.getElementById("meucanvas")
ctx = canvas.getContext("2d")
dollynhoimg = "/dollynho do laike.png"
mercadoimg = "merqadodolinho.webp"
larguradolly = 100
auturadolly = 100
dollyx = 10
dollyy = 10

function add() {
    background = new Image()
    background.onload = uploadbackground
    background.src = mercadoimg

    dollynho = new Image()
    dollynho.onload = uploaddollynho
    dollynho.src = dollynhoimg

    function uploadbackground() {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    }
    function uploaddollynho() {
        ctx.drawImage(dollynho, dollyx, dollyy, larguradolly, auturadolly)
    }
    
    window.addEventListener("keydown", movimento)
    function movimento(e) {
        keypressed = e.keyCode
        console.log(keypressed)
        if (keypressed == "38") {
            cima()
        }
        if (keypressed == "40") {
            baixo()
        }
        if (keypressed == "37") {
            esquerda()
        }
        if (keypressed == "39") {
            direita()
        }
    }
    
    
    function cima(){
        if(dollyy>=0){
            dollyy=dollyy-10
            uploadbackground()
            uploaddollynho()

        }
    }
    function baixo(){
        if(dollyy<=500){
            dollyy=dollyy+10
            uploadbackground()
            uploaddollynho()

        }
    }
    function esquerda(){
        if(dollyx>=0){
            dollyx=dollyx-10
            uploadbackground()
            uploaddollynho()

        }
    }
    function direita(){
        if(dollyx<=750){
            dollyx=dollyx+10
            uploadbackground()
            uploaddollynho()

        }
    }
}
