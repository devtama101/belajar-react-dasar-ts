import "./styleHelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World from Props",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
}

function HeaderHelloWorld({ text = "Text not available" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const Text = "Sedang belajar React, Tama! ";
  return <p className="content">{Text.toLowerCase()}</p>;
}
