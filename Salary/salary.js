const nameInp = document.getElementById("name"); // input
const surnameInp = document.getElementById("surname"); // input
const salaryInp = document.getElementById("salary"); // input
const addBtn = document.getElementById("add");
const salaryList = document.getElementById("list"); // ul elementas
const clearBtn = document.getElementById("clear");

const sumTotal = document.getElementById("sum")


let list = [];
let salaryTotal = [];

const saveList = () => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("salaryTotal", JSON.stringify(salaryTotal));
}

const loadList = () => {
    const lsList = localStorage.getItem("list");
    if (lsList != null) {
        list = JSON.parse(lsList);
        showList();
    }
}

const loadSalary = () => {
    const lsSalary = localStorage.getItem("salaryTotal");
    if (lsSalary != null) {
        salaryTotal = JSON.parse(lsSalary);
        showSalary();
    }
}

const showSalary = () => {
    // sumTotal.innerHTML = "";
    let sum = 0;
    salaryTotal.forEach((s, i) => {
        sum += s;
    })
    sumTotal.value = sum;
}

const showList = () => {
    salaryList.innerHTML = "";
    list.forEach((p, i) => {
        const salaryLi = document.createElement("li");
        salaryLi.className = "list-group-item";
        salaryLi.textContent = `${p.name} ${p.surname} ${p.salary}`;
        salaryList.appendChild(salaryLi);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ištrinti";
        deleteBtn.className = "btn btn-info float-end btn-sm";

        deleteBtn.onclick = () => {

            list.splice(i, 1);
            salaryTotal.splice(i, 1);
            saveList();
            showList();
            showSalary();
        };
        salaryLi.appendChild(deleteBtn);
    })
}

const addSalary = () => {
    //Paimame reiksmes is laukeliu
    const name = nameInp.value;
    const surname = surnameInp.value;
    const salary = salaryInp.value;
    nameInp.value = "";
    surnameInp.value = "";
    salaryInp.value = "";
    list.push({
        name: name,
        surname: surname,
        salary: salary
    });

    salaryTotal.push(parseInt(salary));
    showSalary();
    showList();
    saveList();
}


const clear = () => {
    list = [];
    salaryTotal = [];
    saveList();
    showList();
    showSalary();
}

addBtn.onclick = addSalary;
clearBtn.onclick = clear;
loadList();
loadSalary();