/* Created by Julian Javier Gallegos 
*  Date of last text entry: 9/2/2022
*  Stay well everyone
*
*
*   TODO List
*   TODO: Generate ingredient list on finish.html using finishedRecipes (which stores user ingredient options)
*         - use localStorage get method with key='recipes' to update list and key='targetrecipe' to get target index
*           of recipe in finishedRecipes
*   TODO: Include buttons to remove and edit custom radio listings, and make sure those remove
*         or edit the localStorage listings too (which means the variable arrays).
*         Also do the same if implementing the recipes page down the line.
*   TODO: Remove all current listings on ingredients.html (except <p> 
*         and the stuff relating to customs)
*         and have the backend ingredient lists like flourIngredients
*         fill them out automatically
*   TODO: This Relates to the above, have user custom listings saved, so it generates those too.   
*/

// Variables
const flourIngredients = [
[['All-Purpose White Flour', '2 ⅔ Cup'], ['Baking Powder','1 T.'], ['Sea Salt', '½ Tsp']],
    [['Rice Flour', '1 ⅓ Cup'], ['Tapioca Starch','1 Cup'], ['Baking Powder', '3 T.'], ['Sea Salt', '½ Tsp']]
];

const sweetenerIngredients = [
    [['Evaporated Cane Sugar', '1 Cup']],
    [['Allulose ', '1 ⅓ cup']]
];

const flavoringsIngredients = [
    [['Vanilla Extract', '1 T.']],
    [['Cardamom', '½ Tsp']]
];

const eggIngredients = [
    [['Chicken Eggs', '3']],
    [['Applesauce', '¾']]
];

const dairyIngredients = [
    [['Whole Cowmilk', '¾ Cup']],
    [['Hazelnut Milk', '¾ Cup'], ['Apple Cider Vinegar', '2 T.']]
];

const shorteningIngredients = [
    [['Softened Butter', '1 Cup']],
    [['Softened Vegan Buttery Spread (Pressed, No Trans Fatty Acid)', '1 Cup']]
];

const whippedIngredients = [
    [['Whipping Cream (Heavy Cream) Chilled', '2 Cups'], ['Evaporated Cane Sugar', '2 T.'], ['Vanilla Extract (Optional)', '1 Tsp']],
    [['Coconut Cream (Chilled Overnight)', '2-3 Cans'], ['Confectioner\'s Sugar (Optional)', '2 T.'], ['Vanilla Extract (Optional)', '1 Tsp']]
];

const decorationIngredients = [
    [['Strawberries Sliced', '½ Cup']],
    [['Raspberries', '½ Cup']]
];

const flourIngredientsBase = [
    [['All-Purpose White Flour', '2 ⅔ Cup'], ['Baking Powder','1 T.'], ['Sea Salt', '½ Tsp']],
    [['Rice Flour', '1 ⅓ Cup'], ['Tapioca Starch','1 Cup'], ['Baking Powder', '3 T.'], ['Sea Salt', '½ Tsp']]
];

const sweetenerIngredientsBase = [
    [['Evaporated Cane Sugar', '1 Cup']],
    [['Allulose ', '1 ⅓ cup']]
];

const flavoringsIngredientsBase = [
    [['Vanilla Extract', '1 T.']],
    [['Cardamom', '½ Tsp']]
];

const eggIngredientsBase = [
    [['Chicken Eggs', '3']],
    [['Applesauce', '¾']]
];

const dairyIngredientsBase = [
    [['Whole Cowmilk', '¾ Cup']],
    [['Hazelnut Milk', '¾ Cup'], ['Apple Cider Vinegar', '2 T.']]
];

const shorteningIngredientsBase = [
    [['Softened Butter', '1 Cup']],
    [['Softened Vegan Buttery Spread (Pressed, No Trans Fatty Acid)', '1 Cup']]
];

const whippedIngredientsBase = [
    [['Whipping Cream (Heavy Cream) Chilled', '2 Cups'], ['Evaporated Cane Sugar', '2 T.'], ['Vanilla Extract (Optional)', '1 Tsp']],
    [['Coconut Cream (Chilled Overnight)', '2-3 Cans'], ['Confectioner\'s Sugar (Optional)', '2 T.'], ['Vanilla Extract (Optional)', '1 Tsp']]
];

const decorationIngredientsBase = [
    [['Strawberries Sliced', '½ Cup']],
    [['Raspberries', '½ Cup']]
];

