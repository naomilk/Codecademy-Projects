const team = {
    //setting 3 players and their properties
    _players: [{
      firstName: 'Bob',
      lastName: 'Thompson',
      age: 30
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 35
    },
    {
      firstName: 'Sharon',
      lastName: 'Wilson',
      age: 25
    }],
    get players () {
      return this._players
    },
    //setting 3 games' properties
    _games: [{
      opponent: 'Leeds',
      ourPoints: 3,
      opponentPoints: 1
    },
    {
      opponent: 'Manchester City',
      ourPoints: 1,
      opponentPoints: 5
    },
    {
      opponent: 'Sheffield',
      ourPoints: 2,
      opponentPoints: 3
    }],
    get games () {
      return this._games
    },
    //to add players to the pre-existing players
    addPlayer (firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    //to add games to the pre-existing games
    addGame (opponent, ourPoints, opponentPoints) {
      const game = {
        opponent,
        ourPoints,
        opponentPoints
      };
      this.games.push(game);
    }
  };
  
  //adding 3 new players
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  //adding 3 new games
  team.addGame('Chelsea', 2, 3);
  team.addGame('Arsenal', 1, 4);
  team.addGame('Everton', 4, 1);
  
  console.log(team.games);
  