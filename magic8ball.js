// returns a random number from 0 to max - 1
function randNum(max) {
    return Math.floor(Math.random() * max);
}


const affirmativeAnswers = ['It is<br>certain.', 'It is<br>decidedly<br>so', 'Without<br>a doubt', 'Yes<br>definitely<br>', 'You may rely<br>on it', 
                            'As I see<br>it, yes', 'Most<br>likely', 'Outlook<br>good', 'Yes', 'Signs<br>point to<br>yes'];
const nonCommitalAnswers = ['Reply hazy,<br>try again', 'Ask again<br>later', 'Better not tell<br>you now<br><br>', 'Cannot<br>predict<br>now', 'Concentrate<br>and ask<br>again'];
const negativeAnswers = ['Don\'t count<br>on it', 'My reply<br>is no', 'My sources<br>say no', 'Outlook<br>not so<br>good', 'Very<br>doubtful'];

const answers = [affirmativeAnswers, nonCommitalAnswers, negativeAnswers];


window.onload = () => {
    document.getElementById("8ball").onclick = () => {
        // use the randNum function to choose a random reply w/ 33% chance for each answer type and equal chance for each reply of the selected answer type
        const answerType = randNum(3);
        const reply = answers[answerType][randNum(answerType === 0 ? 10 : 5)];

        // update the html button with the reply
        document.getElementById("reply").innerHTML = reply;
    };
};