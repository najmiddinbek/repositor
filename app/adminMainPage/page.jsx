import React from 'react'
import AdminMainPage from "../../components/AdminMainPage"
import Navbar from "../../components/Navbar"
import Link from "next/link"

export default function page() {
    return (
        <>
            <div>
                <Navbar />
                <AdminMainPage />
            </div>
        </>
    )
}
