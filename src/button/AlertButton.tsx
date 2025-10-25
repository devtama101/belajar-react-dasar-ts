export default function AlertButton({
  text,
  message,
}: {
  text: string;
  message: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.info("Button clicked", e.target);
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
