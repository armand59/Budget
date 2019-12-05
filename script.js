let resu = document.getElementById("resultat");
let valider= document.getElementById("valider");
valider.addEventListener("click", function () {
    let loyer = document.getElementById("inputLoyer").value;
    let credit = document.getElementById("inputCredit").value;
    let eau = document.getElementById("inputEau").value;
    let tel = document.getElementById("inputTel").value;
    let assuranceH = document.getElementById("inputAssurance").value;
    let assuranceV = document.getElementById("inputVoiture").value;
    let mutuelle= document.getElementById("mutuelle").value;
    let fdg = document.getElementById("fraisDeGarde").value;
    let impotR = document.getElementById("impotsRevenu").value;
    let impotL = document.getElementById("impotsLocaux").value;
    let budgetAlim = document.getElementById("courses").value;
    let carburant = document.getElementById("essence").value;
    let loisir = document.getElementById("sorties").value;
    let autre = document.getElementById("autres").value;

    let salaire = document.getElementById("salaire").value;
    let allocations = document.getElementById("allocation").value;
    let rentes = document.getElementById("rentes").value;
    let autres = document.getElementById("autres2").value;

    let epargne = document.getElementById("epargneux").value;



    function dTotal(){
        var moins= parseFloat(loyer) + parseFloat(credit)+parseFloat(eau)+parseFloat(tel)+
            parseFloat(assuranceH)+parseFloat(assuranceV)+parseFloat(mutuelle)+parseFloat(fdg)+
            parseFloat(impotR)+parseFloat(impotL)+parseFloat(budgetAlim)+parseFloat(carburant)+
            parseFloat(loisir)+parseFloat(autre);
        return moins;
    }

    function rTotal() {
        var plusse = parseFloat(salaire)+parseFloat(allocations)+parseFloat(rentes)+parseFloat(autres);
        return plusse;
    }

    function galette() {
        var ep = parseFloat(epargne);
        return ep;
        //console.log (epar());
    }

    var res = rTotal() + galette() - dTotal();
        resu.innerHTML=res;

        if (res>0){
        resu.innerHTML = res + "€ ! C'est pas cher ! Manger bébé !!";

    }else if(res<0){
        resu.innerHTML ="Tu es à découvert! " + res +" €. Tu es fauché...";

    }else{
        resu.innerHTML = "Euh.....";
        }
    console.log(res);

    document.getElementById('resumeDiv').innerHTML = res;

document.getElementById("reset").addEventListener("click", function () {
    console.log("reset");
   let reset= document.querySelectorAll("input");
   for (let i=0;i<reset.length;i++){
       reset[i].value=0;
   }
});
});
