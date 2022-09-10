/* Created by Julian Javier Gallegos 
*  Date of last text entry: 9/2/2022
*  Stay well everyone
*
*
*   TODO List
*   TODO: Generate ingredient list on finish.html using finishedRecipes (which stores user ingredient options)
*         - use localStorage get method with key='recipes' to update list and key='targetrecipe' to get target index
*           of recipe in finishedRecipes
*   TODO: Use IngredientList object constructor and replace referencelist with it.
*         Also consider adding functions like store and retrieve to it
*/
// Object Prototypes
const IngredientListPrototype = {
    0: [ //flourIngredients
        [new Ingredient('All-Purpose White Flour', '2 ⅔ Cup'), new Ingredient('Baking Powder','1 T.'), new Ingredient('Sea Salt', '½ Tsp')],
        [new Ingredient('Rice Flour', '1 ⅓ Cup'), new Ingredient('Tapioca Starch','1 Cup'), new Ingredient('Baking Powder', '3 T.'), new Ingredient('Sea Salt', '½ Tsp')]
    ],
    1: [ //sweetenerIngredients
        [new Ingredient('Evaporated Cane Sugar', '1 Cup')],
        [new Ingredient('Allulose ', '1 ⅓ cup')]
    ],
    2: [ //flavoringsIngredients
            [new Ingredient('Vanilla Extract', '1 T.')],
            [new Ingredient('Cardamom', '½ Tsp')]
    ],
    3: [ //eggIngredients
            [new Ingredient('Chicken Eggs', '3')],
            [new Ingredient('Applesauce', '¾')]
    ],
    4: [ //dairyIngredients
            [new Ingredient('Whole Cowmilk', '¾ Cup')],
            [new Ingredient('Hazelnut Milk', '¾ Cup'), new Ingredient('Apple Cider Vinegar', '2 T.')]
    ],
    5: [ //shorteningIngredients
            [new Ingredient('Softened Butter', '1 Cup')],
            [new Ingredient('Softened Vegan Buttery Spread (Pressed, No Trans Fatty Acid)', '1 Cup')]
    ],
    6: [ //whippedIngredients
            [new Ingredient('Whipping Cream (Heavy Cream) Chilled', '2 Cups'), new Ingredient('Evaporated Cane Sugar', '2 T.'), new Ingredient('Vanilla Extract (Optional)', '1 Tsp')],
            [new Ingredient('Coconut Cream (Chilled Overnight)', '2-3 Cans'), new Ingredient('Confectioner\'s Sugar (Optional)', '2 T.'), new Ingredient('Vanilla Extract (Optional)', '1 Tsp')]
    ],
    7: [ //decorationIngredients
            [new Ingredient('Strawberries Sliced', '½ Cup')],
            [new Ingredient('Raspberries', '½ Cup')]
    ],

    addIngredient(listIndex, ingredientMixIndex) {

    },
    editIngredient(listIndex, ingredientMixIndex, ingredientIndex) {

    },
    removeIngredient(listIndex, ingredientMixIndex, ingredientIndex) {

    },
    removeIngredientMix(listIndex, ingredientMixIndex) {

    },
    
    save() {
        localStorage.setItem('ingredients',JSON.stringify(this));
    },
    load() {
        return JSON.parse(localStorage.getItem('ingredients'));
    }
}

// Constructors
function Ingredient(name, amount) {
    this.name = name;
    this.amount = amount;

    this.setName = function(newName) {
        this.name = newName;
    }
    this.setAmount = function(newAmount) {
        this.amount = newAmount;
    }
}

function IngredientList() {

    

    this.addIngredientMix(ingredientListIndex, ingredientMix) {

    }



    
}

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

