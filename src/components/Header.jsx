import React from 'react'

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-3xl font-semibold tracking-wide text-white mb-2 tracking-tight">
          Pricing
        </h1>
        <div className="flex justify-center gap-1 font-thin text-sm md:text-base text-purple-100">
            <span>Subscribe once and </span>
            <span class="line-through"> cancel </span>
            <span>anytime</span>
        </div>
      </div>
    </div>
  )
}

export default Header