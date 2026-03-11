
export default async function Home() {

  const apiUrl = process.env.BACKEND_URL || 'http://localhost:3000';
  const response = await fetch(`${apiUrl}/products`);
  const products = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {products.map((product: any) => (
          <div key={product.id} className="w-full rounded-lg border p-4">
            <img src={product.imageURL} alt={product.name} />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-semibold">${product.price}</p>
          </div>
        ))}

      </main>
    </div>
  );
}
