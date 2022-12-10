const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(input.value)
})