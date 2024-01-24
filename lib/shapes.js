class Shape{
    renderShapeTag(shape, shapeColor){
        let  tag;
      
        switch(shape){
            case 'circle':
                tag =`<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`
                break;
            case 'triangle':
                tag =`<polygon points="100,10 230,180 0,180" fill="${shapeColor}"/>`
                break;
            case 'square':
                tag =`<rect width="75%" height="100%" fill="${shapeColor}"/>`
                break;
            default:
                tag = 'nothing to see here'    
        }
        this.renderSVG(shape,tag)
        return tag
    }
    renderSVG(shape,tag){
        
        let template;
        switch(shape){
            case 'circle':
                template = 
`<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg">${tag}<text x="150" y="115" font-size="40" text-ancho+r="middle" fill="white">TEXT</text></svg>`
                break;
            case 'triangle':
                template = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${tag}<text x="110" y="110" font-size="60" text-anchor="middle" fill="white"></text></svg>`
                break;
            case 'cirle':
                template = 
`<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg">${tag}<text x="150" y="115" font-size="40" text-ancho+r="middle" fill="white">TEXT</text></svg>`
                break;
        
            default:
                tag = 'nothing to see here'    
        }
        return template

    }
}

class Circle extends Shape {


}
class Square extends Shape{
}
class Triangle extends Shape{
    
}



module.exports = { Triangle,Circle, Square }