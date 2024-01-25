const  {Circle,Triangle, Square} = require('../shapes')

 // tests for Circle class
 describe('Circle', () => {    
     it('if selection is a circle render circle svg tag', () => {
         const inputShape= 'circle'
         const inputShapeColor= 'red'
         const  circle = new Circle()
         const text ='acv'
         const textColor = 'purple'
         expect(circle).toBeInstanceOf(Circle)
         
         expect(circle.renderSVG(inputShape,inputShapeColor,text,textColor )).toEqual(
             `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${inputShapeColor}"/><text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);  
            })
            it('if inputs dont match a string, return an error', () => {
                const inputShape = 2
                const inputShapeColor = {}
                const text = []
                const textColor = 20
                const  circle = new Circle()
                const errorFunction = () => circle.renderSVG(inputShape,inputShapeColor,text,textColor)
                
                expect(circle).toBeInstanceOf(Circle)
                expect(errorFunction).toThrow()
                expect(errorFunction).toThrow("all inputs must be a string")
            })
            
        })
        // tests for triangle class
        describe('Triangle', () => {
            it('if selection is a triangle render triangle svg tag', () => {
                const inputShape= 'triangle'
                const inputShapeColor= 'red'
                const  triangle = new Triangle()
                const text ='acv'
                const textColor = 'purple'
                expect(triangle).toBeInstanceOf(Triangle)
                expect(triangle.renderSVG(inputShape,inputShapeColor,text, textColor)).toEqual(
                    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 230,180 0,180" fill="${inputShapeColor}"/><text x="110" y="110" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);  
                })
                it('if inputs dont match a string, return an error', () => {
                    const inputShape = 2
                    const inputShapeColor = {}
                    const text = []
                    const textColor = 20
                    const  triangle = new Triangle()
                    const errorFunction = () => triangle.renderSVG(inputShape,inputShapeColor,text,textColor)
                    
                    expect(triangle).toBeInstanceOf(Triangle)
                    expect(errorFunction).toThrow()
                    expect(errorFunction).toThrow("all inputs must be a string")
                })
            });       

            // tests for square class
describe('Square', () =>{
    it('if selection is a square render square svg tag', () => {
      const inputShape= 'square'
      const inputShapeColor= 'red'
      const  square = new Square()
      const text ='acv'
      const textColor = 'purple'
      expect(square).toBeInstanceOf(Square)
      expect(square.renderSVG(inputShape,inputShapeColor,text, textColor)).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="75%" height="100%" fill="${inputShapeColor}" /><text x="110" y="110" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`);  
    })
    it('if inputs dont match a string, return an error', () => {
        const inputShape = 2
        const inputShapeColor = {}
        const text = []
        const textColor = 20
        const  square = new Square()
        const errorFunction = () => square.renderSVG(inputShape,inputShapeColor,text,textColor)
    
        expect(square).toBeInstanceOf(Square)
        expect(errorFunction).toThrow()
        expect(errorFunction).toThrow("all inputs must be a string")
    })
})
  
