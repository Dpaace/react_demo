const Note = (props) => {
    const {note, handleDelete, handleImportance} = props
    const label = note.important ? "Make not Important" : "Make Important"
  return (
    <>
      <p>{note.content}</p>
      <p>{note.date}</p>
      {/* <button onClick={() => handleDelete(note.id)}>Delete</button> */}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleImportance}>
        {label}
      </button>
    </>
  );
};

export default Note;
