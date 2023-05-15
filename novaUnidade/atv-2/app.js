const btn = document.getElementById('button')

btn.addEventListener('click',()=>{
    let input = document.getElementById('input' )
    let cem = document.getElementsByClassName('outcem')
    let cinquenta = document.getElementsByClassName('outcinquenta')
    let dez = document.getElementsByClassName('outdez')

    if(input.value === null){
       alert("Digite algo") 
    }
})