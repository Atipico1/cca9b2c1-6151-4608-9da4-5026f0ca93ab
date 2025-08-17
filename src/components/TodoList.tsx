'use client'

import { useTodos } from '@/contexts/TodoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodos()

  if (todos.length === 0) {
    return (
      <div className="text-center py-20 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg className="w-64 h-64 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-2xl font-medium text-gray-400 mb-3">텅 비어있네요!</p>
          <p className="text-gray-500">첫 번째 할 일을 추가해보세요 🎯</p>
        </div>
      </div>
    )
  }

  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="space-y-8">
      {activeTodos.length > 0 && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              진행 중
              <span className="text-sm font-normal text-gray-500 ml-2">
                {activeTodos.length}개의 할 일
              </span>
            </h3>
          </div>
          <ul className="space-y-3">
            {activeTodos.map((todo, index) => (
              <div
                key={todo.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-slide-in"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </ul>
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              완료됨
              <span className="text-sm font-normal text-gray-500 ml-2">
                {completedTodos.length}개 완료
              </span>
            </h3>
            {completedTodos.length > 5 && (
              <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                모두 보기
              </button>
            )}
          </div>
          <ul className="space-y-3">
            {completedTodos.slice(0, 5).map((todo, index) => (
              <div
                key={todo.id}
                style={{ animationDelay: `${(activeTodos.length + index) * 100}ms` }}
                className="animate-slide-in opacity-75 hover:opacity-100 transition-opacity"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </ul>
          {completedTodos.length > 5 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              그리고 {completedTodos.length - 5}개 더...
            </p>
          )}
        </div>
      )}
      
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}