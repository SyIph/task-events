/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    var btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    btn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.removeChild(e.currentTarget);
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    var ul = document.createElement('ul');
    arr.forEach((e) => {
        var li = document.createElement('li');
        li.innerHTML = e;
        li.addEventListener('mouseover', (e1) => {
            e1.currentTarget.setAttribute('title', e);
        });
        ul.insertAdjacentElement('beforeend', li);
    });
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    var a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.innerHTML = 'tensor';
    a.addEventListener(
        'click',
        (e) => {
            a.innerHTML = 'tensor https://tensor.ru/';
        },
        { once: true },
    );
    document.body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    var ul = document.createElement('ul');
    var addFunc = function () {
        var li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', (e) => {
            li.innerHTML += '!';
        });
        ul.append(li);
    };
    addFunc();
    document.body.append(ul);
    var btn = document.createElement('button');
    btn.addEventListener('click', addFunc);
    btn.innerHTML = 'Добавить пункт';
    document.body.append(btn);
}
