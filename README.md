# World Economic Forum Quiz Web App


The **World Economic Forum Quiz Web App** is an interactive platform designed to test your knowledge of the World Economic Forum (WEF), its initiatives, and its impact on global issues. This app presents users with multiple-choice questions, offering an engaging way to learn more about the WEF’s work in areas such as global risks, sustainability, and technological governance.


![Responsive Mockup](assets/images/mockup.jpg)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Design](#design)
   - [Color Scheme](#color-scheme)
   - [Typography](#typography)
   - [Layout](#layout)
3. [Features](#features)
4. [Quiz Structure](#quiz-structure)
   - [Screens](#screens)
   - [Navigation](#navigation)
5. [Technologies Used](#technologies-used)
6. [Testing](#testing)
   - [Validator Testing](#validator-testing)
6. [Deployment](#deployment)
   - [Local Setup](#local-setup)
   - [Cloning the Repository](#cloning-the-repository)
7. [Testing](#testing)
8. [Future Enhancements](#future-enhancements)
9. [Credits](#credits)


## Project Overview


The **World Economic Forum Quiz Web App** allows users to engage with questions related to the WEF’s latest initiatives and global impact. Users can test their knowledge by answering a series of timed multiple-choice questions. At the end of the quiz, participants are given their results and have the option to review their answers.


The live version of the app can be found at: [Live Site URL](https://fabioeloche.github.io/wef_quiz/).


## Design

### Color Scheme
The website uses a clean white background with black text for readability. Dark blue buttons are used for primary actions, while gold highlights the help button. Correct answers are marked with green, and incorrect ones with red, providing clear feedback throughout the quiz.
![Features Image](/assets/images/colorscheme.jpeg)

### Typography
The app uses **Arial** for its simplicity and readability. The quiz questions are presented in a legible format with an emphasis on clarity.


### Layout
The layout is centered and fully responsive, ensuring that the app works well on all device sizes, from desktops to mobile phones.


## Features


- **Multiple Quiz Screens**: Users are guided through different stages of the quiz, from instructions to final results.
- **Timer**: The quiz includes a countdown timer, adding a challenging aspect to answering the questions quickly and accurately.
- **Help Button**: Users can use a 50% help button to eliminate two wrong options per quiz round, making it easier to answer tough questions.
- **Immediate Feedback**: Upon submitting an answer, users are given feedback on whether their answer was correct or incorrect.
- **Progress Tracking**: Users can track their progress through the quiz with a counter showing the number of questions answered and remaining.
- **Results and Review**: At the end of the quiz, users are presented with their final score and can review their answers to see where they went right or wrong.



## Quiz Structure


### Screens

1. **Welcome Screen**: Introduction to the quiz with buttons to start or read instructions.  

   ![Welcome Screen](assets/images/pages/welcome.png)


2. **Instructions Screen**: Details on how to play the quiz.  

   ![Instructions Screen](assets/images/pages/howtoplay.png)


3. **Quiz Screen**: Users answer multiple-choice questions with a timer and help options. 

   ![Quiz Screen](assets/images/pages/quiz.png)


4. **Results Screen**: Displays the final score with the option to review answers or restart the quiz.  

   ![Results Screen](assets/images/pages/results.png)


5. **Help Page**: Allows users to reduce the number of options by 50% (removes two incorrect answers).

   ![Help Page](assets/images/pages/help.png)


### Navigation
- **Start Quiz**: Users can enter their name and begin the quiz.
- **Next Question**: Button to proceed to the next question after selecting an answer.
- **Help**: A help button to remove two wrong answers, available only once per quiz.
- **Results**: Users can review their performance after completing the quiz.


## Technologies Used


- **HTML5**: For structuring the content of the quiz web app.
- **CSS3**: For styling the interface and ensuring responsiveness.
- **JavaScript (ES6)**: For implementing the quiz logic, including question shuffling, answer validation, timers, and score tracking.
- **GitHub Pages**: For hosting the live version of the website.


## Testing

- Tested navigation bar elements and buttons across all pages.
- Ensured the input form for the user’s name enforces validation and email syntax rules where applicable.
- Verified that the quiz proceeds only when the required fields are filled.
- Tested the **Help** button functionality and score display at the end of the quiz.
- Verified site compatibility in MS Edge, Chrome, and Safari.
- Verified the responsiveness of all pages across different screen sizes.

### Validator Testing

- **HTML**: Checked with [W3C validator]
   - Result for index.html
(https://validator.w3.org/) for `index.html`.
![HTML Testing](assets/images/htmlresults.png)
- **CSS**: Validated with [Jigsaw validator](https://jigsaw.w3.org/css-validator/) for `style.css`.
   - Result for style.css
![CSS Testing](assets/images/cssresults.jpeg)
- **Lighthouse Testing**: Used Google Chrome's Lighthouse to verify performance and accessibility.
   - Result for index.html
![Lighthouse Testing](assets/images/lighthouseresult.png)
- **JSHint Testing**: Used JSHint to ensure code quality and detect potential issues.
   - Result for script.js: Passed with 5 warnings for unused variables, which are used in `index.html`. Overall, the test was successful.

## Deployment


The website is deployed using GitHub Pages. Follow these steps to deploy the project:


1. Log in (or sign up) to GitHub.
2. Go to the repository: [fabioeloche/wef_quiz](https://github.com/fabioeloche/wef_quiz).
3. Navigate to the repository’s **Settings** tab.
4. Under the **Code and Automation** section, select the **Pages** option.
5. From the source dropdown, select the **main branch** and save the settings.
6. The site will be deployed within a few minutes. The live version will be accessible at the provided URL once the deployment is complete.

### Cloning the Repository

To clone the repository to your local machine:

1. Log in (or sign up) to GitHub.
2. Go to the repository: [fabioeloche/wef_quiz](https://github.com/fabioeloche/wef_quiz).
3. Click on the **Code** button, select the cloning method (HTTPS, SSH, or GitHub CLI), and copy the link provided.
4. Open your terminal and navigate to the directory where you want to clone the repository.
5. Type the following command into the terminal:
   ```bash
   git clone <https://github.com/fabioeloche/wef_quiz>

## Testing   

The table below outlines each feature tested, the expected outcomes, specific testing actions taken, and the results.

| Feature                | Expected Outcome                                                     | Testing Performed            | Result                      | Pass/Fail |
|------------------------|----------------------------------------------------------------------|-------------------------------|-----------------------------|-----------|
| Site Title             | Link directs the user back to the home page                          | Clicked title                 | Home page reloads           | Pass      |
| Name Input             | Requires user to enter their name before starting the quiz           | Entered name and clicked "Submit" button | Quiz starts only after name is entered | Pass      |
| Start Button           | Starts the quiz and displays the first question                      | Clicked "Start Quiz"          | First question appears      | Pass      |
| Question Display       | Shows the question with four answer options                          | Viewed question layout        | All options displayed       | Pass      |
| Answer Selection       | Highlights selected answer and registers choice                      | Clicked answer option         | Answer is highlighted       | Pass      |
| Next Button            | Moves to the next question                                           | Clicked "Next"                | Next question appears       | Pass      |
| Timer                  | Counts down from 10 minutes in total for the entire quiz             | Observed timer at start       | Timer starts at 10 minutes  | Pass      |
| Help Button (50% Rule) | Removes two incorrect answers from options                           | Clicked "Help"                | Two options removed         | Pass      |
| Score Calculation      | Updates score for correct answers only                               | Completed quiz                | Score updates correctly     | Pass      |
| Final Score Display    | Shows final score and review option at end of quiz                   | Finished quiz                 | Final score displayed       | Pass      |
| Restart Button         | Resets quiz to first question, score, and 10-minute timer            | Clicked "Restart"             | Quiz restarts, timer resets | Pass      |
| Responsiveness         | Adapts layout across desktop, tablet, and mobile                     | Resized window                | Layout adapts correctly     | Pass      |
| Browser Compatibility  | Works on Chrome, Safari, Firefox, and Edge                           | Tested in all browsers        | Full functionality          | Pass      |

## Credits

- **Inspiration**: The design and structure of this project were partially inspired by [The Quiz Arms](https://github.com/kera-cudmore/TheQuizArms) by Kera Cudmore. It provided valuable insights into quiz functionality and user experience.
- **Background Image**: The background image of fluttering flags against a clear sky was sourced from Adobe Stock. You can view it here: [Flags of Many Countries](https://stock.adobe.com/images/flags-of-many-countries-flutter-on-the-background-of-the-blue-sky-in-sunny-day/166713949).
- **Color Scheme**: The color palette for the project was generated using the Coolors tool, providing a cohesive and visually appealing design. Check it out here: [Coolors](https://coolors.co/).
