const DateTime = luxon.DateTime;
const noteId = document.location.hash.substring(1);
const noteTitle = document.querySelector('#note-title');
const lastEdited = document.querySelector('#last-edited');
const noteBody = document.querySelector('#note-body');
const editsRemoveButton = document.querySelector('#remove-note');
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign('/index.html');
}

noteTitle.value = note.title;
noteBody.value = note.body;
lastEdited.textContent = generateLastEdited(note.updateAt);

noteTitle.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updateAt = DateTime.now().ts;
  lastEdited.textContent = generateLastEdited(note.updateAt);
  saveNotes(notes);
});

noteBody.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updateAt = DateTime.now().ts;
  lastEdited.textContent = generateLastEdited(note.updateAt);
  saveNotes(notes);
});

editsRemoveButton.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign('/index.html');
    }

    noteTitle.value = note.title;
    noteBody.value = note.body;
    lastEdited.textContent = generateLastEdited(note.updateAt);
    console.log('test 03');
  }
});
