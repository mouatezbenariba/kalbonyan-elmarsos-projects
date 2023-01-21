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

// 1. Create a new moment / Used Luxon instead of Moment
let DateTime = luxon.DateTime;
// 2. Set the month, day, and year to your birthday
const birthday = DateTime.local(1997, 10, 15);
// 3. Use format to print it in the following way: Jan 6, 1991
console.log(birthday.toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' }));
console.log(birthday.toLocaleString(DateTime.DATE_MED));
console.log(birthday.toFormat('LLL d, y'));
