const  {Circle,Triangle, Square} = require('../shapes')

 
    describe('Circle', () =>{
      it('if selection is  then if will render: <circle cx="150" cy="100" r="80" fill="green" />', () => {
        const inputShape= 'circle'
        const inputShapeColor= 'red'

        const  circle = new Circle()
        expect(circle.renderShapeTag(inputShape,inputShapeColor)).toEqual(`<circle cx="150" cy="100" r="80" fill="${inputShapeColor}"/>`);
      });    
     
      it('if selection is  svg tag', () => {
        const inputShape= 'circle'
        const inputShapeColor= 'red'
        const  circle = new Circle()
        const shapeTag= circle.renderShapeTag(inputShape,inputShapeColor)
        expect(circle.renderSVG(inputShape,shapeTag)).toEqual(
  `<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg">${shapeTag}<text x="150" y="115" font-size="40" text-ancho+r="middle" fill="white">TEXT</text></svg>`);
  
    })
    describe('Triangle', () =>{
      it('if selection is triangle then if will render:  <polygon points="100,10 230,180 0,180" fill="blue" />', () => {
        const inputShape= 'triangle'
        const inputShapeColor= 'red'

        const  triangle = new Triangle()
        expect(triangle.renderShapeTag(inputShape,inputShapeColor)).toEqual(`<polygon points="100,10 230,180 0,180" fill="${inputShapeColor}"/>`);
      }); 
      });       
      it('if selection is triangle render svg tag', () => {
        const inputShape= 'triangle'
        const inputShapeColor= 'red'
        const  triangle = new Triangle()
        const shapeTag= triangle.renderShapeTag(inputShape,inputShapeColor)
        expect(triangle.renderSVG(inputShape,shapeTag)).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeTag}<text x="110" y="110" font-size="60" text-anchor="middle" fill="white"></text></svg>`)
      });    
    })
    describe('Square', () =>{
      it('if selection is Square then if will render:  <rect width="75%" height="100%" fill="red" />', () => {
        const inputShape= 'square'
        const inputShapeColor= 'red'

        const  square = new Square()
        expect(square.renderShapeTag(inputShape,inputShapeColor)).toEqual(`<rect width="75%" height="100%" fill="${inputShapeColor}"/>`);
      });    
  
    })
