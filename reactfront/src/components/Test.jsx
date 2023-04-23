import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/logout'
let axiosConfig = {
  withCredentials: true,
}
const MenuBar = () => {
    const navigate = useNavigate()
    const Logout = async (e) => {
        e.preventDefault()
        await axios.get(URI, axiosConfig).then((response) => {
          console.log(response)
        }, (error) => {
          console.log(error)
        })
        navigate("/", {state:"test"})
      }
  return (
    <nav className="d-flex justify-content-center">
      <div className="p-2">
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="p-2">
        <Link to="/image">image</Link>
      </div>
      <div className="p-2">
      <form onSubmit={Logout}>
        <button
        type='submit'
        >
        Sign out
        </button>
        </form>
      </div>
      
    </nav>
  )
}
export default MenuBar