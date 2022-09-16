import React, { useState } from 'react'
import allusers from './usermanage/userdata'
import UserForm from './usermanage/UserForm';
import UserTable from './usermanage/UserTable';

const App = () => {
  //defining the hook and assigning API data to it
  const [users, setUsers] = useState(allusers);
 // we caught the array that coming from userdata

 //function that handles the user id automatically
 const addUser = (newuser) => {
    //increment the id 
    newuser.id = users.length + 1
    //need to update the data also using the 2nd variable of useState()
    setUsers([...users,newuser]); 
 }

 //making a function that deletes the data of the user
 const deleteUser = (id) =>{
        //using the hook 2nd variable to update the data 
        //also using the filter() method to return the new array of user
        setUsers(users.filter(t=>t.id !== id));
     
}
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <UserTable allusers={users} deluser = {deleteUser} /> 
        </div>
        <div className='col-md-6'>
          <UserForm  addNewUser = {addUser}/>
        </div>
      </div>
    </div>
  )
}

export default App