// Indices are important for array references when adding new ingredients, and this is easier to read than a 4D array would be
// I really hope this stores the array references and does not copy all of the arrays contents
const referenceArray = [flourIngredients,sweetenerIngredients,flavoringsIngredients,eggIngredients,dairyIngredients,shorteningIngredients,whippedIngredients,decorationIngredients];

/*
    Order: FLour Mix, Sweetener, Flavorings, Eggs, Dairy, Shortening, Whippped Topping, Decorations, Recipe Name
    Suborder: unordered pairs of Ingredients and amounts
    Pairs Order: [Ingredient, Amount]
    Last element is a string name for the recipe
*/
const finishedRecipes = new Map([
    ["Default",
    [
        flourIngredients[0],
        sweetenerIngredients[0],
        flavoringsIngredients[0],
        eggIngredients[0],
        dairyIngredients[0],
        shorteningIngredients[0],
        whippedIngredients[0],
        decorationIngredients[0]
    ]],
    ["Alternative",
    [
        [flourIngredients[1]],
        [sweetenerIngredients[1]],
        [flavoringsIngredients[1]],
        [eggIngredients[1]],
        [dairyIngredients[1]],
        [shorteningIngredients[1]],
        [whippedIngredients[1]],
        [decorationIngredients[1]],
    ]
    ]

]); 

let customButtonClicked = [0,0,0,0,0,0,0,0] // 0 = custom forms closed, 1 = open, for each custom mix form, probably redundant
let customFormSizes = [0,0,0,0,0,0,0,0] // number of form rows opened by Add to Mix button, for each custom mix
let shortListNames = ['flour','sweetener','flavor','egg','dairy','shortening','whippped','decoration'];
// Event Listeners
if (document.URL.includes("ingredients.html")) {
    let customs = document.querySelectorAll('.custom');
    for (let i = 0; i < customs.length; i++) {
        customs[i].addEventListener('click', handleClickCustom);
    }

    document.querySelector('.submit').addEventListener('click', handleSubmitIngredients);
}

// Event Handlers
function handleClickCustom(e) {
    let indexNum = Number(e.target.value); 
    if (customButtonClicked[indexNum]) { // custom button form already opened
        document.getElementById('ul'+(indexNum+1)).innerHTML = '';
        document.querySelector('[value="addcustom'+(indexNum+1)+'"]').remove();
        document.querySelector('[value="submitcustom'+(indexNum+1)+'"]').remove();
        let removeButton = document.querySelector('[value="removecustom'+(indexNum+1)+'"]');
        if (removeButton) {
            removeButton.remove();
        }
        customButtonClicked[indexNum] = 0;
        customFormSizes[indexNum] = 0;
        e.target.innerText = 'CUSTOM MIX';
    } else { // custom button form has not been opened yet
        let ul = document.getElementById('ul'+(indexNum+1));
        let li = document.createElement('li');
        li.innerHTML = `
            <form>
                <input type="text" placeholder="Ingredient ..." name="customInputIngredient1">
                <input type="text" placeholder="Amount ..." name="customInputAmount1">
            </form>
        `;
        customButtonClicked[indexNum] = 1;
        customFormSizes[indexNum] = 1;
        li.classList.add('input' + indexNum + 'li' + customFormSizes[indexNum]);
        ul.appendChild(li);

        let buttonAdd = document.createElement('button');
        let buttonSubmit = document.createElement('button');
        buttonAdd.type = 'button';
        buttonSubmit.type = 'submit';
        buttonAdd.value = 'addcustom' + (indexNum+1);
        buttonSubmit.value = 'submitcustom' + (indexNum+1);
        buttonAdd.index = ''+indexNum;
        buttonSubmit.index = ''+indexNum;
        buttonAdd.innerText = 'Add To Mix';
        buttonSubmit.innerText = 'Submit Mix';
        buttonAdd.classList.add('custombuttons');
        buttonSubmit.classList.add('custombuttons');
        buttonAdd.addEventListener('click', handleClickCustomAddRemoveOrSubmit);
        buttonSubmit.addEventListener('click', handleClickCustomAddRemoveOrSubmit);
        ul.insertAdjacentElement('afterend', buttonSubmit);
        ul.insertAdjacentElement('afterend', buttonAdd);
        e.target.innerText = 'CANCEL';
    }
}

