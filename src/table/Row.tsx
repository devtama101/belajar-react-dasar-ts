export default function Row({ id, text }: { id: string; text: string }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}
