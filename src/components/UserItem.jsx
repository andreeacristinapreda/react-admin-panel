import React from 'react';
import './UserItem.css';
class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: props.id,
            name: props.name,
            email: props.email,
            isGoldClient: props.isGoldClient,
            salary: props.salary,
            deleted: props.deleted
        };
    }


    
    isDeleted(){
        this.setState({deleted: true});
        console.log(this.state.deleted);
        //nu se schimba stateul deleted din prima
    }


    render(){
        const {name, email, isGoldClient, salary} = this.state;
        return (
            <div className="user-item">
                <img src='https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png' alt='user logo'/>
                <h3>{ name }</h3>
                <p>{ email }</p>
                <p>{ salary }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
                <button name="delete-user" onClick={(event)=>this.isDeleted(event)}>Sterge user</button>

            </div>
        );
    }
}

export default UserItem;