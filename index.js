var seletedRow = null;

// Show Alerts

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// CLear All Fields

function clearfield(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#studentNumber").value = "";
}

// Add Data

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get From Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const studentNumber = document.querySelector("#studentNumber").value;

    // Validate
    if(firstName == "" || lastName == "" || studentNumber == ""){
        showAlert("Please fill in all fields","danger");
    }
    else {
        if(seletedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${studentNumber}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            seletedRow = null;
            showAlert("Student Added", "success");
        }
        else {
            seletedRow.children[0].textContent = firstName;
            seletedRow.children[1].textContent = lastName;
            seletedRow.children[2].textContent = studentNumber;
            seletedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearfield();
    }
});

// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        seletedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#studentNumber").value = selectedRow.children[2].textContent;
    }
});

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger");
    }
});
