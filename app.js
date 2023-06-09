const
    getsearch = document.getElementById("search"),
    getazmethod1 = document.getElementById("azmethod1"),
    getzamethod1 = document.getElementById("zamethod1"),
    getazmethod2 = document.getElementById("azmethod2"),
    getzamethod2 = document.getElementById("zamethod2");

let
    getul = document.querySelector(".list-group"),
    getlis = getul.getElementsByTagName("li");

// To be memory efficient
let getlislength = getlis.length;

getsearch.addEventListener("keyup", (e) => {
    const getval = e.target.value.toLowerCase();
    for (let i = 0; i < getlislength; i++) {
        if (getlis[i].innerText.toLowerCase().indexOf(getval) > -1) {
            getlis[i].style.display = "block";
        } else {
            getlis[i].style.display = "none";
        }
    }
})

function azmethod1() {
    let lis = [];
    for (let i = 0; i < getlislength; i++) {
        lis.push(getlis[i].innerText);
    }
    getul.innerHTML = "";
    const azlis = lis.sort();
    azlis.forEach(azlis => {
        const newli = document.createElement("li");
        let newatag = document.createElement("a");
        newatag.href = "javascript:void(0)";
        newatag.appendChild(document.createTextNode(azlis));
        newli.appendChild(newatag);
        getul.appendChild(newli);
    })
}

function zamethod1() {
    let lis = [];
    for (let i = 0; i < getlislength; i++) {
        lis.push(getlis[i].innerText);
    }
    getul.innerHTML = "";
    const zalis = lis.sort().reverse();
    zalis.forEach(zali => {
        const newli = document.createElement("li");
        newli.textContent = zali;
        getul.append(newli);
    })
}

function azmethod2() {
    let shouldswitch = true;
    let switching = true;
    while (switching) {
        switching = false;
        let i = 0;
        for (i; i < getlislength - 1; i++) {
            if (getlis[i].textContent.toLowerCase() > getlis[i + 1].textContent.toLowerCase()) {
                shouldswitch = true;
                break;
            } else {
                shouldswitch = false;
            }
        }
        if (shouldswitch) {
            getlis[i].parentNode.insertBefore(getlis[i + 1], getlis[i]);
            switching = true;
        }
    }
}

function zamethod2() {
    let switching = true;
    let shouldswitch = true;
    do {
        switching = false;
        let x;
        for (x = 0; x < getlislength - 1; x++) {
            shouldswitch = false;
            if (getlis[x].innerText.toLowerCase() < getlis[x + 1].innerText.toLowerCase()) {
                shouldswitch = true;
                break;
            }
        }
        if (shouldswitch) {
            getlis[x].parentNode.insertBefore(getlis[x + 1], getlis[x]);
            switching = true;
        }

    } while (switching);
}

getazmethod1.addEventListener("click", azmethod1);
getzamethod1.addEventListener("click", zamethod1);
getazmethod2.addEventListener("click", azmethod2);
getzamethod2.addEventListener("click", zamethod2);