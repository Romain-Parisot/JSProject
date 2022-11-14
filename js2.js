class Survivants {
    constructor(name, caracteristique){
        this.name = name;
        this.caracteristique = caracteristique;
        
    }

    isLuckyMourir() {
        let i = Math.random(0,1)
        if(i < this.ProbaMourir){
            return true
        }return false
    }
    isLuckyEsquive() {
        let i = Math.random(0,1)
        if(i < this.ProbaEsquive){
            return true
        }return false
    }
    isLuckyMourirDegat() {
        let i = Math.random(0,1)
        if(i < this.ProbaMourirDegat){
            return true
        }return false
    }

    Action(){
        while (Jason >= 0 ) {
            let a=getRandomInt(3)
            if(a===0){
                if(this.isLuckyMourir == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort.");
                    return [false,Jason]
                }
                else if(this.isLuckyEsquive == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " a esquivé et lui a infliger 10 degats");
                    Jason=Jason-10
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [true,Jason]
                }
                else if(this.isLuckyMourirDegat == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort mais inflige 15 degats");
                    Jason=Jason-15
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [false,Jason]
                }
                else{
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " a esquivé et lui a infliger 10 degats");
                    Jason=Jason-10
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [true,Jason]
                }
            }
            else if(a===1){
                if(this.isLuckyEsquive == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " a esquivé et lui a infliger 10 degats");
                    Jason=Jason-10
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [true,Jason]
                }
                else if(this.isLuckyMourir == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort.");
                    return [false,Jason]
                }
                else if(this.isLuckyMourirDegat == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort mais inflige 15 degats");
                    Jason=Jason-15
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [false,Jason]
                }
                else{
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort.");
                    return [false,Jason]
                }
            }
            else if(a===2){
                if(this.isLuckyMourir == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort.");
                    return [false,Jason]
                }
                else if(this.isLuckyMourirDegat == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort mais inflige 15 degats");
                    Jason=Jason-15
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [false,Jason]
                }
                else if(this.isLuckyEsquive == true){
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " a esquivé et lui a infliger 10 degats");
                    Jason=Jason-10
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [true,Jason]
                }
                else{
                    console.log("Jason a attaquer " + this.name + " le " + this.caracteristique.namecara + " et " + this.name + " est mort mais inflige 15 degats");
                    Jason=Jason-15
                    console.log("Jason a maintenant " + Jason + " PV");
                    return [false,Jason]
                }
            }
        }
        return 'oui'
    }
    

}

function SelectSurvivant(x){
    let y=1
    Jason=30
    let a=true
    while(y<5){
        a=x[y].Action()
        if(a[0]==false){
            y++
        }
        
    }
    if(a[1]<=0){
        console.log("Les survivants on gagner");
    }   
    else{
        console.log("Jason a gagner et a tuer tout les survivants");
    }


}


class caracteristiques {
    constructor (namecara, ProbaMourir, ProbaEsquive, ProbaMourirDegat){
        this.namecara = namecara;
        this.ProbaMourir = ProbaMourir;
        this.ProbaEsquive = ProbaEsquive;
        this.ProbaMourirDegat = ProbaMourirDegat;
        
    }
}

function Selectname(){
    let Prenom=["prenom1" , "prenom2" , "prenom3" , "prenom4" , "prenom5" , "prenom6" , "prenom7" , "prenom8" , "prenom9" , "prenom10"];
    let listeprenom = []
    for(i=0; i<5; i++){
        let a = getRandomInt(10)
        listeprenom.push(Prenom[a]);
    }
    return listeprenom
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function SelectCaracteristique(){
    let cara=[
        new caracteristiques('nerd', 30/100, 90/100, 35/100),
        new caracteristiques('blonde', 20/100, 90/100, 25/100),
        new caracteristiques('sportif', 40/100, 90/100, 35/100),
        new caracteristiques('gros', 60/100, 50/100, 55/100),
        new caracteristiques('boxeur', 20/100, 70/100, 50/100)];
    let listeCaracteristiques=[]
    for(i=0; i<5; i++){
        let a = getRandomInt(5)
        listeCaracteristiques.push(cara[a]);
    }
    return listeCaracteristiques
}


listeCaracteristiquesRandom=SelectCaracteristique()
listeprenomRandom=Selectname()
console.log(listeprenomRandom)
MaTeam=[new Survivants(listeprenomRandom[0], listeCaracteristiquesRandom[0]), 
        new Survivants(listeprenomRandom[1], listeCaracteristiquesRandom[1]),
        new Survivants(listeprenomRandom[2], listeCaracteristiquesRandom[2]),
        new Survivants(listeprenomRandom[3], listeCaracteristiquesRandom[3]),
        new Survivants(listeprenomRandom[4], listeCaracteristiquesRandom[4])]



SelectSurvivant(MaTeam)




