function saveForm(formId) {

    let formData = {};
    let textContent = "";

    document.querySelectorAll("input, textarea, select").forEach(el => {
        formData[el.name] = el.value;

        if (el.value) {
            textContent += " " + el.value.toLowerCase();
        }
    });

    let record = {
        id: formId,
        timestamp: new Date().toISOString(),
        data: formData,
        searchText: textContent
    };

    let db = JSON.parse(localStorage.getItem("RAM_DB")) || [];

    db.push(record);

    localStorage.setItem("RAM_DB", JSON.stringify(db));

    alert("Saved and indexed");
}