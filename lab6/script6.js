document.querySelectorAll('.btns-menu').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked');
    });
});

document.querySelectorAll('.html-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked1');
    });
});

function topic() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/tema6.jpg" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>завдань лабораторних 6</b><br><br>
            <a href="https://morinaanna.github.io/lab6/">
                https://morinaanna.github.io/lab6/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторних 6</b> <br><br>
            <a href="https://github.com/MorinaAnna/lab6">
               https://github.com/MorinaAnna/lab6
            </a><br><br>
        </p>
        
    `;
}

function task2() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 2</h3><br>
        <img src="./images/task2_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task2_prog.jpg" alt="">
        <img src="./images/task2_prog1.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task2_results.jpg" alt="">
    `;
}

function task4() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 4</h3><br>
        <img src="./images/task4_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task4_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task4_results.jpg" alt="">
         <img src="./images/task4_results1.jpg" alt="">
    `;
}

function task6() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 6</h3><br>
        <img src="./images/task6_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task6_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task6_results.jpg" alt="">
    `;
}

function task8() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="./images/task8_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task8_prog.jpg" alt="">
         <img src="./images/task8_prog1.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task8_results.jpg" alt="">
          <img src="./images/task8_results1.jpg" alt="">
    `;
}

function task9() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="./images/task9_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task9_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task9_results.jpg" alt="">
    `;
}

function task10() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 10</h3><br>
        <img src="./images/task10_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task10_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task10_results.jpg" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з об'єктами та методами об'єктів JS, <br>
            познайомилась з Callback-функціями, стрілочними функціями та стрілочними функціями як колбеками. <br>
            Зокрема, реалізувала 6 завдань для відпрацювання навичок.
        </p>
    `;
}
