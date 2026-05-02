function exportPDF() { window.print(); }

function shareForm() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied");
}

function saveForm(formId) {
    let data = {};
    document.querySelectorAll("input, textarea, select").forEach(el => {
        data[el.name] = el.value;
    });

    localStorage.setItem(formId, JSON.stringify(data));
    alert("Saved");
}

function loadForm(formId) {
    let data = JSON.parse(localStorage.getItem(formId));
    if (!data) return;

    document.querySelectorAll("input, textarea, select").forEach(el => {
        if (data[el.name]) el.value = data[el.name];
    });
}