import Card from "./Card";

function Products() {
  return (
    <div className="mt-32">
      <h2 className="text-center text-3xl font-bold">محصولات زیپریکس</h2>
      <div className="flex justify-center mt-8">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Products;
