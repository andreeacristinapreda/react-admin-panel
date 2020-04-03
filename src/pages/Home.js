import React from 'react';
import UserList from '../components/UserList';
import UserAddForm from '../components/UserAddForm';
import PostList from '../components/PostList';
import './Home.css';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      showUsers:true,
      showPosts:false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary = '10000';
        });
        this.setState({users: data});
      })


    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data=data.filter(post => post.id < 4);
        this.setState({posts: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeText(event){
    this.setState({color: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  

  submitAddForm(event, name, email, isGoldClient, salary) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary
          }
        ]
      }
    });
  }


  handleShowUsers() {
    this.setState({showUsers: true});
    this.setState({showPosts: false});
  }
  handleShowPosts() {
    this.setState({showUsers: false});
    this.setState({showPosts: true});
  }


  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>

      <Link to='/about'>About</Link>
        
        <h1>Admin panel - Proiectul 1</h1>
        <input type="submit" value="Afiseaza utilizatorii" onClick={(event) => this.handleShowUsers(event)}/>
        <input type="submit" value="Afiseaza postarile" onClick={(event) => this.handleShowPosts(event)}/>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary) => this.submitAddForm(event, name, email, isGoldClient,salary)}/>

        {
          this.state.showUsers === true
          ? <UserList users={this.state.users}/>
          :null
        }
        {
          this.state.showPosts === true
          ? <PostList posts={this.state.posts}/>
          :null
        }

        <label htmlFor="change-background-color">Schimba fundalul</label>
        <input type="color" name="change-background-color" onChange={(event) => this.changeColor(event)}/>
        <label htmlFor="change-text-color">Schimba culoarea textului</label>
        <input type="color" name="change-text-color" onChange={(event) => this.changeText(event)}/>

        
      

      </div>
    );
  }
}

export default Home;
