
//grand slam draw 

players = [
    {
        name: "Ramanathan Krishnan",
        rank: "1",
        noOfMatches: "855",
        playerId: "pl01"
    },
    {
        name: "Vijay ",
        rank: "2",
        noOfMatches: "875",
        playerId: "pl02"
    },
    {
        name: "Rohan",
        rank: "3",
        noOfMatches: "742",
        playerId: "pl03"
    },
    {
        name: "Leander Paes",
        rank: "4",
        noOfMatches: "652",
        playerId: "pl04"
    },
    {
        name: "Mahesh Bhupathi",
        rank: "5",
        noOfMatches: "647",
        playerId: "pl05"
    },
    {
        name: "Ram kumar",
        rank: "6",
        noOfMatches: "321",
        playerId: "pl06"
    },
    {
        name: "Somdev",
        rank: "7",
        noOfMatches: "257",
        playerId: "pl07"
    },
    {
        name: "Sumit Nagal",
        rank: "8",
        noOfMatches: "595",
        playerId: "pl08"
    }
]


// finding opponents

const matches = (player) => {
    sortedPlayers = player.sort((a, b) => (a.rank - b.rank))  //sorting players according to rank
    //console.log("sorted players list ",sortedPlayers);

    group = []
    for (let j = 0; j < player.length / 2; j++) {

        group.push(sortedPlayers[j].name + " - VS - " + sortedPlayers[sortedPlayers.length - 1 - j].name)
    }
    console.log("Opponents are :", '\n', group)
}

// Number of rounds in the game
const round = (players) => {
    winners = []
    for (let j = 0; j < players.length / 2; j++) {
        //calculating the probability based on rank
        p2 = (players[j].rank / players.length) * 100
        p1 = (players[players.length - 1 - j].rank / players.length) * 100
        if (p1 > p2) {
            winners.push(players[j].name)
        } else if (p2 > p1) {
            winners.push(players[players.length - 1 - j].name);
        }
    }
    return winners
}

// To find players details from array of total players
const searchData = (word) => {
    const keyword = word;

    const results = players.filter(object => Object.values(object).some(i => i.includes(keyword)));

    return (results);
}

//  grand slam draw
const grandSlamDraw = (players) => {
    for (j = 0; j <= players.length; j++) {
        if (players.length > 2) {


            matches(players)

            console.log("---------------------------")
            console.log("Qualified for next round")
            nextRound = (round(players))
            console.log(nextRound)
            console.log("Number of players",nextRound.length)
            console.log("---------------------------")

            upcomingRound = []
            nextRound.forEach(i => { upcomingRound.push(searchData(i)) });
            nextRound_PlayersList = []
            upcomingRound.forEach(k => {
                nextRound_PlayersList.push(k[0]);
            });
            players = (nextRound_PlayersList)

        } else if (players.length == 2) {
            matches(players)
            console.log(" --------Winner is---------")
            nextRound = (round(players))
            console.log(nextRound, '\n', searchData(nextRound))
        }
    }

}
grandSlamDraw(players)