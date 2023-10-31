
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateData} from "./redux/action.js";



function App() {

  const {name, age, gender} = useSelector((state) => state)
  const dispatch = useDispatch()

  const[formData, setFormData] = useState({
    name: '',
    age: 0,
    gender: ''
  })

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  const handleSaveData = () => {
    dispatch(updateData(formData))
  }


  return (
    <>
      <h1>Redux Data Entry</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button onClick={handleSaveData}>Save Data</button>
      <div>
        <h2>Current Data:</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
    </>
  )
}

export default App
