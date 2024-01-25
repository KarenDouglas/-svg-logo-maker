
class Shape{
   // renders the SVG based on inputs from prompt
    renderSVG(shape,shapeColor, text, textColor){
        
            let template;
        switch(shape){
            case 'circle':
                template = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
                break;
            case 'triangle':
                template = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 230,180 0,180" fill="${shapeColor}"/><text x="110" y="110" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
                break;
            case 'square':
                template = 
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="75%" height="100%" fill="${shapeColor}" /><text x="110" y="110" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
                break;
        
            default:
                template = 'nothing to see here'    
        }
        if(
            typeof shape !== 'string' || 
            typeof shapeColor !== 'string' || 
            typeof text !== 'string' || 
            typeof textColor !== 'string'
        ){
           throw new Error("all inputs must be a string")
        }else{

            return template
        }


    }
    
}
// instantiates Circle,Square, Triangle sub classes
class Circle extends Shape {}
class Square extends Shape{}
class Triangle extends Shape{}



module.exports = { Triangle,Circle, Square }