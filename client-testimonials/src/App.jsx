
import './App.css'
import TestimonialCard from './components/TestimonialCard'

function App() {

  return (
    <>
      <TestimonialCard props = {{name:"Emily Watson", review:"This service is amazing! Highly recommended"}}/>
      <TestimonialCard props = {{name:"John Doe", review:"Highly recommended"}}/>
    </>
  )
}

export default App
