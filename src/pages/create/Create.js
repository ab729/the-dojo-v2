import './create.css'

import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { timeStamp } from "../../firebase/config.js";


// options 4 form
const categories = [
  { value: 'development', label: 'Development'},
  { value: 'design', label: 'Design'},
  { value: 'sales', label: 'Sales'},
  { value: 'marketing', label: 'Marketing'},
]

export default function Create() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [ formError, setFormError ] = useState(null)


  const { documents } = useCollection('users')
  const [ users, setUsers ] = useState([])
  const { user } = useAuthContext()
  const { addDocument, response } = useFirestore('projects')

  useEffect(() => {
    if(documents){
      const options = documents.map(user => {
        return { value: user, label: user.displayName}
      })
      setUsers(options)
    }
  }, [documents])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if(!category) {
      setFormError('Select a project category')
      return
    }
    if(assignedUsers.length < 1){
      setFormError('select at least one user')
    }
    console.log(name, details, dueDate, category.value, assignedUsers);
  

  const createdBy = {
    displayName: user.displayName,
    photoURL: user.photoURL,
    id: user.uid
  }

  const assignedUsersList = assignedUsers.map( element => {
    return {
      displayName: element.value.displayName,
      photoURL: element.value.photoURL,
      id: element.value.id
    }
  })

  const project = {
    name,
    details,
    category: category.value,
    dueDate: timeStamp.fromDate(new Date(dueDate)),
    comments: [],
    createdBy,
    assignedUsersList,
  };
  await addDocument(project);
  if(!response.error){
    navigate('/');
  }
}
  return (
    <div className="create-form">
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span>Project details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
          <span>Project Due Date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            onChange={(option) => {
              setCategory(option);
            }}
            options={categories}
          />
        </label>
        <label>
          <span>Assignment Users:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className="btn"> Add Project </button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
