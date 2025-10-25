interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div>
      <h1>Tama Topik</h1>
      {children}
      <footer>
        <p>2025 Web Artisan</p>
      </footer>
    </div>
  );
}
