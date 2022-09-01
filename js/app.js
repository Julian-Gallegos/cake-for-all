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
        // cakeList = retrieve('cakes');
        // for (const element of cakeList) {
        //     let ul = document.querySelector('ul');
        //     let li = document.createElement('li');
        //     li.innerHTML = element[0];
        //     li.classList.add('todo-list-item');
        //     li.style.textDecoration = element[1];
        //     ul.appendChild(li);
        // }
    } else if (document.URL.includes("index.html")) {
        let h2 = document.createElement('h2');
        let body = document.querySelector('body');
        h2.innerHTML = 'Make your first cake!';
        h2.className = 'index';
        body.appendChild(h2);
    }
})();