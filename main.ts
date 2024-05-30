#! /usr/bin/env node
import inquirer from "inquirer"
interface Quizformat {
    Question: string[];
    Option: string[];
    answer: string;

}
interface PromptResponse {
    question: string,
    options: string,
    confirm: Boolean
}
const quizObj: Quizformat[] = [
    {
        Question: ['1)Which operator is used to concatenate strings in TypeScript?'],
        Option: ['+', '-', '*'],
        answer: '+'
    },
    {
        Question: ['2)What is the purpose of an assignment operator in TypeScript?'],
        Option: ['To compare two values', 'To perform mathematical calculations', 'To assign a value to a variable'],
        answer: 'To assign a value to a variable'
    },
    {
        Question: ['3)Which operator in TypeScript is used for incrementing a value by 1?'],
        Option: ['+=', '++', '--'],
        answer: '++'
    },
    {
        Question: ['4)Which type of operator is used to perform mathematical operations like addition and subtraction?'],
        Option: ['Logical operator', 'Arithmetic operator', 'Assignment operator'],
        answer: 'Arithmetic operator'
    }

]

const randomIndexGenerator = () => {
    const randomQuiz = Math.floor(Math.random() * 4)
    // console.log(randomQuiz);
    return randomQuiz
}


const quiz = async (): Promise<(string | Boolean)[]> => {
    const randIndex = randomIndexGenerator()
    const response: PromptResponse = await inquirer.prompt<PromptResponse>(
        [

            {
                type: 'list',
                name: 'question',
                choices: quizObj[randIndex].Question,
                message: 'Read question carefully & press enter to see options'
            },
            {
                type: 'list',
                name: 'options',
                choices: quizObj[randIndex].Option,
                message: 'Select correct option from below choices'
            },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'More Quiz?'
            }
        ]
    )
    return [response.question, response.options, response.confirm]
}

let score = 0
let questionsAsked = 0
let correctAnswers = 0
let wrongAnswers = 0
const main = async (question: string, options: string) => {
    const index = quizObj.findIndex(obj => obj.Question[0] === question);
    const correctAnswer = quizObj[index].answer;
    if (options === correctAnswer) {
        console.log('Correct');
        score++
        questionsAsked++
        correctAnswers++
    } else {
        console.log('Wrong');
        wrongAnswers++
    }
}

const initApp = async () => {
    let condition = true
    while (condition) {
        let answer = await quiz()
        let [question, options, confirm] = answer
        main(question as string, options as string)
        if (!confirm) {
            condition = false;
            // No need to call quiz() here, as the loop will exit
        }

    }
    console.log(`\tTotal Questions Asked: ${questionsAsked}\n\tAnswered Correctly: ${correctAnswers}\n\tAnswered Wrong:${wrongAnswers}\n\tYour Score is ${score}`);

}
initApp()

// Generate a large quizObj programmatically
/*
const generateQuizObj = (numberOfQuestions:number) => {
    const quizObj = [];
    for (let i = 1; i <= numberOfQuestions; i++) {
        const question = `Question ${i}: What is the answer to this question?`;
        const options = ['Option A', 'Option B', 'Option C', 'Option D'];
        const answer = options[Math.floor(Math.random() * options.length)]; // Randomly select an answer
        quizObj.push({ Question: [question], Options: options, answer });
    }
    return quizObj;
}

// Example: Generate a quizObj with 100 questions
const quizObject = generateQuizObj(100);
console.log(quizObject);
*/