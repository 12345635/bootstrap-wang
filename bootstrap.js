const inp = document.querySelector('#inp');
const div = document.getElementsByTagName('div')[1];
inp.oninput = function(){
    div.innerHTML = inp.value;
}