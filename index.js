const inquirer = require('inquirer')
const {Circle, Triangle, Square} = require('./lib/shapes')
const {writeFile} = require('fs');

// list of question for prompt
const questions = [
    {
        message: 'provide a three letter TEXT for the SVG file:',
        name: 'text',
        validate: function (input) {
         const done = this.async();

            if(input.length >3){
            done('MUST BE THREE LETTERS MAXIMUM')
            }else{
                done(null,true)
            }

        }
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
            { name: "circle", value: "circle" },
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
// takes in data from prompts 
promptUser() 
        .then((answers) => {
            // returns answers and uses answers to render shape
            const {text, textColor, shape, shapeColor} = answers
            let shapeSVG
            if(shape === 'circle'){
                shapeSVG = new Circle().renderSVG(shape,shapeColor,text,textColor)
            }else if(shape === 'triangle'){
                shapeSVG = new Triangle().renderSVG(shape,shapeColor,text,textColor)
            }else{
                shapeSVG = new Square().renderSVG(shape,shapeColor,text,textColor)
            }
            // writes svg to examples folder with svg file
            writeFile(`./examples/${shape}.svg`, shapeSVG, (err) => {
                if (err) console.error(err);
                console.info(`The ${shape}.svg has been generated!`);
              }); 
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(error.isTtyError)
            } else {
                console.error(error)
            }
        });