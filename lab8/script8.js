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
        <img src="./images/tema8.jpg" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>завдань лабораторної 8</b><br><br>
            <a href="https://morinaanna.github.io/lab8/">
                https://morinaanna.github.io/lab8/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторної 8</b> <br><br>
            <a href="https://github.com/MorinaAnna/lab8">
              https://github.com/MorinaAnna/lab8
            </a><br><br>
        </p>
     
    `;
}

function task1() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h2>Завдання 1</h2>

        <h3>Макет</h3><br>
        <img src="./images/task1_task.jpg" alt="">

        <h3>Програмний код</h3>
        <h4>HTML</h4>
        <img src="./images/task1_html.jpg" alt="">
        <h4>СSS</h4>
        <img src="./images/task1_css1.jpg" alt="">
        <img src="./images/task1_css2.jpg" alt="">
         <img src="./images/task1_css3.jpg" alt="">
        <h4>JavaScript</h4>
        <img src="./images/task1_js1.jpg" alt="">
        <img src="./images/task1_js2.jpg" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task1_results.jpg" alt="">
    `;
}

function task2() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h2>Завдання 2</h2>
        <img src="./images/task2_results1.jpg" alt="">

        <h3>Програмний код</h3>
        <h4>HTML</h4>
        <img src="./images/task2_html.jpg" alt="">
        <h4>СSS</h4>
        <img src="./images/task2_css1.jpg" alt="">
        <img src="./images/task2_css2.jpg" alt="">
        <h4>JavaScript</h4>
        <img src="./images/task2_js.jpg" alt="">

        <h3>Результати виконання</h3><br>
        <img src="./images/task2_results2.jpg" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи зі створення модальних вікон, <br>
            повторила процес створення макету, зокрема створення макету галереї довільних зображень. <br>
            Також закріпила навички роботи з делегуванням подій, виконавши два завдання.
        </p>
    `;
}
