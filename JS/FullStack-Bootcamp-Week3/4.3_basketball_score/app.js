//1
let avgScore = function (a,b,c){
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let avg = (a+b+c)/3;
    return avg;
};

let johnTeamAvg = {
    score: avgScore(89,120,103),
    name: 'John' //John Score: 104
};

let mikeTeamAvg = {
    score: avgScore(116,94,123),
    name: 'Mike' //Mike Score: 111
}

let winner = function(team1,team2){
    if(team1.score > team2.score){
        return team1.name;
    }else if (team1.score < team2.score){
        return team2.name;
    }else{
        return `Both!`
    }
}

console.log(`John Score: ${johnTeamAvg.score}.\n Mike Score: ${mikeTeamAvg.score}.\n and the winner is ${winner(johnTeamAvg,mikeTeamAvg)}`);

// 3

johnTeamAvg.score = avgScore(116,94,123);
mikeTeamAvg.score = avgScore(89,120,103);

console.log(`John Score: ${johnTeamAvg.score}.\n Mike Score: ${mikeTeamAvg.score}.\n and the winner is ${winner(johnTeamAvg,mikeTeamAvg)}`);

//
johnTeamAvg.score = avgScore(116,94,123);
mikeTeamAvg.score = avgScore(116,94,123);

console.log(`John Score: ${johnTeamAvg.score}.\n Mike Score: ${mikeTeamAvg.score}.\n and the winner is ${winner(johnTeamAvg,mikeTeamAvg)}`);


//4
let maryTeamAvg = {
    score: avgScore(97,134,105),
    name: 'Mary' //Mike Score: 111
}

let winner2 = function(team1,team2,team3){
    if(team1.score > team2.score && team1.score > team3.score){
        return team1.name;
    }else if (team1.score < team2.score && team2.score > team3.score){
        return team2.name;
    }else if(team1.score < team3.score && team3.score > team2.score){
        return team3.name;
    }else{
        return "It's a draw!";
    }
}

console.log(`John Score: ${johnTeamAvg.score}.\n Mike Score: ${mikeTeamAvg.score}.\n Mary Score: ${maryTeamAvg.score}.\n And the winner is ${winner2(johnTeamAvg,mikeTeamAvg,maryTeamAvg)}`);