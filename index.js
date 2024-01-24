
const inquirer = require('inquirer')

// list of question for prompt
const questions = [
    {
        message: 'provide a three letter TEXT for the SVG file:',
        name: 'text'
    },
    {
        message: 'provide a TEXT COLOR for the SVG file:',
        name: 'textColor'
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'provide a SVG SHAPE for the SVG file:',
        choices: [
            { name: "circle", value: `circle` },
            { name: "triangle", value: "triangle" },
            { name: "square", value: "square" }
        ]
    },
    {
        message: 'provide a SHAPE COLOR for the SVG file:',
        name: 'shapeColor'
    }, 
    
    
];

// outputs the questions to be asked in command line
const promptUser = () => {
    return inquirer.prompt(questions)
}

promptUser()
        .then((answers) => {
            const {text, textColor, shape, shapeColor} = answers
            console.log(text,textColor,shape, shapeColor)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(error.isTtyError)
            } else {
                console.error(error)
            }
        });