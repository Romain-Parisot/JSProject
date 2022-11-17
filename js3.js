document.body.onload = addElement;

function addElement() {

    for(i=0; i<9; i++){
        let div = document.createElement("div");
        div.classList.add("divSpan");
        let span = document.createElement("span");
        span.classList.add("Baton")
        div.appendChild(span);

        let element = document.getElementById("div1");
        element.appendChild(div);
    }
    

    let batonclick = document.querySelectorAll('.divSpan')
    batonclick.forEach(element => {
        element.addEventListener('click', AddClassClick)
    });
    

}

function AddClassClick() {
    this.classList.toggle("opa")
    this.classList.toggle("batonvalider")
}

let a = true;

function btAction(){
    let batonvalider = document.querySelectorAll(".batonvalider")
    if(batonvalider.length < 4){
        batonvalider.forEach(element => {
            element.remove()
        });
        let joueur = document.querySelectorAll(".joueur") 
        if (a === true){
            joueur.forEach(element => {
                element.classList.toggle('none')
            });
            
            a=false
        }
        else{
            joueur.forEach(element => {
                element.classList.toggle('none')
            });
            a=true
        }
        let divspan = document.querySelectorAll('.divSpan')
        console.log(divspan);
        if (divspan.length <= 1){
            MsgFin()
            
        }
    }
    else{
        alert("3 batons max par tour")        
    }
        
            


}

function MsgFin() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("divmsg")
    let newContent = document.createTextNode("Fin de la partie");


    newDiv.appendChild(newContent);

    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

let btSubmit = document.querySelector('.btSubmit')
btSubmit.addEventListener('click', btAction)