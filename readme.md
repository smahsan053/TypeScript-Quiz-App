# TypeScript Quiz Application

This is a simple command-line quiz application built using TypeScript and Inquirer.js. The application presents random questions to the user, evaluates the answers, and keeps track of the score.

## Features

- Presents random questions to the user from a predefined set of questions.
- Evaluates the user's answers and provides immediate feedback.
- Tracks the number of questions asked, correct answers, and wrong answers.
- Allows the user to continue answering questions until they choose to stop.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/typescript-quiz-app.git
   cd typescript-quiz-app
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Make the script executable:
   ```sh
   chmod +x ./index.js
   ```

## Usage

To start the quiz application, run the following command:

```sh
./index.js

Follow the prompts to answer the quiz questions.

How It Works
Random Question Selection: The script randomly selects a question from the predefined set of questions.
Question and Options Display: The selected question and its options are displayed to the user.
Answer Evaluation: The user's selected answer is evaluated, and immediate feedback is given (correct or wrong).
Score Tracking: The script keeps track of the total number of questions asked, the number of correct answers, and the number of wrong answers.
Continuation Prompt: After each question, the user is asked if they want to continue with more questions. The quiz continues until the user decides to stop.
Final Score Display: When the user decides to stop, the final score and statistics are displayed.
Example

./index.js

# Output:
# Read question carefully & press enter to see options
# 1)Which operator is used to concatenate strings in TypeScript?
# Select correct option from below choices
# +  -  *
# > Correct
# More Quiz? (Y/n)
# ...
# Total Questions Asked: 3
# Answered Correctly: 2
# Answered Wrong: 1
# Your Score is 2

Error Handling
The application handles errors by ensuring that the user provides valid input for each prompt.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

```
