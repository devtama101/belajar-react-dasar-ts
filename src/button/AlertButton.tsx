export default function AlertButton({
  text,
  message,
}: {
  text: string;
  message: string;
}) {
  function handleClick() {
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