function handleClickCustomAddRemoveOrSubmit(e) {
    let indexNum = Number(e.target.index);
    if (e.target.value == 'addcustom'+(indexNum+1)) { // If Add To Mix Clicked
        let ul = document.getElementById('ul'+(indexNum+1));
        let li = document.createElement('li');
        if (!document.querySelector('[value="removecustom'+(indexNum+1)+'"]')) { // If there is no Remove From Mix button
            let buttonRemove = document.createElement('button');
            buttonRemove.type = 'button';
            buttonRemove.value = 'removecustom' + (indexNum+1);
            buttonRemove.index = ''+indexNum;
            buttonRemove.innerText = 'Remove From Mix';
            buttonRemove.classList.add('custombuttons');
            buttonRemove.addEventListener('click', handleClickCustomAddRemoveOrSubmit);
            ul.insertAdjacentElement('afterend', buttonRemove);
        }
        li.innerHTML = `
            <form>
                <input type="text" placeholder="Ingredient ..." name="customInputIngredient` + customFormSizes[indexNum] + `">
                <input type="text" placeholder="Amount ..." name="customInputAmount` + customFormSizes[indexNum] + `">
            </form>
        `;
        customFormSizes[indexNum]++;
        li.classList.add('input' + indexNum + 'li' + customFormSizes[indexNum]);
        ul.appendChild(li);
    } else if (e.target.value == 'removecustom'+(indexNum+1)) { // If Remove From Mix Clicked
        console.log('.' + indexNum + 'li' + customFormSizes[indexNum]);
        document.querySelector('.input' + indexNum + 'li' + customFormSizes[indexNum]).remove();
        customFormSizes[indexNum]--;
        if (customFormSizes[indexNum] == 1) {
            e.target.remove();
        }
    } else { // If Submit Mix Clicked
        //TODO:
        let ul = document.getElementById('ul'+(indexNum+1));
        let ingredientMix = [];
        for (let i = 0; i < ul.children.length; i++) {
            let ingredient = ul.children[i].children[0].children[0].value; // ul->li[i]->form->input (ingredient)
            let amount = ul.children[i].children[0].children[1].value; // ul->li[i]->form->input (amount)
            if (ingredient == '' || amount == '') { // if not all forms filled then do not save custom ingredient
                return;
            }
            ingredientMix[i] = [ingredient, amount];
        }
        referenceArray[indexNum].push(ingredientMix);

        store(shortListNames[indexNum],referenceArray[indexNum]); // Save the new ingredients list.

        let div = document.createElement('div');
        div.classList.add('radio');
        let id = shortListNames[indexNum] + referenceArray[indexNum].length;
        div.innerHTML = `<input type="radio" name="`+shortListNames[indexNum]+`" id="`+id+`" data-index="`+indexNum+`" value="`+(referenceArray[indexNum].length-1)+`">`;
        div.innerHTML += `<button type="button" class="delete-radio" data-ingredient="`+shortListNames[indexNum]+referenceArray[indexNum].length+`" data-index="`+indexNum+`" value="`+(referemceArray[indexNum].length-1)+`"></button>`;
        div.innerHTML += `<button type="button" class="edit-radio" data-ingredient="`+shortListNames[indexNum]+referenceArray[indexNum].length+`" data-index="`+indexNum+`" value="`+(referemceArray[indexNum].length-1)+`"></button>`;
        let label = document.createElement('label');
        label.htmlFor = id;
        label.classList.add('label');
        let inner = ingredientMix[0][1]+' '+ingredientMix[0][0];
        if (ingredientMix.length > 1) {
            for (let i = 1; i < ingredientMix.length; i++) {
                inner = inner.concat(' + '+ingredientMix[i][1]+' '+ingredientMix[i][0]);
            }
        }
        label.innerText = inner;

        let clear = document.createElement('div');
        clear.classList.add('clear');

        let customlanding = document.getElementById('customlanding'+(indexNum+1));
        customlanding.insertAdjacentElement('beforebegin', div);
        customlanding.insertAdjacentElement('beforebegin', label);
        customlanding.insertAdjacentElement('beforebegin', clear);

        // Close custom ingredient forms
        document.getElementById('ul'+(indexNum+1)).innerHTML = '';
        document.querySelector('[value="addcustom'+(indexNum+1)+'"]').remove();
        document.querySelector('[value="submitcustom'+(indexNum+1)+'"]').remove();
        let removeButton = document.querySelector('[value="removecustom'+(indexNum+1)+'"]');
        if (removeButton) {
            removeButton.remove();
        }
        customButtonClicked[indexNum] = 0;
        customFormSizes[indexNum] = 0;
        customlanding.innerText = 'CUSTOM MIX';

    }
}

