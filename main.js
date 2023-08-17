const input = document.querySelector('.search')
const searchButton = document.getElementById('button')


searchButton.addEventListener('click', e => {
    fetchData(input.value)
})

const fetchData = (value) => {
    fetch(`https://api.edamam.com/search?q=${value}&app_id=d7a37ec7&app_key=de6c243dcbaf62ac34d8040f4c4f7de1&from=0&to=50`)
    .then(response => response.json())
    .then(data => addRecipes(data))
}

function addRecipes(data) {
    let recipeHTML = ''
    for (const i of data.hits) {
        recipeHTML += `
        <div class="hero-card">
            <img src="${i.recipe.image}" alt="">
            <div class="bottom-section">
                <div class="name">${i.recipe.label}</div>
                <div class="time-calories">
                    <div class="time">${i.recipe.totalTime} mins</div>
                    <div class="calories">${Math.round(i.recipe.calories)} calories</div>
                </div>
                <div class="ingredients">${i.recipe.ingredientLines}</div>
            </div>
            <div class="directions">
                <a href="${i.recipe.url}">DIRECTIONS</a>
            </div>
        </div>`
    }
    document.querySelector('.hero-container').innerHTML = recipeHTML
}