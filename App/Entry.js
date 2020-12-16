// reference to save button
const saveButton = document.getElementById('saveButton');
// global entry variable
const entries = '';
// get today's date
const today = (new Date()).setHours(0, 0, 0, 0);
// initialize entries
init();

// initialize the screen; update the screen for the user
function init() {
  let out = '';
  let entryArray = JSON.parse(localStorage.getItem('entryData'));
  const dates = [];

  // if there are journal entries in local storage
  if (entryArray != null && entryArray != '') {
    // make an array of all entries
    entryArray = JSON.parse(localStorage.getItem('entryData'));
    // loop through the array to display
    for (let x = 0; x < entryArray.length; x++) {
      out += `<option value=${x}>`;
      out += entryArray[x].title;
      out += " " + entryArray[x].mood;
      out += '</option>';
      document.getElementById('entryMaster').innerHTML = out;
      dates.push(entryArray[x].date);
    }

    document.getElementById('peruseButton').addEventListener('click', function (e) {
      if (dates.includes(today)) {
        window.alert('Sorry, you have already made a journal entry today.\nView old entries and come back tomorrow!');
        document.getElementById('peruseButton').disabled = true;
      } else { writeEntry(); } 
    });

    document.getElementById('entryMaster').addEventListener('click', function (e) {
      displayEntry(e.target.value);
    });

    document.getElementById('helpButton').addEventListener('click', function (e) {
      window.location.href = 'help.html';
    });

    document.getElementById('profButton').addEventListener('click', function (e) {
      window.location.href = 'profile.html';
    });

    readEntries();
  } else { writeEntry(); }
}

// go to "write" div when writing entries
function writeEntry() {
  document.getElementById('peruse').style.display = 'none';
  document.getElementById('write').style.display = 'block';
  document.getElementById('entryTitle').value = '';
  document.getElementById('entryBody').value = '';
  document.getElementById('entryMood').value = '';

  document.getElementById('helpButton').addEventListener('click', function (e) {
      window.location.href = 'help.html';
  });

  document.getElementById('profButton').addEventListener('click', function (e) {
      window.location.href = 'profile.html';
  });
}

// go to "peruse" div when reading entries
function readEntries() {
  document.getElementById('peruse').style.display = 'block';
  document.getElementById('write').style.display = 'none';
}

// show the user the entry they click on when in "peruse" mode
function displayEntry(entry) {
  // get array from memory
  const entryArray = JSON.parse(localStorage.getItem('entryData'));
  let out = `<h2>${entryArray[entry].title.concat(" " + entryArray[entry].mood)}</h2>`;
  out += `<h4>Date: ${new Date(entryArray[entry].date).toDateString()}</h4>`;
  out += `<p>${entryArray[entry].body}</p>`;
  document.getElementById('entryDisplay').innerHTML = out;
}

// save the entry the user made
saveButton.onclick = function () {
  const entryDate = new Date().setHours(0, 0, 0, 0);
  const entryTitle = document.getElementById('entryTitle').value;
  const entryBody = document.getElementById('entryBody').value;
  const entryMood = document.getElementById('entryMood').options[document.getElementById('entryMood').selectedIndex].text;
  const theEntry = new Entry(entryTitle, entryBody, entryDate, entryMood);
  saveEntry(theEntry);
};

// helper function for save button
function saveEntry(entry) {
  let entryArray = JSON.parse(localStorage.getItem('entryData'));
  if (entryArray === null) { entryArray = new Array(); }
  entryArray.push(entry);
  localStorage.setItem('entryData', JSON.stringify(entryArray));
  readEntries();
  init();
}
