const DateTime = luxon.DateTime;
const noteId = document.location.hash.substring(1);
const noteTitle = document.querySelector('#note-title');
const lastEdited = document.querySelector('#last-edited');
const noteBody = document.querySelector('#note-body');
const editsRemoveButton = document.querySelector('#remove-note');
let notes = getSavedNotes();
let note = notes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
}

// 2. Set text value: Last edited 4 hours ago
noteTitle.value = note.title;
noteBody.value = note.body;
lastEdited.textContent = generateLastEdited(note.updateAt);

noteTitle.addEventListener('input', function (e) {
  note.title = e.target.value;
  note.updateAt = DateTime.now().ts;
  lastEdited.textContent = generateLastEdited(note.updateAt);
  saveNotes(notes);
});

noteBody.addEventListener('input', function (e) {
  note.body = e.target.value;
  note.updateAt = DateTime.now().ts;
  lastEdited.textContent = generateLastEdited(note.updateAt);
  saveNotes(notes);
});

editsRemoveButton.addEventListener('click', function () {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});

// 3. Update value on title/body/storage change
window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(function (note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign('/index.html');
    }

    noteTitle.value = note.title;
    noteBody.value = note.body;
    lastEdited.textContent = generateLastEdited(note.updateAt);
    console.log('test 03');
  }
});
