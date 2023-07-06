const input = document.querySelector('input')
const btn = document.querySelector('.btn-primary')
const h1 = document.querySelector('h1')
const ul = document.querySelector('ul')



function view () {
    let task = JSON.parse(localStorage.getItem('test')) || []
    let allList = ''
    task.map(el =>{
        allList += `<li class="list-group-item">${el.title}</li>`
    })
    ul.innerHTML = allList
}

btn.addEventListener('click' , (e) =>{
    let task = JSON.parse(localStorage.getItem('test')) || []
    let newList = {
        title : input.value
    }
    task = [...task , newList]
    localStorage.setItem('test' , JSON.stringify(task))
    view()

})


view()



btn.addEventListener('click' , () =>{
    getList()
})
input.addEventListener('keydown' , (e) =>{
    if (e.key === 'Enter') getList()
})

function getList() {
    if (input.value.length !== 0){
        ul.innerHTML += `<li class = "list-group-item">${input.value}</li>`
    }
    input.value = ""
}
































