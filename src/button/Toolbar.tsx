export default function Toolbar({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}) {
  return (
    <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
}
