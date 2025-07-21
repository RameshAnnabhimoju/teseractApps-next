export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="text-xl font-semibold">Product Detail</header>
      {children}
    </div>
  );
}
