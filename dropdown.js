var commonValues ={
    Structural : ["Beams", "Columns"],
    Enclosure : ["Interior Wall Finishings", "Exterior Wall Finishings"]
}

function changeDropdownValue(){
    if(commonValues.length == 0){
        document.getElementById("category").innerHTML = "<option></option>"
    }else{
        var commonOptions = "";
        for(categoryID in commonValues[value]){
            commonOptions +="<option>" + commonValue[value][categoryID] + "</option>"
        }
        document.getElementById("category").innerHTML
    }
}