import './App.css'
import InteractiveGrid from './components/OuterBox.jsx'
function App() {
  return (
    <>
      <div className='flex items-center justify-center h-20 bg-black'>
          <div className='text-4xl text-violet-600 font-serif'>Road Optimizer</div>
      </div>
      <div className='flex items-center justify-center pt-10'>
        <div className='w-100 bg-amber-300'></div>
        <div className='bg-black'><InteractiveGrid/></div>
        <div className='bg-amber-200 w-100'></div>
      </div>
      <div>
        <div className='flex items-center justify-center pt-10'>
          <button onClick={() => alert('Button Clicked!')}
            className="relative px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-purple-500/40 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-200 ease-out transform hover:-translate-y-0.5 focus:ring-4 focus:ring-indigo-400/50 focus:outline-none group overflow-hidden">
            <span className="relative z-10">Start</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-white/30 skew-x-[-30deg] group-hover:left-[150%] transition-all duration-700 z-0"></div>
          </button>
        </div>
      </div>
    </>
  )
}
export default App;