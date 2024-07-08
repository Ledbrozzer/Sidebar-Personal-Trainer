var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('active')
    )
    this.classList.add('active')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
);

var btnExp = document.querySelector('#btn-expnd')
var lateralSide = document.querySelector('#lat-side')

btnExp.addEventListener('click', function(){
    lateralSide.classList.toggle('expand')
})