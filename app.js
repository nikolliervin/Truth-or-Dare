//main

const startPlayers=document.getElementById('playersContainer');
const startAddPlayer=document.getElementById('addPlayer');
const startInputPlayer=document.getElementById('inputPlayer');

let players=[];

try {
    startAddPlayer.addEventListener('click',()=>{
        players.push((startInputPlayer).value);
        
        let playersContainer=document.createElement('p');
        let playersContainerText=document.createTextNode((startInputPlayer).value);
        playersContainer.appendChild(playersContainerText);
        startPlayers.append(playersContainer);
    
    
    })
} catch (error) {
    
}



//game
const gamePlayerName=document.getElementById('playerName');
const question=document.getElementById('truthOrDare');
const truthButton=document.getElementById('truthBtn');
const dareButton=document.getElementById('dareBtn');
const randomButton=document.getElementById('randomBtn');

function randomSelect(array){
    return array[Math.floor(Math.random() * array.length)];
};

truthButton.addEventListener('click',()=>{
    let nameSelected=randomSelect(players);
    let truthSelected=randomSelect(truths);
    gamePlayerName.innerHTML=nameSelected;
    question.innerHTML=truthSelected;
});

dareButton.addEventListener('click',()=>{
    let nameSelected=randomSelect(players);
    let dareSelected=randomSelect(dares);
    gamePlayerName.innerHTML=nameSelected;
    question.innerHTML=dareSelected;

});

randomButton.addEventListener('click',()=>{
    let nameSelected=randomSelect(players);
    let randomSelected=randomSelect(randoms);
    gamePlayerName.innerHTML=nameSelected;
    question.innerHTML=randomSelected;
});






const truths=[`When was the last time you lied?`,
`What's the worst thing you've ever done at work?`,
`When was the last time you cried?`,
`What's your biggest fear?`,
`What's your biggest fantasy?`,
`Do you have any fetishes?`,
`Who's the last person you searched on Instagram?`,
`What's something you're glad your family doesn't know about you?`,
`Have you ever cheated on someone?`,
`Where's the weirdest place you peed?`,
`What's the worst thing you've ever done?`,
`What's the strangest thing you've ever eaten?`,
`What's your relationship dealbreaker?`,
`What's a secret you've never told anyone?`,
`Do you have a hidden talent?`,
`Who was your first celebrity crush?`,
`What are your thoughts on polyamory?`,
`What's the worst intimate experience you've ever had?`,
`What's the best intimate experience you've ever had?`,
`Have you ever cheated in an exam?`,
`If you were going to be on a reality TV show, which would it be?`,
`What's the drunkest you've ever been?`,
`Have you ever broken the law?`,
`What's the most embarrassing thing you've ever done?`,
`What's your biggest insecurity?`,
`Have you ever stayed friends with someone because it benefitted you beyond just the friendship?`,
`What's the biggest mistake you've ever made?`,
`What's the most disgusting thing you've ever done?`,
`Who would you like to kiss in this room?`,
`What's one thing you hate people knowing about you?`,
`What's the worst thing anyone's ever done to you?`,
`What's the best thing anyone's ever done for you?`,
`Have you ever had a run in with the law?`,
`What's your worst habit?`,
`What's the most embarrassing thing you've done in a taxi?`,
`What's the worst thing you've ever said to anyone?`,
`Have you ever peed in the shower?`,
`What's the strangest dream you've had?`,
`Have you ever been caught doing something you shouldn't have?`,
`What's the worst date you've been on?`,
`What's the best date you've been on?`,
`What happened on the latest night out you've ever had?`,
`What's your biggest regret?`,
`What's the biggest misconception about you?`,
`Have you ever said something you regret about someone in this room?`,
`What's one thing you wish people knew about you?`,
`Where's the weirdest place you've had sex?`,
`Why did your last relationship break down?`,
`Have you ever lied to get out of a bad date?`,
`What's the most trouble you've been in?`,
`When did you last have sex outside?`,
`What's the worst thing you've lied about?`,
`What's one thing you wish you'd lied about?`,
`What's the best piece of advice you've been given?`,
`What's the most you've spent on a night out?`,
`Have you ever returned or re-gifted a present?`,
`Name a time you think you were a bad partner`,
`What's your guilty pleasure?`,
`What's one thing you only do when you're alone?`,
`If you had to get back with an ex, who would you choose?`,
`If you had to cut one friend out of your life, who would it be?`,
`Do you have a favourite friend?`,
`Do you have a favourite sibling?`,
`What's the strangest rumour you've heard about yourself?`,
`What's your biggest turn on?`,
`What's your favourite gross food combination?`,
`What's the silliest reason you've left a club early?`,
`What have you purchased that's been the biggest waste of money?`,
`If you could swap lives with someone in this room, who would it be?`,
`Tell me about your first kiss`,
`What was the most inappropriate time you farted?`,
`What's something you really hope your family never finds out about?`,
`What's the weirdest lie you've ever told?`,
`Do you have any fake social media accounts?`];

