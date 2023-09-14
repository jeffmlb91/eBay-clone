"use client";

import { BiLoader } from "react-icons/bi";
import ProductComp from "./Product";


export default function SimilarProducts() {
  //mock data
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
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto"/>

        <div className="max-w-[1200px] mx-auto">

            <div className="fomt-bold text-2xl py-2 mt-4">
                Similar sponsored items.
            </div>

            {products.length > 0 ? <div className="grid grid-cols-5 gap-4">{products.map(product => (<ProductComp key={products.id} product={product} />))}</div>
            : <div className="flex items-center justify-center">
                <div className="flex items-center justify-center gap-4 font-semibold">
                    <BiLoader size={30} className="text-blue-400 animated-spin"/>
                    Loading Products...
                </div>
              </div>}
        </div>
      </div>
    </>
  );
}
