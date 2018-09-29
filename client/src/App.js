import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import NewUserForm from './components/NewUserForm';
import ProfileCard from './components/profile-card';

const BASE_URL = 'http://localhost:3005'
const WATSON_API = 'https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      personalityInsight: '',
      isComplete: false,
      profiles: [{
        name: '',
        image: '',
        personality: ''
      }]
    }
  }
  componentDidMount() {
    axios.get(BASE_URL + '/inkblot/profiles')
      .then(response => {
        this.setState({ profiles: response.data })
      })
  }

  handleToggle = () => {
    this.setState({ isComplete: !this.state.isComplete })
  }

  handleContentSubmit = (name, text) => {
    axios.post(BASE_URL + '/api/getProfile', { text }).then(response => {
      this.setState({ personalityInsight: response.data, name })
    })
    this.handleToggle();
  }

  handleAddProfileClick = () => {
    console.log(this.state.name)
    axios.post(BASE_URL + '/inkblot/profiles', {
      name: this.state.name,
      personalityInsight: this.state.personalityInsight
    }).then(response => {
      console.log(response)
      this.setState({ profiles: response.data })
    })
  }

  render() {
    console.log(this.state.personalityInsight)
    return (
      <div className="app" >

        <div className="header">
          <div className="project-name">inkblot. </div>
          <h2> what do your words say about you?</h2>
        </div>
        <div className="main-body" >
          <NewUserForm
            submit={this.handleContentSubmit}
            isComplete={this.state.isComplete}
            handleToggle={this.handleToggle}
            insights={this.state.personalityInsight}
            name={this.state.name}
            addProfile={this.handleAddProfileClick}
          />
        </div>

        <div className="profiles-container">
          {this.state.profiles.map((person, name) => (
            <ProfileCard person={person} key={name} />
          )
          )}
        </div>
      </div>
    )
  }
}
export default App;
