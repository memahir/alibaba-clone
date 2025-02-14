import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Cotton T-Shirt",
    price: "$12.99",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Stylish Hoodie",
    price: "$29.99",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Men's Jacket",
    price: "$39.99",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "Running Shoes",
    price: "$49.99",
    image: "/images/product4.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4 shadow-lg">
            <CardContent className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
              <p className="text-green-600 font-bold">{product.price}</p>
              <Button className="bg-orange-600 text-white w-full mt-4 hover:bg-orange-700">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