const customButtonClicked = [0,0,0,0,0,0,0,0]; // 0 = custom forms closed, 1 = open, for each custom mix form, probably redundant
const editButtonClicked = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]; // Same as custom button, but also has to track multipe radio indices at each ingredient listing
const customFormSizes = [[[],0],[[],0],[[],0],[[],0],[[],0],[[],0],[[],0],[[],0]]; // number of form rows opened by Add to Mix button, for each [edit mixlist,custommix]
const shortListNames = ['flour','sweetener','flavor','egg','dairy','shortening','whippped','decoration'];
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
        customFormSizes[indexNum][1] = 0;
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
        customFormSizes[indexNum][1] = 1;
        li.classList.add('input' + indexNum + 'li' + customFormSizes[indexNum][1]);
        ul.appendChild(li);

        let buttonAdd = document.createElement('button');
        let buttonSubmit = document.createElement('button');
        buttonAdd.type = 'button';
        buttonSubmit.type = 'submit';
        buttonAdd.value = 'addcustom' + (indexNum+1);
        buttonSubmit.value = 'submitcustom' + (indexNum+1);
        buttonAdd.index = indexNum;
        buttonSubmit.index = indexNum;
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
        addIngredientMix(ul,indexNum, null);
    } else if (e.target.value == 'removecustom'+(indexNum+1)) { // If Remove From Mix Clicked
        document.querySelector('.input' + indexNum + 'li' + customFormSizes[indexNum][1]).remove();
        customFormSizes[indexNum]--;
        if (customFormSizes[indexNum] == 1) {
            e.target.remove();
        }
    } else { // If Submit Mix Clicked
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
        
        let ingredientArray = retrieve(shortListNames[indexNum]);
        if (ingredientArray) { //If custom ingredients have been added before, and stored with localStorage
            ingredientArray.push(ingredientMix);
            store(shortListNames[indexNum],ingredientArray); // Save the new ingredients list.
        } else {
            referenceArray[indexNum].push(ingredientMix); // Grab base ingredient list and push new ingredient
            store(shortListNames[indexNum],referenceArray[indexNum]);
        }
        
        let div = document.createElement('div');
        div.classList.add('radio');
        let id = shortListNames[indexNum] + referenceArray[indexNum].length
        div.innerHTML = `<input type="radio" name="`+shortListNames[indexNum]+`" id="`+id+`" data-index="`+indexNum+`" value="`+(referenceArray[indexNum].length-1)+`">`;
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
        let deleteRadio = createElementFromHTML(`<button type="button" class="delete-radio" data-index="`+indexNum+`" value="`+(referenceArray[indexNum].length-1)+`">DELETE</button>`);
        let editRadio = createElementFromHTML(`<button type="button" class="edit-radio" id="edit`+indexNum+`/`+(referenceArray[indexNum].length-1)+`" data-index="`+indexNum+`" value="`+(referenceArray[indexNum].length-1)+`">EDIT</button>`);
        editButtonClicked[indexNum].push(0); //set edit button status (not clicked)
        deleteRadio.addEventListener('click', handleDeleteRadio);
        editRadio.addEventListener('click', handleEditRadio);

        let clear = createElementFromHTML('<div class="clear" data-selector-value="clear'+indexNum+'/'+(referenceArray[indexNum].length-1)+'"></div>');

        let customlanding = document.getElementById('customlanding'+(indexNum+1));
        customlanding.insertAdjacentElement('beforebegin', div);
        customlanding.insertAdjacentElement('beforebegin', label);
        customlanding.insertAdjacentElement('beforebegin', editRadio);
        customlanding.insertAdjacentElement('beforebegin', deleteRadio);
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
        customFormSizes[indexNum][1] = 0;
        customlanding.innerText = 'CUSTOM MIX';

    }
}

