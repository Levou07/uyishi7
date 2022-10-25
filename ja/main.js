var frm = document.querySelector('.frm')

var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
var inp3 = document.querySelector('.inp3')
var inp4 = document.querySelector('.inp4')

var show = document.querySelector('.show')

frm.addEventListener('.click', (e)=>{
    e.preventDefault()
})


inp1.addEventListener('keyup', (e)=>{
    if(isNaN(e.target.value) != "" && e.target.value >= 4){
        inp1.classList.add('right')
        inp1.classList.remove('error')
    }
    else{
        inp1.classList.remove('right')
        inp1.classList.add('error')
    }
})

inp2.addEventListener('keyup', (e)=>{
    if(e.target.value.length >= 5){
        inp2.classList.add('right')
        inp2.classList.remove('error')
    }
    else{
        inp2.classList.remove('right')
        inp2.classList.add('error')
    }
})

inp3.addEventListener('keyup', (e)=>{
    if(e.target.value.length >= 3 && e.target.value.length <= 15){
        inp3.classList.add('right')
        inp3.classList.remove('error')
    }
    else{
        inp3.classList.remove('right')
        inp3.classList.add('error')
    }
})

inp4.addEventListener('keyup', (e)=>{
    if(e.target.value == inp3.value){
        inp4.classList.add('right')
        inp4.classList.remove('error')
    }
    else{
        inp4.classList.remove('right')
        inp4.classList.add('error')
    }
})

var show = ()=>{
    var pass = getElementById('.inp3')
    if(document.getElementById('.show')){
        pass.setAttribute('type','text');
    }
    else{
        pass.setAttribute('type','password')
    }
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    var wrp = document.querySelector('.wrapper')
    wrp.classList.toggle('dark1');
    var inpw = document.querySelector('.input')
    inpw.classList.toggle('dark2')
    var inpw = document.querySelector('.inp2')
    inpw.classList.toggle('dark2')
    var inpw = document.querySelector('.inp3')
    inpw.classList.toggle('dark2')
    var inpw = document.querySelector('.inp4')
    inpw.classList.toggle('dark2')
    var btn1 = document.querySelector('.btn')
    btn1.classList.toggle('dark3')
    var h2 = document.querySelector('h2')
    h2.classList.toggle('dark4')
    var span = document.querySelector('span')
    span.classList.toggle('dark5')
});