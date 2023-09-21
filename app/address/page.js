"use client"

import { useRouter } from "next/navigation"
import TextInput from "../components/TextInput"
import MainLayout from "../layouts/MainLayout"
import { useUser } from "../context/user"
import { useEffect, useState } from "react"
import useIsLoading from "../hooks/useIsLoading"
import useUserAddress from "../hooks/useUserAddress"
import { Result } from "postcss"
//  

export default function Address() {
    const router = useRouter()
    const { user } = useUser()

    const [ addressId, setAddressId ] = useState(null)
    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ zipcode, setZipcode ] = useState('')
    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ isUpdatingAddress, setIsUpdatingAddress ] = useState(false)
    const [ error, setError ] = useState({})

    const showError = (type) => {
        if (Object.entries(error).length > 0 && error?.type == type) {
            return error.message
        }
        return ''
    }
 
    const getAddress = async () => {
        if (user?.id == null || user?.id == undefined) {
            useIsLoading(false)
            return
        }

        const response = await useUserAddress()
        if (response) {
            setTheCurrentAddress(response)
            useIsLoading(false)
            return
        }
        useIsLoading(false)
    }

    useEffect(() => {
        useIsLoading(true)
        getAddress()
    }, [user])

    const setTheCurrentAddress = (result) => {
        setAddressId(result.id)
        setName(result.name)
        setAddress(result.address)
        setZipcode(result.zipcode)
        setCity(result.city)
        setCountry(result.country)
    }

    return(
        <>
            <MainLayout>
                <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
                    <div className="mx-auto bg-white rounded-lg p-3">
                        <div className="text-xl text-bold mb-2">
                            Address Details
                        </div>

                        <form>
                            <div className="mb-4">   
                                <TextInput 
                                    className="w-full"
                                    string={'Enter an Address'}
                                    placeholder="Name"
                                    error="This is an error"
                                />
                            </div>

                            <button 
                                className="
                                    mt-6
                                    w-full
                                    text-white
                                    text-lg
                                    font-semibold
                                    p-3
                                    rounded
                                    bg-blue-600
                                    "
                                >
                                Update Address
                            </button>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}