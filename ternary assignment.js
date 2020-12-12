const notesToShow = showAll
? notes
: notes.filter(note => note.important === true)