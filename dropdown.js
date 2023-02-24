var commonValues ={
    Structural: ["Beams","Columns","Wall Framing","Roof Framing", "Floor Framing"],
    Enclosure: ["Interior Wall Finishings","Exterior Wall Finishings","Insulation","Drywall","Air/Water/Vapour Barriers","Sheathing"],
    HVAC: ["Ducting & Venting","Registers & Grilles","HVAC Accessories","Pipe Fittings & Connectors","Units"],
    Electrical: ["Wiring","Conduit, Switches, & Outlets","Generators","Light Bulbs & Fixtures","Boxes"],
    Technology: ["Solar","Security & Surveillance"]
    Plumbing: ["Pipes & Fittings","Valves","Pumps","Stops, Drains, & Drain Plugs","Water Heaters"],
    Doors&Windows: ["Doors","Windows"],
    Appliances: ["Refrigerators","Dishwashers","Ovens & Stovetops","Laundry Machines","Small Appliances"],
    Interior&Finishing: ["Paints","Trim","Flooring","Cabinetry","Countertops"];
    RawMaterial: ["Concrete","Steel","Wood & Bamboo","Glass","Stone & Brick","Earth"]
}

function changeDropdownValue(value){
    if(value.length == 0){
        document.getElementById("category").innerHTML = "<option></option>"
    }else{
        var commonOptions = "";
        for(categoryID in commonValues[value]){
            commonOptions +="<option>" + commonValues[value][categoryID] + "</option>"
        }
        document.getElementById("category").innerHTML = commonOptions
    }
}