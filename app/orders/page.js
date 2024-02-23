async function getData() {
  const res = await fetch("http://localhost:3000/api/orders");
  return res.json();
}

export default async function OrdersPage() {
  const data = await getData();
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
