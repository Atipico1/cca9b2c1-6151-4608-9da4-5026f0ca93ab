'use client'

import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'
import { useTodos } from '@/contexts/TodoContext'

export default function Home() {
  const { todos } = useTodos()
  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">
            My Tasks
          </h1>
          <p className="text-gray-600 text-lg mb-8 animate-fade-in animation-delay-200">
            오늘도 멋진 하루를 만들어보세요
          </p>
          
          {/* Beautiful stats cards */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-400">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {totalCount}
              </div>
              <div className="text-sm text-gray-600 mt-1">전체 할일</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-500">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {completedCount}
              </div>
              <div className="text-sm text-gray-600 mt-1">완료됨</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-600">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {completionRate}%
              </div>
              <div className="text-sm text-gray-600 mt-1">완료율</div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto animate-fade-in animation-delay-700">
            <div className="h-3 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out animate-progress-fill"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
        </header>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10 animate-fade-in-up animation-delay-800">
          <div className="mb-10">
            <AddTodo />
          </div>
          
          <TodoList />
        </div>

        <footer className="text-center mt-12 text-gray-600 animate-fade-in animation-delay-1000">
          <p className="text-sm">매일 조금씩 성장하는 당신을 응원합니다 ✨</p>
        </footer>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes progress-fill {
          from {
            width: 0;
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-progress-fill {
          animation: progress-fill 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  )
}