function handleSubmitIngredients() {
    let radioButtons = document.querySelectorAll('input[type=radio]');
    let recipe = [];
    let checkcount = 0;
    for (const radioButton of radioButtons) {
        if(radioButton.checked) {
            let index = radioButton.getAttribute('data-index');
            recipe.push(referenceArray[index].at(radioButton.value));
            checkcount++;
        }
    }
    let recipename = document.getElementById('recipename').value;
    if (recipename == '' && checkcount < 8) { // Not all ingredients have been selected, and a recipe name hasn't been filled.
        window.alert("You must select one of each ingredient and give the recipe a name!");
        return;
    } else if (checkcount < 8) { // Not all ingredients have been selected
        window.alert("You must select one of each ingredient!");
        return;
    } else if (recipename == '') { // A recipe name has not been filled
        window.alert("You must give the recipe a name!");
        return;
    }

    finishedRecipes.set(recipename, recipe);
    store('recipes',Array.from(finishedRecipes.entries()));
    store('targetrecipe', recipename);
    document.location.href = "finish.html";
}

// Helper Functions
function store(key, value) {
    //local storage
    localStorage.setItem(key,JSON.stringify(value));
}
function retrieve(key){
    let value = JSON.parse(localStorage.getItem(key));
    return value;
}
//on start
if (document.URL.includes('index.html') || document.URL == 'https://julian-gallegos.github.io/vanilla-js-cake-maker/') {
    (function(){
        let test = localStorage.getItem('recipes');
        if (test) {
            let h2 = document.createElement('h2');
            let body = document.querySelector('body');
            h2.innerText = 'Welcome back!';
            h2.className = 'index';
            body.appendChild(h2);
        } else {
            let h2 = document.createElement('h2');
            let body = document.querySelector('body');
            h2.innerText = 'Make your first cake!';
            h2.className = 'index';
            body.appendChild(h2);
        }
    })();
} else if (document.URL.includes('ingredients.html')) {
    for (let i = 0; i < referenceArray.length; i++) {
        let ingredientList = retrieve(shortListNames[i])
        if (ingredientList) {
            referenceArray[i] = ingredientList;
            for (let j = 2; j < referenceArray[i].length; j++) {
                let ingredientMix = referenceArray[i].at(j);
                let div = document.createElement('div');
                div.classList.add('radio');
                let id = shortListNames[i] + j;
                div.innerHTML = `
                    <input type="radio" name="`+shortListNames[i]+`" id="`+id+`" data-index="`+i+`" value="`+j+`">
                `;
                
                let label = document.createElement('label');
                label.htmlFor = id;
                label.classList.add('label');
                let inner = ingredientMix[0][1]+' '+ingredientMix[0][0];
                if (ingredientMix.length > 1) {
                    for (let k = 1; k < ingredientMix.length; k++) {
                        inner = inner.concat(' + '+ingredientMix[k][1]+' '+ingredientMix[k][0]);
                    }
                }
                label.innerText = inner;

                let clear = document.createElement('div');
                clear.classList.add('clear');

                let customlanding = document.getElementById('customlanding'+(i+1));
                customlanding.insertAdjacentElement('beforebegin', div);
                customlanding.insertAdjacentElement('beforebegin', label);
                customlanding.insertAdjacentElement('beforebegin', clear);
            }
        }
    }
} else if (document.URL.includes('finish.html')) {
    (function(){
        let recipes = new Map(retrieve('recipes'));
        console.log(recipes);
        let target = retrieve('targetrecipe');
        let recipe = recipes.get(target);
        for (let i = 0; i < recipe.length-1; i++) { // length-1 because we don't need the last index (recipe name)
            let text = recipe[i][0][1]+' '+recipe[i][0][0];
            for (let j = 1; j < recipe[i].length; j++) {
                text += ' + '+recipe[i][j][1]+' '+recipe[i][j][0];
            }
            let li = document.createElement('li');
            li.innerText = 'o	'+text;
            document.getElementById('mix'+i).insertAdjacentElement('afterend',li);
        }
    })();
}