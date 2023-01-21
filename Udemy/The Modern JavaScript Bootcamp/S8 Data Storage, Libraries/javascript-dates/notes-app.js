let notes = getSavedNotes();

const filters = {
  searchText: '',
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
  const id = uuid.v4();

  notes.push({
    id: id,
    title: '',
    body: '',
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
});

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// 1. Create two  dates in the past (use string for Date)
const dateOne = new Date('1997-10-15T04:00');
const dateTwo = new Date('1998-11-02T01:00');

// 2. Get timestampes for both
const timestampesOne = dateOne.getTime();
const timestampesTwo = dateTwo.getTime();

// 3. Figure out which is first and print its time (use toString())
if (timestampesOne < timestampesTwo) {
  console.log(dateOne);
} else {
  console.log(dateTwo);
}
