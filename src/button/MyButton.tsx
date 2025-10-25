export default function MyButton({
  text,
  onSmash,
}: {
  text: string;
  onSmash: () => void;
}) {
  return <button onClick={onSmash}>{text}</button>;
}