function handleClickEditAddRemoveOrSubmit(e) {
    let indexNum = Number(e.target.index);
    let ingredientIndex = Number(e.target.ingredient);
    if (e.target.id == 'add'+indexNum+'/'+ingredientIndex) { // If Add To Mix Clicked
        let ul = document.getElementById('ul'+indexNum+'/'+ingredientIndex);
        addIngredientMix(ul,indexNum, ingredientIndex);
    } else if (e.target.id == 'removecustom'+(indexNum+1)+'/'+ingredientIndex) { // If Remove From Mix Clicked
        document.getElementById('input'+indexNum + '/' + ingredientIndex + 'li' + customFormSizes[indexNum][0][ingredientIndex]).remove();
        customFormSizes[indexNum][0][ingredientIndex]--;
        if (customFormSizes[indexNum][0][ingredientIndex] <= 1) {
            e.target.remove();
        }
    } else { // If Submit Mix Clicked
        let ul = document.getElementById('ul'+indexNum+'/'+ingredientIndex);
        let ingredientMix = [];
        let i;
        if (ul.children.length == 3) {
            i = 2;
        } else {
            i = 3; 
        }
        for (i; i < ul.children.length; i++) {
            let ingredient = ul.children[i].children[0].children[0].value; // ul->li[i]->form->input (ingredient)  i+3 as the first three elements are buttons
            let amount = ul.children[i].children[0].children[1].value; // ul->li[i]->form->input (amount)
            if (ingredient == '' || amount == '') { // if not all forms filled then do not save custom ingredient
                return;
            }
            ingredientMix.push([ingredient, amount]);
        }
        
        let ingredientArray = retrieve(shortListNames[indexNum]);
        ingredientArray.splice(ingredientIndex,1,ingredientMix);
        store(shortListNames[indexNum],ingredientArray); // Save the new ingredients list
        
        let label = document.querySelector('label.label[for="'+shortListNames[indexNum]+(ingredientIndex+1)+'"]');
        let inner = ingredientMix[0][1]+' '+ingredientMix[0][0];
        if (ingredientMix.length > 1) {
            for (let i = 1; i < ingredientMix.length; i++) {
                inner = inner.concat(' + '+ingredientMix[i][1]+' '+ingredientMix[i][0]);
            }
        }
        label.innerText = inner;

        // Close edit ingredient forms
        ul.remove();
        
        editButtonClicked[indexNum][ingredientIndex] = 0;
        customFormSizes[indexNum][0][ingredientIndex] = 0;
        document.getElementById('edit'+indexNum+'/'+ingredientIndex).innerText = 'EDIT';

    }
}

function handleDeleteRadio(e) { //TODO:
    let index = Number(e.target.getAttribute('data-index'));
    let ingredientIndex = Number(e.target.getAttribute('value'));
    let ingredientArray = retrieve(shortListNames[index]);
    ingredientArray.splice(ingredientIndex,1);
    store(shortListNames[index], ingredientArray);
    let radioDiv = document.querySelector('input[data-index="'+index+'"][value="'+ingredientIndex+'"]').parentNode.remove();
    document.querySelector('label.label[for="'+shortListNames[index]+(ingredientIndex+1)+'"]').remove();
    document.querySelector('button.delete-radio[data-index="'+index+'"][value="'+ingredientIndex+'"]').remove();
    document.querySelector('button.edit-radio[data-index="'+index+'"][value="'+ingredientIndex+'"]').remove();
    document.querySelector('div.clear[data-selector-value="clear'+index+'/'+ingredientIndex+'"]').remove();
}

