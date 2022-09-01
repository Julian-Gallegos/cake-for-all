// Local Variables
dryIngrediants = [
    [['Wheat Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']],
    [['Rice Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']]
];

eggIngrediants = [
    [['Whipped Eggs', '2 eggs']],
    [['Flax Seed', '1 cup'], ['Water','1 cup']]
];

/*frostingIngrediants = [
    [['Wheat Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']],
    [['Rice Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']]
];*/

sugarIngrediants = [
    [['White Sugar', '1 cup']],
    [['Honey', '1 cup']]
];

butterIngrediants = [
    [['Unsalted Butter', '1/2 cup']],
    [['Vegetable Oil', '1/2 cup']]
];

milkIngrediants = [
    [['Cow Milk', '1/2 cup']],
    [['Oat Milk', '1/2 cup']]
];

flavorIngrediants = [
    [['Vanilla Extract', '2 teaspoons']],
    [['Almond Extract', '2 teaspoons']]
];

finishedRecipes = [
    [
        [['Wheat Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']],
        [['Whipped Eggs', '2 eggs']],
        [['White Sugar', '1 cup']],
        [['Unsalted Butter', '1/2 cup']],
        [['Cow Milk', '1/2 cup']],
        [['Vanilla Extract', '2 teaspoons']]
    ],
    [
        [['Rice Flour', '1 and 1/2 cups'], ['baking powder','1 and 3/4 teaspoons']],
        [['Flax Seed', '1 cup'], ['Water','1 cup']],
        [['Honey', '1 cup']],
        [['Vegetable Oil', '1/2 cup']],
        [['Oat Milk', '1/2 cup']],
        [['Almond Extract', '2 teaspoons']]
    ]
]
// Selectors

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
(function(){
    let test = localStorage.getItem('cakes');
    if (test) {
        if (document.URL.includes("index.html")) {
            let h2 = document.createElement('h2');
            let body = document.querySelector('body');
            h2.innerHTML = 'Welcome back!';
            h2.className = 'index';
            body.appendChild(h2);
        }
    } else if (document.URL.includes("index.html")) {
        let h2 = document.createElement('h2');
        let body = document.querySelector('body');
        h2.innerHTML = 'Make your first cake!';
        h2.className = 'index';
        body.appendChild(h2);
    }
})();