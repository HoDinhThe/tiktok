

//const orders = [100, 200, 300]

//function App() {

// const [counter, setCounter] = useState(() => {
//   const total = orders.reduce((total, cur) => total + cur)
//   return total;
// })

// const handleIncrease = () => {
//     //setCounter(counter + 1)
//     setCounter(prevState => prevState + 1)


// }

//   return (
//     <div className="App" style={{padding: 20}}>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
//}

// <function App(){

//   const [info, setInfo] = useState({
//     name: 'Ho Dinh The',
//     age: 20,
//     andress: 'Nghe An'
//   })

//   const handleUpdate = () => {
//     setInfo({
//       ...info,
//       bio: 'Yeu mau xanh'
//     })
//   }
//   return(
//       <div className='App' style = {{ padding: 20}}>
//         <h1>{JSON.stringify(info)}</h1>
//         <button onClick={handleUpdate}>Update</button>
//       </div>
//   );
// }>




// ví dụ
// 1. Random gift
// 2. Two-way Binding: là ràng buộc 2 chiều


//VD1
// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard',
// ]

// function App(){

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index]);
//   }
  
//   return(
//     <div style={{ padding: 32}}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }



//VD2
// function App(){
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
  
//   const handleSubmit = () => {
//     // CALL API
//     console.log({
//       name, 
//       email
//     })
//   }
  
//   return(
//     <div style={{ padding: 32}}>
//       <input 
//       value={name}
//       onChange={e => setName(e.target.value)}
//       />
//       <input 
//       value={email}
//       onChange={e => setEmail(e.target.value)}
//       />
//       {/* <button onClick={() => setName('Nguyen Van BBB')}>Change</button> */}
//       <button onClick={handleSubmit}>Register</button>
//        </div>
//   )
// }


//VD3
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JavaScrip'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]
// function App(){
//   const [checked, setChecked] = useState()

//   const handleSubmit = () => {
//     //Call Api
//     console.log({id: checked});
//   }

//   return(
//     <div style={{ padding: 32}}>
//       {courses.map(course => (
//         <div key={course.id}>
//             <input
//              type='radio'
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//              />
//            {course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }


// vd4
// function App(){
//   const [checked, setChecked] = useState([])

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item !== id)
//       } else{
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () => {
//       // call API
//       console.log({ids: checked});
//   }
//   return(
//     <div style={{ padding: 30}}>
//         {courses.map(course => (
//           <div key={course.id}>
//             <input 
//               type="checkbox"
//               checked={checked.includes(course.id)}
//               onChange={() => handleCheck(course.id)}
//             />
//             {course.name}
//           </div>
//         ))}
//         <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

//3. Todolist
import { useState } from 'react'
function App(){
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) || []
    console.log(storageJobs);
    return storageJobs
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }
  return (
    <div style={{ padding: 30 }}>
    <input
      value={job}
      onChange={e => setJob(e.target.value)}
    />
    <button onClick={handleSubmit}>ADD</button>
    <ul>
  
      {jobs.map((job, index) => (
        <li key={index}>{job}</li>
      ))}
    </ul>
    </div>
  )
}

export default App;
