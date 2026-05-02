
function saveForm(formId){
    let data = {};
    let text = "";

    document.querySelectorAll("input, textarea, select").forEach(el=>{
        data[el.name] = el.value;
        if(el.value) text += " " + el.value.toLowerCase();
    });

    let db = JSON.parse(localStorage.getItem("RAM_DB")) || [];
    db.push({id: formId, data: data, searchText: text, date: new Date().toISOString()});
    localStorage.setItem("RAM_DB", JSON.stringify(db));

    alert("Saved successfully");
}

function exportPDF(){ window.print(); }

function shareForm(){
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied");
}
