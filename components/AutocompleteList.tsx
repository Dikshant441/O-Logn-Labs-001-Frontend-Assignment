'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { RootState } from '@/lib/store/store'

const AutocompleteList: React.FC = () => {
  const { suggestions } = useSelector((state: RootState) => state.weather)

  if (suggestions.length === 0) return null

  return (
    <ul className="mt-2 w-full max-w-md max-h-[300px] overflow-y-scroll bg-white border border-gray-300 rounded-lg shadow-lg">
      {suggestions.map((suggestion) => (
        <li key={suggestion.id} className="px-4 py-2 hover:bg-gray-100">
          <Link href={`/weather/${encodeURIComponent(suggestion.id)}`}>
            {suggestion.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AutocompleteList