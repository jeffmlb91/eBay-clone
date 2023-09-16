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

                        <div id="PlaceOrder" className="relative -top-[60px] w-[35%] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <div>Items  (3)</div>
                                    <div>$12.99</div>
                                </div>
                                <div className="flex items-center justify-between mb-4 text-sm">
                                  <div>shipping</div>
                                  <div>Free</div>
                                </div>

                                <div className="border-t"/>

                                <div className="flex items-center justify-between my-4">
                                    <div className="font-semibold">Order total</div>
                                    <div className="text-2x font-semibold">
                                        $12.99
                                    </div>
                                </div>

                                <form>
                                    <div id="card-element" className="border border-gray-500 p-2 rounded-sm">
                                        <p  id="card-error"
                                            role="alert"
                                            className="text-red-700 text-center font-semibold relative top-2"
                                        />
                                    </div>
                                    <button type="submit" className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full">
                                            Confirm and pay
                                    </button>
                                </form>
                            </div>

                            <div className="flex items-center p-4 justify-center gap-2 border-2">
                                <img width={50} src="/images/logo.svg" />
                                <div className="font-light mb-2 mt-2">MONEY BACK GUARANTEE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}