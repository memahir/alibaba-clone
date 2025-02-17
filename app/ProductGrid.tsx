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
  {
    id: 5,
    title: "Sports Watch",
    price: "$19.99",
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    title: "Leather Wallet",
    price: "$24.99",
    image: "/images/product6.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-4 gap-6">
      {/* Filter Section */}
      <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div>
          <label className="block font-medium">Category</label>
          <select className="w-full p-2 border rounded mt-1">
            <option>All Categories</option>
            <option>Apparel & Accessories</option>
            <option>Mens Clothing</option>
            <option>Womens Clothing</option>
            <option>Sportswear</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block font-medium">Price Range</label>
          <input type="range" className="w-full mt-1" min="10" max="100" />
        </div>
        <div className="mt-4">
          <label className="block font-medium">Supplier Features</label>
          <div className="flex flex-col space-y-2">
            <label><input type="checkbox" /> ≤1h response time</label>
            <label><input type="checkbox" /> Delivery by Mar 07</label>
            <label><input type="checkbox" /> Delivery by Mar 13</label>
          </div>
        </div>
      </div>
      
      {/* Product Section */}
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4 shadow-lg">
            <CardContent className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
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
