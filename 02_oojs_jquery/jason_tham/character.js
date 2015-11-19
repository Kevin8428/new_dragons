var kittyPryde = {
  name: 'Katherine Pryde',
  alias: 'Shadow Cat',
  city: 'Chicago',
  team: 'the X-men',
  power: 'phase through objects',
  state: 'phased in',
  phase: function(){
    if (this.state == 'phased in') {
        this.state = 'phased out';
        return console.log(this.state);
    }
    else {
      this.state = 'phased in';
      return console.log(this.state);
    }
  },
  tellStory: function(){
    console.log('My Name is ' + this.name + ' but I go by ' + this.alias);
    console.log('I am from ' + this.city + ' and I am a member of ' + this.team);
    console.log('I have the power to ' + this.power);
    return this.name;
  }



}
