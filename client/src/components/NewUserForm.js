import React, { Component } from 'react';
import axios from 'axios';

// const personalityInsights = new PersonalityInsightsV3({
//   version: '2017-10-13',
//   username: 'f434e17d-6e11-4c36-94b8-2a213bef750c',
//   password: 'byFuzN3GfRzA',
//   url: 'https://gateway.watsonplatform.net/personality-insights/api'
//   });

const watson_api_url = 'https://gateway.watsonplatform.net/personality-insights/api'


class NewUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: '',
      textInput: '',
      personality_results: {}
    }

  }

  handleNameInput = (name) => {
    this.setState({ nameInput: name })
  }

  handleTextInput = (text) => {
    this.setState({ textInput: text })
  }


  render() {

    return (
      <div className="card">
        <div className="form-container" >
          {this.props.isComplete ?
            <div className="personality-result-card">
              <h1>{this.props.name}</h1>
              <p>{this.props.insights}</p>
              <div className="button-container">
                <button className='add-profile' onClick={this.props.addProfile}>save profile</button>
                <button onClick={() => this.props.handleToggle()}>Reset</button>
              </div>
            </div>
            :
            <div className="new-user-card">
              <input className="name-input" onChange={(e) => this.handleNameInput(e.target.value)} placeholder="name?" content-type="text/plain;charset=utf-8" />
              <textarea value={this.state.textInput} className="text-input" onChange={(e) => this.handleTextInput(e.target.value)} placeholder="type or paste your words here. no less than 150 words...more than 600 for better accuracy." content-type="text/plain;charset=utf-8" />
              <button onClick={() => {
                this.props.submit(this.state.nameInput, this.state.textInput);
                this.setState({ textInput: '', nameInput: '' })
              }}>submit text</button>
            </div>

          }

        </div>
      </div>
    )
  }
};
export default NewUserForm;