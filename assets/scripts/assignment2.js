function funcone() {
    alert(heyo);
};

function functwo(name) {
    alert(name);
};

funcone();
functwo('Mark');

const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', funcone);

function functhree(name1,name2,name3){
  return name1+name2+name3;
  // return `${name1} ${name2} ${name3}`;
}

alert(functhree('Mark','Marc','Marque'));