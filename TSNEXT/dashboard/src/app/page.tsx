import Hello from "./hello";

export default function Home() {
  console.log("what am i")

  return (
    <>
      <h1 className="text-3x1"> Bienvenido a NextJS</h1>
      <Hello />
    </>
    
  );
}
