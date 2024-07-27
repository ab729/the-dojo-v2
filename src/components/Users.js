import './Users.css'
import Avatar from './Avatar'
import { useCollection } from '../hooks/useCollection'

export default function Users() {
const { error, documents } = useCollection('users')
  return (
    <div className='users-list'>
      <h2>All Users</h2>
      {error && <div className='error'>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className='users-list-item'>
        {user.online && <span className='online-user'></span> }
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  )
}
