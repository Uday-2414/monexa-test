import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md text-center p-8 bg-white rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">Page not found. The route you requested doesn't exist.</p>
        <Link to="/" className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Go back home</Link>
      </div>
      <Footer/>
    </div>
  )
}
