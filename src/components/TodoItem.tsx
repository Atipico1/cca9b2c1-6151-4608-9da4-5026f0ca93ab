'use client'

import { useState } from 'react'
import { Todo } from '@/types/todo'
import { useTodos } from '@/contexts/TodoContext'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodos()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      deleteTodo(todo.id)
    }, 300)
  }

  return (
    <li 
      className={`group relative transition-all duration-300 ${isDeleting ? 'opacity-0 scale-95 -translate-x-full' : 'opacity-100 scale-100 translate-x-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${todo.completed ? 'from-green-400/20 to-emerald-400/20' : 'from-purple-400/20 to-pink-400/20'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className={`relative flex items-center gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-300 ${isHovered ? 'transform scale-[1.02] shadow-xl' : ''}`}>
        {/* Custom checkbox */}
        <div className="relative">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="sr-only"
            id={`todo-${todo.id}`}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 ${
              todo.completed 
                ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-transparent' 
                : 'border-gray-300 hover:border-purple-400'
            }`}
          >
            <svg 
              className={`w-4 h-4 text-white transition-all duration-300 ${todo.completed ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </label>
        </div>
        
        {/* Todo text with animation */}
        <span
          className={`flex-1 text-lg transition-all duration-300 ${
            todo.completed 
              ? 'text-gray-400 line-through decoration-2' 
              : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
        
        {/* Action buttons */}
        <div className={`flex items-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          {/* Edit button (optional) */}
          <button
            className="p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-all duration-200"
            title="수정"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          
          {/* Delete button */}
          <button
            onClick={handleDelete}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
            title="삭제"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        {/* Completion celebration */}
        {todo.completed && (
          <div className="absolute -right-2 -top-2 animate-bounce">
            <span className="text-2xl">✨</span>
          </div>
        )}
      </div>
    </li>
  )
}