function handleEditRadio(e) { //TODO:
    let index = Number(e.target.getAttribute('data-index'));
    let ingredientIndex = Number(e.target.getAttribute('value'));
    //let ingredientArray = retrieve(shortListNames[index]);

    if (editButtonClicked[index][ingredientIndex]) { //If The edit form is already open
        // Close edit ingredient forms
        let ul = document.getElementById('ul'+index+'/'+ingredientIndex);
        ul.remove();
        
        editButtonClicked[index][ingredientIndex] = 0;
        customFormSizes[index][0][ingredientIndex] = 0;
        e.target.innerText = 'EDIT';
    } else { // if the edit form has not been opened
        let div = document.querySelector('div.clear[data-selector-value="clear'+index+'/'+ingredientIndex+'"]');
        let ul = document.createElement('ul');
        ul.id = 'ul'+index+'/'+ingredientIndex;
        ul.classList.add('customlist');

        addIngredientMix(ul,index,ingredientIndex);
        console.log(ul);
        let buttonAdd = document.createElement('button');
        let buttonSubmit = document.createElement('button');
        buttonAdd.type = 'button';
        buttonSubmit.type = 'submit';
        buttonAdd.value = 'addcustom' + (index+1);
        buttonSubmit.value = 'submitcustom' + (index+1);
        buttonAdd.index = index;
        buttonSubmit.index = index;
        buttonAdd.ingredient = ingredientIndex;
        buttonSubmit.ingredient = ingredientIndex;
        buttonAdd.id = 'add' + index + '/' + ingredientIndex;
        buttonSubmit.id = 'submit' + index + '/' + ingredientIndex;
        buttonAdd.innerText = 'Add To Mix';
        buttonSubmit.innerText = 'Save Edit';
        buttonAdd.classList.add('custombuttons');
        buttonSubmit.classList.add('custombuttons');
        buttonAdd.addEventListener('click', handleClickEditAddRemoveOrSubmit);
        buttonSubmit.addEventListener('click', handleClickEditAddRemoveOrSubmit);
        ul.insertAdjacentElement('afterbegin', buttonSubmit);
        ul.insertAdjacentElement('afterbegin', buttonAdd);
        e.target.innerText = 'CANCEL';
        div.insertAdjacentElement('afterbegin',ul);
        editButtonClicked[index][ingredientIndex] = 1;
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
    if (recipename == 'Default' || recipename == 'Alternative') {
        window.alert("This recipe name is reserved. Write a different one!")
        return;
    }
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
function retrieve(key) {
    let value = JSON.parse(localStorage.getItem(key));
    return value;
}
function addIngredientMix(ul, indexNum, ingredientNum) {
    if (!ingredientNum) { // if ingredientNum null (meaning function called for new custom ingredient mix)
        if (!document.getElementById('removecustom'+(indexNum+1))) { // If there is no Remove From Mix button
            let buttonRemove = document.createElement('button');
            buttonRemove.type = 'button';
            buttonRemove.id = 'removecustom' + (indexNum+1);
            buttonRemove.index = indexNum;
            buttonRemove.innerText = 'Remove From Mix';
            buttonRemove.classList.add('custombuttons');
            buttonRemove.addEventListener('click', handleClickCustomAddRemoveOrSubmit);
            ul.insertAdjacentElement('afterend', buttonRemove);
        }
        let li = document.createElement('li');
        li.innerHTML = `
            <form>
                <input type="text" placeholder="Ingredient ..." name="customInputIngredient` + customFormSizes[indexNum][1] + `">
                <input type="text" placeholder="Amount ..." name="customInputAmount` + customFormSizes[indexNum][1] + `">
            </form>
        `;
        customFormSizes[indexNum][1]++;
        li.classList.add('input' + indexNum + 'li' + customFormSizes[indexNum][1]);
        ul.appendChild(li);
    } else { // ingredientNum not null (and therefore called during edit of custom ingredient mix)
        if(ul.children.length > 0) {
            let li = document.createElement('li');
            let ingredientName = referenceArray[indexNum].at(ingredientNum).at(-1)[0];
            let amount = referenceArray[indexNum].at(ingredientNum).at(-1)[1];
            li.innerHTML = `
                <form>
                    <input type="text" placeholder="Ingredient ..." name="customInputIngredient` + referenceArray[indexNum].at(ingredientNum).at(-1) + `">
                    <input type="text" placeholder="Amount ..." name="customInputAmount` + referenceArray[indexNum].at(ingredientNum).at(-1) + `">
                </form>
            `;
            if (customFormSizes[indexNum][0][ingredientNum]) {
                customFormSizes[indexNum][0][ingredientNum]++;
            } else {
                customFormSizes[indexNum][0][ingredientNum] = 1;
            }
            li.id = ('input' + indexNum + '/'+ingredientNum+'li' + customFormSizes[indexNum][0][ingredientNum]);
            li.classList.add('editlist');
            ul.appendChild(li);
            if (!document.getElementById('removecustom' + (indexNum+1) + '/' + ingredientNum)) { // If there is no Remove From Mix button
                let buttonRemove = document.createElement('button');
                buttonRemove.type = 'button';
                buttonRemove.id = 'removecustom' + (indexNum+1) + '/' + ingredientNum;
                buttonRemove.index = indexNum;
                buttonRemove.ingredient = ingredientNum;
                buttonRemove.innerText = 'Remove From Mix';
                buttonRemove.classList.add('custombuttons');
                buttonRemove.addEventListener('click', handleClickEditAddRemoveOrSubmit);
                ul.insertAdjacentElement('afterbegin', buttonRemove);
            }
        } else {
            for (let i = 0; i < referenceArray[indexNum].at(ingredientNum).length; i++) {
                let li = document.createElement('li');
                let ingredientName = referenceArray[indexNum].at(ingredientNum)[i][0];
                let amount = referenceArray[indexNum].at(ingredientNum)[i][1];
                li.innerHTML = `
                    <form>
                        <input type="text" placeholder="Ingredient ..." value="`+ingredientName+`" name="customInputIngredient` + i + `">
                        <input type="text" placeholder="Amount ..." value="`+amount+`" name="customInputAmount` + i + `">
                    </form>
                `;
                if (customFormSizes[indexNum][0][ingredientNum]) {
                    customFormSizes[indexNum][0][ingredientNum]++;
                } else {
                    customFormSizes[indexNum][0][ingredientNum] = 1;
                }
                li.id = ('input' + indexNum + '/'+ingredientNum+'li' + customFormSizes[indexNum][0][ingredientNum]);
                li.classList.add('editlist');
                ul.appendChild(li);
            }
            if (referenceArray[indexNum].at(ingredientNum).length > 1) { // If there is no Remove From Mix button
                let buttonRemove = document.createElement('button');
                buttonRemove.type = 'button';
                buttonRemove.id = 'removecustom' + (indexNum+1) + '/' + ingredientNum;
                buttonRemove.index = indexNum;
                buttonRemove.ingredient = ingredientNum;
                buttonRemove.innerText = 'Remove From Mix';
                buttonRemove.classList.add('custombuttons');
                buttonRemove.addEventListener('click', handleClickEditAddRemoveOrSubmit);
                ul.insertAdjacentElement('afterbegin', buttonRemove);
            }
        }
    }
}
function createElementFromHTML(HTML) {
    let div = document.createElement('div');
    div.innerHTML = HTML;
    return [...div.childNodes].find(e => e.nodeType !== Node.TEXT_NODE);
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
                let id = shortListNames[i] + (j+1);
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
                
                let deleteRadio = createElementFromHTML(`<button type="button" class="delete-radio" data-index="`+i+`" value="`+j+`">DELETE</button>`);
                let editRadio = createElementFromHTML(`<button type="button" class="edit-radio" id="edit`+i+`/`+j+`" data-index="`+i+`" value="`+j+`">EDIT</button>`);
                editButtonClicked[i][j] = 0; //set edit button status (not clicked)
                deleteRadio.addEventListener('click', handleDeleteRadio);
                editRadio.addEventListener('click', handleEditRadio);

                let clear = createElementFromHTML('<div class="clear" data-selector-value="clear'+i+'/'+(j)+'"></div>');

                let customlanding = document.getElementById('customlanding'+(i+1));
                customlanding.insertAdjacentElement('beforebegin', div);
                customlanding.insertAdjacentElement('beforebegin', label);
                customlanding.insertAdjacentElement('beforebegin', editRadio);
                customlanding.insertAdjacentElement('beforebegin', deleteRadio);
                customlanding.insertAdjacentElement('beforebegin', clear);
            }
        }
    }
} else if (document.URL.includes('finish.html')) {
    (function(){
        let localRecipes = retrieve('recipes');
        let recipes;
        if (localRecipes) {
            recipes = new Map(localRecipes);
        } else {
            recipes = finishedRecipes;
        }
        let target = retrieve('targetrecipe'); // no check because there should ALWAYS be a target
        let recipe = recipes.get(target);
        for (let i = 0; i < recipe.length; i++) { // length-1 because we don't need the last index (recipe name)
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