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
        <img src="./images/tema5.jpg" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>завдань лабораторної 5</b><br><br>
            <a href="https://morinaanna.github.io/lab5/">
                https://morinaanna.github.io/lab5/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторної 5</b> <br><br>
            <a href="https://github.com/MorinaAnna/lab5">
                https://github.com/MorinaAnna/lab5
            </a><br><br>
        </p
       
    `;
}

function task1() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 1</h3><br>
        <img src="./images/task1_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task1_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task1_results.jpg" alt="">
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
        <h3>Результати виконання</h3><br>
        <img src="./images/task2_results.jpg" alt="">
        <img src="./images/task2_results1.jpg" alt="">
    `;
}

function task3() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 3</h3><br>
        <img src="./images/task3_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task3_prog.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task3_results.jpg" alt="">
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
    `;
}

function task5() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 5</h3><br>
        <img src="./images/task5_task.jpg" alt="">
        <h3>Програмний код</h3><br>
        <img src="./images/task5_prog1.jpg" alt=""><br>
        <img src="./images/task5_prog2.jpg" alt="">
        <h3>Результати виконання</h3><br>
        <img src="./images/task5_results1.jpg" alt=""><br>
        <img src="./images/task5_results2.jpg" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з конструкціями мови JS, <br>
            масивами та функціями в js-сценаріях. <br>
            Зокрема, реалізувала 5 завдань для відпрацювання навичок.
        </p>
    `;
}
