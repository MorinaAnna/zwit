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
        <img src="./images/tema4.jpg" alt="">
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

function desktop_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/дескверсія.jpg" alt=""><br><br>
        <img src="./images/дескскрін.jpg" alt=""><br><br>
        <img src="./images/tablet_view_code_1.png" alt=""><br><br>
        <img src="./images/tablet_view_code_2.png" alt=""><br><br>
    `;
}

function tablet_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/планшетверсія.jpg" alt=""><br><br>
        <img src="./images/планшетскрін.jpg" alt=""><br><br>
        
    `;
}

function mobile_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/мобверсія.jpg" alt=""><br><br>
        <img src="./images/мобверсія2.jpg" alt=""><br><br>
        <img src="./images/мобверсія3.jpg" alt=""><br><br>
        <img src="./images/мобскрін1.jpg" alt=""><br><br>
        <img src="./images/мобскрін1.jpg" alt=""><br><br>
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я дослідила принципи адаптивної верстки веб-сторінок, <br>
            використовуючи медіа-запити для коректного відображення сайту на різних пристроях. <br>
            Також навчилась застосовувати медіа-типи та функції, що дозволяють змінювати стилі залежно від характеристик екрану.
        </p>
    `;
}
