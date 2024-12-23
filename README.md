# Marks-Based-Quiz

A simple interactive quiz application built with JavaScript, HTML, and CSS. This app presents multiple-choice questions, calculates scores based on the correct answers, and displays the total marks at the end. Each question is assigned specific marks to enhance the assessment experience.

## Features

- Interactive multiple-choice questions.
- Instant feedback on selected answers (correct or incorrect).
- Score calculation based on marks assigned to each question.
- Displays total marks and score breakdown at the end of the quiz.
- Easy to customize with additional questions and features.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amaanp32/Marks-Based-Quiz.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Marks-Based-Quiz
   ```

3. Open `index.html` in your preferred web browser to start the quiz.

## Usage

- Click **Start Quiz** to begin.
- Select the correct answer for each question. Your selection will be highlighted.
- The quiz will automatically proceed to the next question after a selection.
- At the end of the quiz, your total score and maximum possible marks will be displayed.

## Adding/Editing Questions

To add or modify questions, update the `questions` array in the `script.js` file. Each question object should include:

- `question`: The text of the question.
- `choices`: An array of answer choices.
- `answer`: The correct answer as a string.
- `marks`: The marks assigned to the question.

Example:
```javascript
const questions = [
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
    marks: 5
  }
];
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed by [amaanp32](https://github.com/amaanp32).
