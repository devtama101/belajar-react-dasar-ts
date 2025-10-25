import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Belajar React Dasar",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Belajar React Dengan TypeScript",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Mengerjakan latihan React Dasar",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Membuat project React pertama",
      isCompleted: false,
      isDeleted: true,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
