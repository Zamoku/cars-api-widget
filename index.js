const carTemplateText = document.querySelector('.carTemplate');
const colorTemplateText = document.querySelector('.colorTemplate');
const makesTemplateText = document.querySelector('.makesTemplate');
const carTemplate = Handlebars.compile(carTemplateText.innerText);
// const colorTemplate = Handlebars.compile(colorTemplateText.innerText);
// const makesTemplate = Handlebars.compile(makesTemplateText.innerText);

const carElem = document.querySelector('.car_brand');
const colorElem = document.querySelector('.car_color');
const makeElem = document.querySelector('.car_make');



axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const color = result.data;
        // console.log(color)
        colorElem.innerHTML = carTemplate({
            color
        })
    })
    
    axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(result => {
        const makes = result.data;
        // console.log(color)
        makeElem.innerHTML = carTemplate({
            makes
        })
    })
    
    axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;
        // console.log(cars)
        carElem.innerHTML = carTemplate({
            cars
        })
    })

   

