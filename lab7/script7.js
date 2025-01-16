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
        <img src="./images/theme.png" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>завдань лабораторної 7</b><br><br>
            <a href=""_blank">
               
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій завдань лабораторної 7</b> <br><br>
            <a href="">
                
            </a><br><br>
        </p>
        <p>Посилання на живу сторінку <b>звітів</b> <br><br>
            <a href="">
                
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій звітів</b> <br><br>
            <a href="">
               
            </a><br><br>
        </p>
    `;
}

function task2() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання №1</h3><br>
        <p>У звітному HTML-документі створити html-розмітку, яка складається з наступних елементів: текст, кнопка, поле введення.</p>
        <div style="background-color: #82C384; padding: 5px; width: 40%;">
            <h3>ЗАВДАННЯ №1</h3>

            <div style="display: flex; gap: 10px; align-items: center;">
                <button id="showButton">SHOW ME</button>
                <input id="inputField" type="text" placeholder="Введіть текст" />
            </div>
        </div>

        <p>Натискання на кнопку "SHOW ME" має виводити значення з поля введення у консоль.</p>

        <h3>Програмний код</h3><br>
        <img src="./images/task2_prog.jpg" alt="">
    `;

    const showButton = document.getElementById('showButton');
    const inputField = document.getElementById('inputField');

    showButton.addEventListener('click', () => {
        console.log(inputField.value);
    });
}



function task4() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 3</h3><br>
        <p>У звітному HTML-документі створити html-розмітку, яка складається з наступних елементів: текст, кнопка, input (поле введення).</p>
        <div style="background-color: #82C384; padding: 5px; width: 40%;">
            <h3>ЗАВДАННЯ 3</h3>

            <div style="display: flex; gap: 10px; align-items: center;">
                <input id="passwordInput" type="password" placeholder="пароль" />
                <button id="toggleButton">Приховати</button>
            </div>
        </div>

        <p>Кнопка "Приховати" ховає текст, виводячи зірочки замість введеної інформації, замінює назву кнопки на "Розкрити". При повторному натисканні текст знову стає доступним і кнопка набуває початкового вигляду.</p>

        <h3>Програмний код</h3><br>
        <img src="./images/task3_prog.jpg" alt="">
    `;

    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.textContent = 'Приховати';
        } else {
            passwordInput.type = 'password';
            toggleButton.textContent = 'Розкрити ';
        }
    });
}


function task6() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 5</h3><br>
        <p>У звітному HTML-документі створити html-розмітку, яка складається з наступних елементів:</p>
        <ul>
            <li>текст, з використанням селектора класу (<code>class="taskTitle"</code>),</li>
            <li>div, з використанням селектора ідентифікатора (<code>id="place"</code>).</li>
        </ul>
        <div style="background-color: #82C384; padding: 5px; width: 40%;">
            <h3 class="taskTitle">ЗАВДАННЯ 5</h3>

            <div id="place" style="background-color: green; width: 100px; height: 200px; margin: 10px auto;"></div>
        </div>

        <p>Додайте слухач кліку на <code>window</code> і визначте чи клікнув користувач у <code>div</code> з <code>id="place"</code>.</p>

        <p><strong>Примітка:</strong> Якщо користувач клікнув на зеленому прямокутнику – у консолі виведе <code>true</code>. У протилежному випадку - <code>false</code>.</p>

        <h3>Програмний код</h3><br>
        <img src="./images/task5_prog.jpg" alt="">
    `;

    const placeDiv = document.getElementById('place');

    window.addEventListener('click', (event) => {
        console.log(event.target === placeDiv);
    });
}


function task7() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 7</h3><br>
        <img src="./images/task7_task.jpg" alt="">
         <img src="./images/task7_task.jpg" alt="">

        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 20px;">
            <ul id="categories">
                <li class="item">
                    <h2>Animals</h2>
                    <ul>
                        <li>Cat</li>
                        <li>Hamster</li>
                        <li>Horse</li>
                        <li>Parrot</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Products</h2>
                    <ul>
                        <li>Bread</li>
                        <li>Prasley</li>
                        <li>Cheese</li>
                    </ul>
                </li>
                <li class="item">
                    <h2>Technologies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </li>
            </ul>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task7_prog.jpg" alt="">

       
    `;

    const categories = document.querySelectorAll('#categories .item');

    console.log(`Number of categories: ${categories.length}`);

    categories.forEach(category => {
        const categoryName = category.querySelector('h2').textContent;
        const elementsCount = category.querySelectorAll('ul li').length;
        console.log(`Category: ${categoryName}`);
        console.log(`Elements: ${elementsCount}`);
    });
}

function task8() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 8</h3><br>
        <img src="./images/task8_task.jpg" alt="">
         
        <h3>Виконання</h3>
        <div style="background-color: #82C384; padding: 10px;">
            <form class="login-form">
                <label>
                    Email
                    <input type="email" name="email" />
                </label>
                <label>
                    Password
                    <input type="password" name="password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task8_prog.jpg" alt="">

       
    `;

    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Запобігає перезавантаженню сторінки

        const email = loginForm.elements.email.value.trim();
        const password = loginForm.elements.password.value.trim();

        if (!email || !password) {
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email,
            password
        };

        console.log(formData);
        loginForm.reset();
    });
}

function task9() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 9</h3><br>
        <img src="./images/task9_task.jpg" alt="">
         <img src="./images/task9_task1.jpg" alt="">

        <h3>Виконання</h3>
        <div class="widget">
          <p>Background color: <span class="color">-</span></p>
          <button type="button" class="change-color">Change color</button>
        </div>

        <h3>Програмний код</h3><br>
        <img src="./images/task9_prog.jpg" alt="">
         <img src="./images/task9_prog1.jpg" alt="">

    `;

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
    }

    const button = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    button.addEventListener('click', () => {
        const newColor = getRandomHexColor();
        document.body.style.backgroundColor = newColor;
        colorSpan.textContent = newColor;
    });
}

function task10() {
    document.body.style.backgroundColor = 'white';
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Завдання 10</h3><br>
        <img src="./images/task10_task1.jpg" alt="">
        <img src="./images/task10_task2.jpg" alt="">

        <h3>Виконання</h3>
        <div id="controls">
          <input type="number" min="1" max="100" step="1" placeholder="Enter amount" style="width: 100px" />
          <button type="button" data-create>Create</button>
          <button type="button" data-destroy>Destroy</button>
        </div>

        <div id="boxes"></div>

        <h3>Програмний код</h3><br>
        <img src="./images/task10_prog.jpg" alt="">
         <img src="./images/task10_prog1.jpg" alt="">

       
    `;

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

    function createBoxes(amount) {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = '';
        let size = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.style.margin = '5px';
            boxesContainer.appendChild(box);
            size += 10;
        }
    }

    function destroyBoxes() {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = '';
    }

    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('#controls input');

    createButton.addEventListener('click', () => {
        const amount = parseInt(input.value, 10);

        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = '';
        } else {
            alert('Please enter a number between 1 and 100.');
        }
    });

    destroyButton.addEventListener('click', destroyBoxes);
}

function conclusion() {
    var desc = document.querySelector('.desc');

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я придбала практичні навички роботи з об'єктами та методами об'єктів JS, <br>
            познайомилась з Callback-функціями, стрілочними функціями та стрілочними функціями як колбеками. <br>
            Зокрема, реалізувала 7 завдань для відпрацювання навичок засобами мови JavaScript.
        </p>
    `;
}