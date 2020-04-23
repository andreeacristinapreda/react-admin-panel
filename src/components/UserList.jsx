import React from 'react';
import UserItem from './UserItem';
import './UserList.css';


function UserList (props) { 
    const{users}=props;
   
    // users.filter((user)=>user.deleted===false);
       
        return (
            <div className="user-list-container">
                <h2>Lista utilizatorilor:</h2>
                <div className="user-list">
                { users.map((user, index) => {
    
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={ user.salary }
                        key={ index }
                        deleted={ user.deleted }
                    />
                })}
                </div>
            </div>
        );
        
    

}
export default UserList;