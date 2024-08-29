var flag = true;

// ==============================================================================
function PlayerImageRotate(event) {
    var s=document.getElementsByClassName('PlayerCard');
    let playerPicRotate = event.currentTarget;
    var IsRotated = playerPicRotate.classList.contains('Player_rotate');
    for(var i=0;i<s.length;i++)
    {
        s[i].classList.remove('Player_rotate');
    }
    if(!IsRotated)
    {
    playerPicRotate.classList.add("Player_rotate");
    }
}

// =====================================================================================================
var flag = true; 

var view = document.getElementsByClassName("view")[0];
function WorldCupDet1(){
    var WorldCupDet1 = document.getElementsByClassName("WorldCupDet1")[0];
    var WorldCupDet2 = document.getElementsByClassName("WorldCupDet2")[0];
    var WorldCupDet3 = document.getElementsByClassName("WorldCupDet3")[0];
    
    if(flag){
        WorldCupDet1.style.display="block";
        WorldCupDet1.style.display = "flex";
        WorldCupDet1.style.justifyContent = "center";
        
        WorldCupDet3.style.display="none";
        WorldCupDet2.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        WorldCupDet1.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}

function WorldCupDet2(){
    var WorldCupDet1 = document.getElementsByClassName("WorldCupDet1")[0];
    var WorldCupDet2 = document.getElementsByClassName("WorldCupDet2")[0];
    var WorldCupDet3 = document.getElementsByClassName("WorldCupDet3")[0];
    
    if(flag){
        WorldCupDet2.style.display="block";
        WorldCupDet2.style.display = "flex";
        WorldCupDet2.style.justifyContent = "center";
        
        WorldCupDet1.style.display="none";
        WorldCupDet3.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        WorldCupDet2.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}
function WorldCupDet3(){
    var WorldCupDet1 = document.getElementsByClassName("WorldCupDet1")[0];
    var WorldCupDet2 = document.getElementsByClassName("WorldCupDet2")[0];
    var WorldCupDet3 = document.getElementsByClassName("WorldCupDet3")[0];
    
    if(flag){
        WorldCupDet3.style.display="block";
        WorldCupDet3.style.display = "flex";
        WorldCupDet3.style.justifyContent = "center";
        
        WorldCupDet1.style.display="none";
        WorldCupDet2.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        WorldCupDet3.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}

// ==========================================================================================================


function indiaCup1(){
    var indiaCup1 = document.getElementsByClassName("indiaCup1")[0];
    var indiaCup2 = document.getElementsByClassName("indiaCup2")[0];
    var indiaCup3 = document.getElementsByClassName("indiaCup3")[0];
    
    if(flag){
        indiaCup1.style.display="block";
        indiaCup1.style.display = "flex";
        indiaCup1.style.justifyContent = "center";
        
        indiaCup3.style.display="none";
        indiaCup2.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        indiaCup1.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}

function indiaCup2(){
    var indiaCup1 = document.getElementsByClassName("indiaCup1")[0];
    var indiaCup2 = document.getElementsByClassName("indiaCup2")[0];
    var indiaCup3 = document.getElementsByClassName("indiaCup3")[0];
    
    if(flag){
        indiaCup2.style.display="block";
        indiaCup2.style.display = "flex";
        indiaCup2.style.justifyContent = "center";
        
        indiaCup1.style.display="none";
        indiaCup3.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        indiaCup2.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}

function indiaCup3(){
    var indiaCup1 = document.getElementsByClassName("indiaCup1")[0];
    var indiaCup2 = document.getElementsByClassName("indiaCup2")[0];
    var indiaCup3 = document.getElementsByClassName("indiaCup3")[0];
    
    if(flag){
        indiaCup3.style.display="block";
        indiaCup3.style.display = "flex";
        indiaCup3.style.justifyContent = "center";
        
        indiaCup1.style.display="none";
        indiaCup2.style.display="none";

        //window.alert("SEE BELOW THESE IMAGES");
        view.innerHTML="CLOSE";
        flag = false;
    }
    else{
        indiaCup3.style.display="none";
        view.innerHTML="VIEW";
        flag = true;
    }
}