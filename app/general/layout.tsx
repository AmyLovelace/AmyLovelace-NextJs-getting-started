
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello LAYOUT for /general/ </h1>
      {children}
    </div>
  );
}