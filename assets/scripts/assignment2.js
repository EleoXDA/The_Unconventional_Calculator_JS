function funcone() {
    alert(heyo);
};

function functwo(name) {
    alert(name);
};

funcone();
functwo(Mark);

const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', funcone);

function functhree(name,name,name){
  return name+name+name;
}

alert(functhree('Mark','Mark','Mark'));