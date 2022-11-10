const carTemplateText = document.querySelector('.carTemplate');
const carTemplate = Handlebars.compile(carTemplateText.innerText);

const carElem = document.querySelector('.car_brand');
const colorElem = document.querySelector('.car_color');
const makeElem = document.querySelector('.car_make');

axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;
        // console.log(cars)
        carElem.innerHTML = carTemplate({
            cars
        })
    })

axios
    .get("http://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const color = result.data;
        // console.log(color)
        colorElem.innerHTML = carTemplate({
            color
        })
    })

axios
    .get("http://api-tutor.herokuapp.com/v1/makes")
    .then(result => {
        const makes = result.data;
        // console.log(color)
        makeElem.innerHTML = carTemplate({
            makes
        })
    })