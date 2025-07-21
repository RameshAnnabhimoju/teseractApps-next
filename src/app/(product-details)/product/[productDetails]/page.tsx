export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productDetails: string }>;
}) {
  return (
    <div>
      <h2>Product Details Page : {(await params).productDetails}</h2>
    </div>
  );
}
