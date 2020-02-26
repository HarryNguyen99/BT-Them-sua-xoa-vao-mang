let name = ["Nguyen Van Tan", "Nguyen Van Ta", "Nguyen Thi Yen "];

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

function search() {
    let str = document.getElementById("addname").value;
    name = str.search;
        listNv();
}
