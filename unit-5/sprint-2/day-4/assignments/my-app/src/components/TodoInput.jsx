import { useState } from "react";

export default function TodoInput({ AddTodoPost }) {
  const [text, settext] = useState("");
  const handleAddNewTodo = () => {
    AddTodoPost(text);
    settext("")
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add here"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleAddNewTodo}>Add Todo</button>
    </>
  );
}
