// save button
const saveButton = document.getElementById('saveButton');
let entries = "";
init();

// initialize the screen; update the screen for the user
function init() {
    let out = "";
    let entryArray = JSON.parse(localStorage.getItem('entryData'));

    if (entryArray != null && entryArray != "") {
        entryArray = JSON.parse(localStorage.getItem('entryData'));

        for (let x = 0; x < entryArray.length; x++) {
            out += "option value=" + x + ">";
            out += entryArray[x].data[0];
            out += "</option>";

            document.getElementById('entryMaster').innerHTML = out;
        }

        document.getElementById('writeButton').addEventListener('click', function(e) {
            writeEntry();
        });

        document.getElementById('entryMaster').addEventListener('click', function(e) {
            displayEntry(e.target.value);
        });

        readEntries();

    } else { writeEntry(); }
}

function writeEntry() {
    document.getElementById('peruse').style.display = "none";
    document.getElementById('write').style.display = "block";
    document.getElementById('entryTitle').value = "";
    document.getElementById(entryBody).value = '';
}

function readEntries() {

}

function displayEntry(entry) {

}

saveButton.onclick = function() {
// save button function
}
