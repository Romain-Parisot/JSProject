function taxi(){
    let John = 10
    let victory = true
    let listeMusique = ['Anissa', 'Wejdene', 'chanteur3', 'chanteur4', 'chanteur5'];
    for(i=0; i<30; i++){
        console.log("John a rencontré un feu rouge ");
        let a = getRandomInt(5)
        let musiquePlayed = listeMusique[a]
        console.log("La musique : " + musiquePlayed + " a été jouer");
        if(musiquePlayed=="Anissa" || musiquePlayed=="Wejdene")
            {
                console.log("La musique ne lui plait pas il perd 1 de santé mentale et chage de taxi");
                John--
                console.log("Sa santé mentale est actuelement de " + John);
                if(John==0)
                    {
                        console.log("John n'en peut plus, sa santé mentale est tombé a 0, il explose.");
                        victory = false
                        break
                    }
            }
        else{
            console.log("La musique ne le derange pas son trajet continue");
        }
        
    }
    if(victory){
        score=10-John
        console.log("John a survécu, il a passé les 30 feux rouge sans exploser , mais a du changer " + score + " fois de taxis");
    }

}
taxi()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}