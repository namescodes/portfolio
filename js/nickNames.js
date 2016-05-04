var nickNames = [
    ["Jimmy Shirts", "Known for my colourful array of shirts"],
    ["Jimmy 2Chews", "Post losing an intense game of Rock, Paper, Scissors I cold only muster two chews on a street prawn sold to me on an Indian train"],
    ["Jimmy Contarlo", "Name given to me from Chefs whilst working in a restaurant"],
    ["JimJamFamALam", "Name given to me from Waiters whilst working in a restaurant"],
    ["Jimmy Heffner", "Whilst taking GCSE Drama I was one of only a few dudes and thus had a lot of girl-friends"],
    ["Jimmy Trying", "First Github username but changed cause I want to be Jimmy Can"],
    ["One Pint Ryan", "During adolesence I was able to get drunk off one pint.."],
    ["Jimmy Cool", "Sung in tune to the song Boney M - Daddy cool"],
    ["Jimbo Jones", "Sk8er name from my time as part of the High Rollers collective"],
    ["Maurice DeShawn", "Repeatedly fraped and given the persona of Big Mo"],
    ["JimQuimm", "Rip Redd"],
    ["JQ in the House", "DJ name from when I was part of Floor8DJz"],
    ["JR", "An old boss used to call me JR like the guy from Dallas"],
    ["Nimmy", "Bromance name"],
    ["No Show", "During final year of University I was called No Show as I never turned up to events"],
    ["King of Dubstep", "lol"],
    ["Ring Bandit", "Gang member whilst Travelling"],
    ["Jamas", "I Don't know.."],
    ["Spud", "My mothers favourite vedgtable"],
    ["Lisa", "After the Mona Lisa as a teenager my Dad called me this when I was angsty"],
    ["King of Winton", "Rip Peter"]
];

//

function rand() {
    var nick = nickNames[Math.floor(Math.random() * nickNames.length)];
    return nick;
};

rand();

var print = document.getElementById('nickName');
var elNickName = rand[0];

print.innerHTML = '<h1>' + elNickName + '</h1>';
