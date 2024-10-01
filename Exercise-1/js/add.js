document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var date = row.insertCell(0);
    var desc = row.insertCell(1);
    var amt = row.insertCell(2);
    date.innerHTML = document.getElementById("date").value;
    desc.innerHTML = document.getElementById("desc").value;
    amt.innerHTML = document.getElementById("amount").value;

    return false;
}