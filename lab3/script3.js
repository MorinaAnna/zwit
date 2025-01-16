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
        <img src="./images/tema3.jpg" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>веб-застосунку</b><br><br>
            <a href="https://morinaanna.github.io/lab4/">
          https://morinaanna.github.io/lab4/
                
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій веб-застосунку</b> <br><br>
            <a href="https://github.com/MorinaAnna/lab4">
               https://github.com/MorinaAnna/lab4
            </a><br><br>
        </p>
        <p>Посилання на живу сторінку <b>завдань 2-3</b> <br><br>
            <a href="https://morinaanna.github.io/lab3/">
              https://morinaanna.github.io/lab3/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань 2-3</b> <br><br>
            <a href="https://github.com/MorinaAnna/lab3">
              https://github.com/MorinaAnna/lab3
            </a><br><br>
        </p>
       
    `;
}

function task_1() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/дескверсія.jpg" alt="" width="700px"><br><br>
        <img src="./images/page_code_1.jpg" alt=""><br><br>
        <img src="./images/page_code_2.jpg" alt=""><br><br>
        <img src="./images/page_code_3.jpg" alt=""><br><br>

     
        <img src="./images/page_code_4.jpg" alt=""><br><br>
        <img src="./images/page_code_5.jpg" alt=""><br><br>


    `;
}

function task_2() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/task2.png" alt="" >
        <p>Посилання на живу сторінку <b>завдань 2-3</b> <br><br>
            <a href=" https://morinaanna.github.io/lr3/">
                https://morinaanna.github.io/lr3/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань 2-3</b> <br><br>
            <a href="https://github.com/MorinaAnna/lr3" target="_blank">
                https://github.com/MorinaAnna/lr3
            </a><br><br>
        </p>
    `;
}

function fixed_table() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/fixed_table_1.jpg" alt=""><br><br>
        <img src="./images/fixed_table_2.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/fixed_table_3.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/fixed_table_4.png" alt="" style="max-width: 250px>
    `;
}

function auto_table() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/auto_table_1.jpg" alt="" width="1200px"><br><br>
        <img src="./images/auto_table_2.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/auto_table_3.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/auto_table_4.png" alt="" style="max-width:250px>
    `;
}

function fixed_block() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/fixed_block_1.jpg" alt="" ><br><br>
        <img src="./images/fixed_block_2.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/fixed_block_3.png" alt="" style="max-width: 250px><br><br>
        <img src="./images/fixed_block_4.png" alt="" style="max-width: 250px>
    `;
}

function auto_block() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/auto_block_1.jpg" alt="" width="1200px"><br><br>
        <img src="./images/auto_block_2.png" alt=""><br><br>
        <img src="./images/auto_block_3.png" alt=""><br><br>
        <img src="./images/auto_block_4.png" alt="">
    `;
}

function task_3() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/task3.png" alt="" >
        <p>Посилання на живу сторінку <b>завдань 2-3</b> <br><br>
            <a href=" https://morinaanna.github.io/lr3/">
                 https://morinaanna.github.io/lr3/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань 2-3</b> <br><br>
            <a href="https://github.com/MorinaAnna/lr3" target="_blank">
               https://github.com/MorinaAnna/lr3" target="_blank
            </a><br><br>
        </p>
        `;
}

function screenshot() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/баба3.jpg" alt="" width="1200px"><br><br>
        <img src="./images/баба3_1.jpg" alt="" width="1200px"><br><br>
        <img src="./images/screenshot_3.png" alt="" width="1200px">
    `;
}

function html_code() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/html_code_1.jpg" alt=""><br><br>
        <img src="./images/html_code_2.jpg" alt=""><br><br>
        <img src="./images/html_code_3.jpg" alt=""><br><br>
        <img src="./images/html_code_4.jpg" alt="">
    `;
}

