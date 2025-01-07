export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <>
      <h1>Product page</h1>
      <p>Product details go here...</p>
      <p>Product id: {id}</p>
    </>
  );
}
