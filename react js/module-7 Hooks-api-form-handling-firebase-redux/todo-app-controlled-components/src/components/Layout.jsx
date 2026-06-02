import React,{useState} from 'react'
import HeaderApp from './HeaderApp'
import AddTaskApp from './AddTaskApp'
import loader from '../loader.gif'
export default function Layout() {
    // create a loader after 3 seconds
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <img src={loader} alt="Loading..." />

            </div>
        )
    }
    else 
        {

  return (
    <div>
      <HeaderApp />
      <AddTaskApp />
    </div>
  )
}
}