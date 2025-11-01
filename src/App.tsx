import { CardGrid } from '@/components'
import './App.css'
import { Button } from './components/ui/button'
import Popup from './components/popup'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CardGrid />
      <Popup />
    </div>
  )
}

export default App
