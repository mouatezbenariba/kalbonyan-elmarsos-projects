const noteId = document.location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign('/index.html');
}

const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');

noteTitle.value = note.title;
noteBody.value = note.body;

// 1. Setup input event for title
// 2. Update note object and save notes list
noteTitle.addEventListener('input', function (e) {
  note.title = e.target.value;
  saveNotes(notes);
});

// 3. Repeat steps 1-2 for body
noteBody.addEventListener('input', function (e) {
  note.body = e.target.value;
  saveNotes(notes);
});

// 4. Setup a remove button that removes notes and sends user back to home page
const editsRemoveButton = document.querySelector('#remove-note');
editsRemoveButton.addEventListener('click', function () {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html');
});
