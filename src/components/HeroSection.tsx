"use client"

import { useState } from "react"


const HeroSection = () => {
const[email,setEmail] = useState('')
const[isSubmitted,setIsSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };



    return (

         <>
            <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?size=626&ext=jpg')" }}>
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-8 md:p-16 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated!</h1>
          <p className="text-lg mb-8">Subscribe to our newsletter to get the latest updates and offers.</p>
          {isSubmitted ? (
            <p className="text-lg font-semibold">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-72 px-4 py-2 mb-4 md:mb-0 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full md:w-32 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
         </>

    )
}

export default HeroSection