function checkButton() {    
    if(document.getElementById('summer').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("summer").value   
            + " radio button is checked";   
    }   
    else if(document.getElementById('winter').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("winter").value   
            + " radio button is checked";     
    }   