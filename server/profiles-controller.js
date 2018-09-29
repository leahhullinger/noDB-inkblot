const profiles = [
  {
    name: 'Donald Trump',
    image: 'https://shortlist.imgix.net/app/uploads/2016/05/24151427/the-50-most-ridiculous-trump-quotes-36.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress',
    personality: "You are shrewd, somewhat inconsiderate and can be perceived as compulsive. You are philosophical: you are open to and intrigued by new ideas and love to explore them. You are independent: you have a strong desire to have time to yourself. And you are calm-seeking: you prefer activities that are quiet, calm, and safe. You are motivated to seek out experiences that provide a strong feeling of stability. You are relatively unconcerned with both achieving success and tradition. You make decisions with little regard for how they show off your talents. And you care more about making your own path than following what others have done."
  },

  {
    name: 'Karen Kilgariff',
    image: 'https://static1.squarespace.com/static/53d15300e4b05b0673b2d41e/t/545d3dfbe4b011fe10866dd9/1415396860386/?format=1000w',
    personality: "You are inner-directed, somewhat indirect and can be perceived as inconsiderate.You are authority-challenging: you prefer to challenge authority and traditional values to help bring about positive changes. You are philosophical: you are open to and intrigued by new ideas and love to explore them. And you are reserved: you are a private person and don't let many people in.Your choices are driven by a desire for discovery.You are relatively unconcerned with both tradition and taking pleasure in life. You care more about making your own path than following what others have done. And you prefer activities with a purpose greater than just personal enjoyment."
  },
]

module.exports = {
  read: (req, res) => {
    res.status(200).send(profiles)
  },

  create: (req, res) => {
    const { name, personalityInsight } = req.body;
    const newProfile = {
      name,
      personality: personalityInsight
    }
    profiles.push(newProfile)

    res.status(200).send(profiles)
  }
}

