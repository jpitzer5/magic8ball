// returns a random number from 0 to max - 1
function randNum(max) {
    return Math.floor(Math.random() * max);
}


const affirmativeAnswers = ['It is certain.', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 
                            'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes'];
const nonCommitalAnswers = ['Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];
const negativeAnswers = ['Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

const answers = [affirmativeAnswers, nonCommitalAnswers, negativeAnswers];


window.onload = () => {
    document.getElementById("8ball").onclick = () => {
        // use the randNum function to choose a random reply w/ 33% chance for each answer type and equal chance for each reply of the selected answer type
        const answerType = randNum(3);
        const reply = answers[answerType][randNum(answerType === 0 ? 10 : 5)];
        //console.log(reply);

        // update the html button with the reply
        document.getElementById("8ball").innerHTML = reply;
        console.log(reply);
    };
};