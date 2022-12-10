let addBtn = document.querySelector(".addButton");

let notes = [];
function addNote() {
  let note = document.querySelector(".input").value;
  if (note === "") return;
  notes.push(note);
  console.log(notes);
  createNotes();
}

function createNotes(val = "") {
  let container = document.querySelector(".container");

  container.innerHTML = "";

  notes.forEach((note, idx) => {
    let html = `
    <div class="item">
    <span>${note}</span>
    <span data-id=${idx} class="editButton">EDIT</span>
    <span data-id=${idx} class="deleteButton">DELETE</span>
  </div>
    `;
    container.innerHTML += html;
  });
  //   container.appendChild(html);
  document.querySelector(".input").value = val;
  console.log(val);
  let editButton = document.querySelectorAll(".editButton");
  let deleteButton = document.querySelectorAll(".deleteButton");
  editButton.forEach((eb) => {
    eb.addEventListener("click", (e) => editNote(e));
  });
  deleteButton.forEach((db) => {
    db.addEventListener("click", (e) => deleteNote(e));
  });
}

function editNote(e) {
  console.log("EDIT FUNCTION CALLED!!!");
  let idx = e.target.getAttribute("data-id");
  let val = notes[idx];
  console.log(e, idx);
  notes = notes.filter((note) => {
    return notes.indexOf(note) != idx;
  });

  createNotes(val);
  console.log(notes);
}

function deleteNote(e) {
  console.log("EDIT FUNCTION CALLED!!!");
  let idx = e.target.getAttribute("data-id");
  console.log(e, idx);
  notes = notes.filter((note) => {
    return notes.indexOf(note) != idx;
  });
  console.log(notes);
  createNotes();
}

addBtn.addEventListener("click", addNote);
