"use client"

import SimilarProducts from "../components/SimilarProducts"
import MainLayout from "../layouts/MainLayout"
import CartItem from "../components/CartItem"

export default function Cart() {
    const product = {
        
          id: 1,
          title: "School Books",
          description:
            "Enoy this school book to learn about web programing in depth. From Front-End to Back-End. Enjoy learning FullStack developement. A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations",
          url: "https://picsum.photos/id/20",
          price: 1999,
    }
    

    return(
        <>
            <MainLayout>

                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Shopping cart</div>
                    <div className="relative fflex items-center justify-bewteen gap-2">
                        <div className="w-[65%]">
                            <CartItem  key={product.id} product={product}/>
                        </div>
                    </div>
                </div>
                <SimilarProducts />
            </MainLayout>
        </>
    )
}