import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  {
    /**Defining some dummy products */
  }

  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description:
        "This Brown Leather Bag is so fashionable that it is a head turner. Purchase it today and enjoy the best quality It's essentially a mock-up of the final book, complete with all the text and visuals in their correct positions.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School Books",
      description:
        "Enoy this school book to learn about web programing in depth. From Front-End to Back-End. Enjoy learning FullStack developement. A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations",
      url: "https://picsum.photos/id/20",
      price: 1999,
    },
  ];
  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