const dares=[`Read out the last dirty text you sent`,
`Eat five spoonfuls of a condiment of your choice`,
`Try to juggle 3 things of the group's choice`,
`Pretend to be a food item of your choice`,
`Show the most embarrassing photo on your phone`,
`Show the last five people you texted and what the messages said`,
`Let the rest of the group DM someone from your Instagram account`,
`Eat a raw piece of garlic`,
`Do 100 squats`,
`Let the group look in your Instagram DMs`,
`Show us your screen time report`,
`Keep three ice cubes in your mouth until they melt`,
`Say something dirty to the person on your left`,
`Give a foot massage to the person on your right`,
`Put 10 different available liquids into a cup and drink it`,
`Yell out the first word that comes to your mind`,
`Give a lap dance to someone of your choice`,
`Repeat everything the person on your right is saying until it's your turn again`,
`Remove four items of clothing`,
`Like the first 15 posts on your Facebook newsfeed`,
`Eat a spoonful of mustard`,
`Keep your eyes closed until it's your go again`,
`Try and get all the the toes on one foot in your mouth`,
`Send a sext to the last person in your phonebook`,
`Show your orgasm face`,
`Seductively eat a banana`,
`Empty out your wallet/purse and show everyone what's inside`,
`Do your best sexy crawl`,
`Pretend to be the person to your right for 10 minutes`,
`Eat a snack without using your hands`,
`Whisper a secret to the person on your left`,
`Say two honest things about everyone else in the group`,
`Twerk for a minute`,
`Try and make the group laugh as quickly as possible`,
`Try to put your whole fist in your mouth`,
`Let another person in the group touch up your makeup`,
`Tell everyone an embarrassing story about yourself`,
`Try to lick your elbow`,
`Peel a banana with your toes`,
`Say everything in a whisper for the next 10 minutes`,
`Smell another player's armpit`,
`Talk in an American accent for the rest of the evening`,
`Do your best celebrity impression`,
`Play air guitar for 2 minutes straight`,
`Post the oldest selfie on your phone on Instagram Stories`,
`Tell the saddest story you know`,
`Howl like a wolf for two minutes`,
`Dance without music for two minutes`,
`Pole dance with an imaginary pole`,
`Belt out the chorus of a cheesy ballad at full volume`,
`Let someone else tickle you and try not to laugh`,
`Put as many snacks into your mouth at once as you can`,
`Scroll through your phone book until someone says stop. You either have to call or delete that person.`,
`Put your clothing on backwards for the rest of the evening`,
`Down your drink (responsibly)`,
`Try and make yourself cry in front of the group`,
`Give a celebrity lookalike for every person in the room`,
`Tell the group two truths and a lie, and they have to guess which one the lie is`,
`Attempt to impersonate everyone in the room`,
`Reply to the first five Instagram Stories on your timeline`,
`Share the first celebrity on your timeline's Instagram to your Story`,
`Put on as many layers as possible in 60 seconds`,
`Fill your mouth with drink and gargle your answer to the next Truth`,
`Make another player jump in the next 10 minutes`,
`Smile as widely as you can and hold it for two minutes`,
`Hold your drink with two hands for the rest of the evening`,
`Attempt the first TikTok dance on your for you page`,
`Sit on the floor for the rest of the evening`,
`Put on make-up without a mirror and leave it like that for the rest of the game`,
`Give a personalised insult to everyone in the room`];

let randoms=truths.concat(dares);
randoms.sort();