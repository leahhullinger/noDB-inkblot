import React, { Component } from 'react';

/*
Big Five personality characteristics represent the most widely used model for generally describing how a person engages with the world. The model includes five primary dimensions:

Agreeableness: is a person's tendency to be compassionate and cooperative toward others.
Conscientiousness: is a person's tendency to act in an organized or thoughtful way.
Extraversion: is a person's tendency to seek stimulation in the company of others.
Emotional range, also referred to as Neuroticism or Natural reactions: is the extent to which a person's emotions are sensitive to the person's environment.
Openness: is the extent to which a person is open to experiencing different activities.

const results = Big Five, Needs, Values
this.state = {
  bigFive: {},
  needs: {},
  values: {}
}
*/

// watson url to send POST request to:  'https://gateway.watsonplatform.net/personality-insights/api/v3/profile' 


class PersonalityResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      user_personality: {}
    }
  }
  //       {
  //         bigFive: {
  //           agreeableness: ['altruism', 'cooperation', 'modesty', 'morality', 'sympathy', 'trust'],
  //           conscientiousness: ['achievement-striving', 'cautiousness', 'dutifullness', 'orderliness', 'self-discipline', 'self-efficacy'],
  //           extraversion: ['activity level', 'assertiveness', 'cheerfulness', 'excitement-seeking', 'friendliness', 'gregariousness'],
  //           emotionalRange: ['anger', 'anxiety', 'depression', 'immoderation', 'self-consciousness', 'vulnerability'],
  //           openness: ['adventurousness', 'artistic interests', 'emotionality', 'imagination', 'intellect', 'liberalism']
  //         }
  //       },
  //       {
  //         needs: {

  //           excitement: 'Want to get out there and live life, have upbeat emotions, and want to have fun.',
  //           harmony: 'Appreciate other people, their viewpoints, and their feelings.',
  //           curiosity: 'Have a desire to discover, find out, and grow.',
  //           ideal: 'Desire perfection and a sense of community.',
  //           closeness: 'Relish being connected to family and setting up a home.',
  //           selfExpression: 'Enjoy discovering and asserting their own identities.'
  //         }
  //       },
  //       {
  //         value: {
  //           helpingOthers: 'Show concern for the welfare and interests of others.',
  //           conservationOrTradition: 'Emphasize self-restriction, order, and resistance to change.',
  //           hedonismOrTakingPleasureInLife: 'Seek pleasure and sensuous gratification for themselves.',
  //           self_enhancement_or_achieving_success: 'Seek personal success for themselves.',
  //           open_to_change_or_excitement: 'Emphasize independent action, thought, and feeling, as well as a readiness for new experiences.'
  //         }
  //       },

  //     ]
  //   }


  // }
  render() {
    const { user_name, user_personality } = this.state;
    return (
      <div className="results-container">
        <h1 className="user-name">Here's personality assessment, {user_name}</h1>
        <br />
        <div className="personality-results">{user_personality[user_personality]}</div>
      </div>
    )
  }
}

export default PersonalityResults;