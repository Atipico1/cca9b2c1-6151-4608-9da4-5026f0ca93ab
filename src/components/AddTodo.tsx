'use client'

import { useState } from 'react'
import { useTodos } from '@/contexts/TodoContext'

export default function AddTodo() {
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { addTodo } = useTodos()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.02]' : ''}`}>
        {/* Gradient border effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isFocused ? 'opacity-100' : ''}`} />
        
        <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 p-2">
            {/* Plus icon */}
            <div className="ml-2">
              <svg 
                className={`w-6 h-6 transition-all duration-300 ${isFocused ? 'text-purple-500 rotate-90' : 'text-gray-400'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="새로운 할 일을 추가해보세요..."
              className="flex-1 px-2 py-3 text-lg focus:outline-none placeholder-gray-400 bg-transparent"
            />
            
            <button
              type="submit"
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform mr-2 ${
                text.trim()
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!text.trim()}
            >
              <span className="flex items-center gap-2">
                추가
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${text.trim() ? 'translate-x-0' : '-translate-x-2 opacity-0'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Helpful hint */}
      <div className={`absolute -bottom-6 left-4 text-xs text-gray-500 transition-all duration-300 ${isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        Enter를 눌러 빠르게 추가할 수 있어요
      </div>
    </form>
  )
}