function css_code() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/css_code_1.jpg" alt=""><br><br>
        <img src="./images/css_code_2.jpg" alt=""><br><br>
        <img src="./images/css_code_3.jpg" alt=""><br><br>
        <img src="./images/css_code_4.jpg" alt=""><br><br>
        <img src="./images/css_code_5.jpg" alt=""><br><br>
        <img src="./images/css_code_6.jpg" alt=""><br><br>
        <img src="./images/css_code_7.png" alt="">
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи верстки сторінок засобами CSS, <br>
            верстки на основі плаваючих елементів, з'ясувати переваги та недоліки типів макетів веб-сторінок. <br>
            Також придбала практичні навички роботи верстки сторінок засобами CSS та FLEXBOX. <br><br>
            <b>Переваги таблиць:</b> Легко відображають структуровані дані, мають простий синтаксис, сумісні зі старими браузерами. <br>
            <b>Недоліки таблиць:</b> Обмежена гнучкість для адаптивного дизайну, громіздкий HTML-код, що ускладнює підтримку. <br>
            <b>Переваги плаваючих блоків:</b> Забезпечують гнучкість, створюють адаптивний дизайн, полегшують управління розташуванням елементів. <br>
            <b>Недоліки плаваючих блоків:</b> Вимагають глибших знань CSS, можуть бути складними для новачків, проблеми з відображенням у старих браузерах. <br><br>
        </p>
        <h3>Контрольні питання</h3>
        <p>
            1. На яких трьох базових концепціях засновані всі методики верстки сторінок засобами CSS. <br>
            Всі методи верстки сторінок засобами CSS засновані на трьох базових концепціях: маніпулюванні внутрішніми і зовнішніми відступами, <br>
            плаваючих елементах, позиціонуванні <br><br>
            2. Дати визначення фіксованому  типу макетів веб-сторінок. Переваги та недоліки <br>
            Фіксовані макети: Це макети, в яких елементи мають задані розміри в пікселях. <br>
            Переваги: Легкість у реалізації та точність у розташуванні. <br>
            Недоліки: Відсутність адаптивності, що може призвести до проблем із відображенням на різних пристроях. <br><br>
            3. Дати визначення гумовому типу макетів веб-сторінок. Переваги та недоліки <br>
            Гумові макети: Це макети, що змінюються в залежності від ширини екрана, з використанням відсоткових значень. <br>
            Переваги: Динамічність та адаптивність до різних розмірів екранів. <br>
            Недоліки: Можливі проблеми з читабельністю при великих екранах. <br><br>
            4. Дати визначення еластичному  типу макетів веб-сторінок. Переваги та недоліки <br>
            Еластичні макети: Це схоже на гумові макети, але елементи використовують em або rem для визначення розмірів. <br>
            Переваги: Відповідають розміру тексту, що забезпечує кращу читабельність. <br>
            Недоліки: Складність у налаштуванні, може виникнути переповнення. <br><br>
            5. Дати визначення адаптивному типу макетів веб-сторінок. Переваги та недоліки <br>
            Адаптивні макети: Це макети, які підлаштовуються під визначені ширини екранів за допомогою медіа-запитів. <br>
            Переваги: Ідеально підходять для різних пристроїв, забезпечуючи оптимальний досвід. <br>
            Недоліки: Складність в управлінні різними макетами для різних екранів. <br><br>
            6. Дати визначення комбіновані типу макетів веб-сторінок. Переваги та недоліки <br>
            Комбіновані макети: Це поєднання різних методів верстки (фіксованих, гумових, еластичних). <br>
            Переваги: Гнучкість у використанні кращих практик для різних частин сайту. <br>
            Недоліки: Складність у реалізації та тестуванні. <br><br>
            7. Як засобами HTML та CSS створити окремо веб-сторінку, використовуючи розмітку за допомогою таблиці <br>
            У завданні 2 наглядно показано як це можливо зробити <br><br>
            8. Як засобами HTML та CSS створити окремо веб-сторінку, використовуючи розмітку за допомогою плаваючих блоків <br>
            У завданні 2 наглядно показано як це можливо зробити <br><br>
        </p>
    `;
}
