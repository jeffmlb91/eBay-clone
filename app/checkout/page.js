"use client"

import CheckoutItem from "../components/CheckoutItem"
import MainLayout from "../layouts/MainLayout"

export default function Checkout() {

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
                <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
                    <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>

                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
                        <div className="w-[65%]">
                            <div className="bg-white rounded-lg p-4 border">
                                <div className="text-xl fondt-semibold mb-2">Shipping Address</div>

                                <div>
                                    <ul className="text-sm mt-2">
                                        <li>Name: test</li>
                                        <li>Address: test</li>
                                        <li>Zipcode: test</li>
                                        <li>City: test</li>
                                        <li>Country: test</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="Items" className="bg-white rounded-lg mt-4">
                                <CheckoutItem  key={product.id} product={product}/>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}