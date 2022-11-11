const selectColorText = document.querySelector('.selectColorTemplate');
const selectMakeText= document.querySelector('.selectMakeTemplate');
const filterTemplateText = document.querySelector('.filterCarTemplate');
const selectColorTemplate = Handlebars.compile(selectColorText.innerText);
const selectMakeTemplate = Handlebars.compile(selectMakeText.innerText);
 const filterCarTemplate = Handlebars.compile(filterTemplateText.innerText);
// const carFilter = Handlebars.compile(filterTemplateText.innerText)

const selectColorElem = document.querySelector('.color_list');
const selectMakeElem = document.querySelector('.make_list');
const filterList = document.querySelector('.filter_list')
const filterBtn = document.querySelector('.filterBtn');


axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const color = result.data;
        // console.log(color)
        selectColorElem.innerHTML = selectColorTemplate({
            color
        })
    })
    
    axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(result => {
        const makes = result.data;
        // console.log(color)
        selectMakeElem.innerHTML = selectMakeTemplate({
            makes
        })
    })

    filterBtn.addEventListener('click', function (){
    
        const makeValue = selectMakeElem.value;
        const colorValue = selectColorElem.value;
    
        if(makeValue !=="" && colorValue === ""){
            axios
              .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makeValue)
              .then(result => {
                  const filtered = result.data
                  console.log(filtered)
                  filterList.innerHTML = filterCarTemplate({
                    filtered
                  })
              })
        }
        else if(makeValue ==="" && colorValue !== ""){

            axios
              .get("https://api-tutor.herokuapp.com/v1/cars/color/" + colorValue)
              .then(result => {
                  const filtered = result.data
                  filterList.innerHTML = filterCarTemplate({
                    filtered
                  })
              })
        }
        else{

            axios
            .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makeValue +"/color/" + colorValue)
            .then(result => {
                const filtered = result.data
                console.log(filtered)
                filterList.innerHTML = filterCarTemplate({
                  filtered
                })
            })
        }
    
    })
    