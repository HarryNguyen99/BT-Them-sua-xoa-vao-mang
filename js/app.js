let name = ["Nguyen Van Tan", "Nguyen Van Ta", "Nguyen Thi Yen "];
let search1 = [];

function listNv() {
    let html = "";
    for (let i = 0; i < name.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += name[i];
        html += "</td>";
        html += "<td>";
        html += "<button id = '" + i + "' onclick = 'repair(this.id)'>";
        html += "Repair";
        html += "</buttom>";
        html += "</td>";
        html += "<td>";
        html += "<button id = '" + i + "' onclick = 'deleteNV(this.id)'>";
        html += "Delete";
        html += "</buttom>";
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById("listNv1").innerHTML = html;
}

listNv();

function addNv() {
    let name2 = document.getElementById("addname").value;
    name.unshift(name2);
    listNv();
}

function repair(id) {
    name[id] = document.getElementById("addname").value;
    listNv();
}

function deleteNV(id) {
    name.splice(id, 1);
    listNv();
}
function search2() {
    let html = "";
    for (let i = 0; i < search1.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += name[i];
        html += "</td>";
        html += "<td>";
        html += "<button id = '" + i + "' onclick = 'repair(this.id)'>";
        html += "Repair";
        html += "</buttom>";
        html += "</td>";
        html += "<td>";
        html += "<button id = '" + i + "' onclick = 'deleteNV(this.id)'>";
        html += "Delete";
        html += "</buttom>";
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById("listNv1").innerHTML = html;
}

function search() {
    let str = "";
    for (let i = 0; i < name.length; i++) {
     str += name[i];
    }
    let str2 = str.search(document.getElementById("addname").value);
    search1.unshift(str2);
    search2();
}
