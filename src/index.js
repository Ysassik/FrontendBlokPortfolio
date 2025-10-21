import './styles/main.scss'

  const items = [
    "Telegram",
    "WhatsApp",
    "Viber",
    "Звонок на телефон",
    "SMS сообщение"
  ];

  let selectedIndex = 0; // выбран 0 элемент (индексация с нуля)

  const input = document.getElementById('dropdownInput');
  const list = document.getElementById('dropdownList');
  const arrow = document.getElementById('dropdownArrow');

  function updateDropdown() {
    input.value = items[selectedIndex];
    list.innerHTML = '';
    items.forEach((item, index) => {
      if(index !== selectedIndex) {
        const option = document.createElement('div');
        option.textContent = item;
        option.dataset.index = index;
        option.setAttribute('role', 'option');
        option.classList.add('feedback__item');
        list.appendChild(option);
      }
    });
  }

  // Показ/скрытие списка с плавной анимацией
  function toggleList() {
    const arrow = document.getElementById('dropdownArrow');
    const isOpen = list.classList.contains('open');
    if(isOpen) {
      list.classList.remove('open');
      arrow.classList.remove('open')
      input.setAttribute('aria-expanded', 'false');
    } else {
      list.classList.add('open');
      arrow.classList.add('open')
      input.setAttribute('aria-expanded', 'true');
    }
  }
  
  input.addEventListener('click', toggleList);

  list.addEventListener('click', (e) => {
    if(e.target && e.target.dataset.index !== undefined) {
      selectedIndex = Number(e.target.dataset.index);
      updateDropdown();
      toggleList();
    }
  });

  // Закрыть список при клике вне компонента
  document.addEventListener('click', (e) => {
    if(!input.contains(e.target) && !list.contains(e.target) && !arrow.contains(e.target)) {
      if(list.classList.contains('open') && arrow.classList.contains('open')) {
        list.classList.remove('open');
        arrow.classList.remove('open');
        input.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Инициализация
  updateDropdown();


  // Формы для поп-ап
  const itemspopup = [
    "Telegram",
    "WhatsApp",
    "Viber",
    "Звонок на телефон",
    "SMS сообщение"
  ];

  let selectedIndexpopup = 0; // выбран 0 элемент (индексация с нуля)

  const inputpopup = document.getElementById('dropdownInput-popup');
  const listpopup = document.getElementById('dropdownList-popup');
  const arrowpopup = document.getElementById('dropdownArrow-popup');

  function updateDropdownpopup() {
    inputpopup.value = itemspopup[selectedIndex];
    listpopup.innerHTML = '';
    itemspopup.forEach((item, index) => {
      if(index !== selectedIndex) {
        const optionpopup = document.createElement('div');
        optionpopup.textContent = item;
        optionpopup.dataset.index = index;
        optionpopup.setAttribute('role', 'option');
        optionpopup.classList.add('feedback__item');
        listpopup.appendChild(optionpopup);
      }
    });
  }

  // Показ/скрытие списка с плавной анимацией
  function toggleListpopup() {
    const arrowpopup = document.getElementById('dropdownArrow-popup');
    const isOpenpopup = listpopup.classList.contains('open');
    if(isOpenpopup) {
      listpopup.classList.remove('open');
      arrowpopup.classList.remove('open')
      inputpopup.setAttribute('aria-expanded', 'false');
    } else {
      listpopup.classList.add('open');
      arrowpopup.classList.add('open')
      inputpopup.setAttribute('aria-expanded', 'true');
    }
  }
  
  inputpopup.addEventListener('click', toggleListpopup);

  listpopup.addEventListener('click', (e) => {
    if(e.target && e.target.dataset.index !== undefined) {
      selectedIndex = Number(e.target.dataset.index);
      updateDropdownpopup();
      toggleListpopup();
    }
  });

  // Закрыть список при клике вне компонента
  document.addEventListener('click', (e) => {
    if(!inputpopup.contains(e.target) && !listpopup.contains(e.target) && !arrowpopup.contains(e.target)) {
      if(listpopup.classList.contains('open') && arrowpopup.classList.contains('open')) {
        listpopup.classList.remove('open');
        arrowpopup.classList.remove('open');
        inputpopup.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Инициализация
  updateDropdownpopup();

  //Открытие и закрытие POP-UP, а также затемнение фона

  const openBtn = document.querySelectorAll('.popup_btn');
  const closeBtn = document.getElementById('closePopupBtn');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popupOverlay');
  const submit = document.getElementById('submit_close');

  openBtn.forEach((item) => {
    item.addEventListener('click', () => {
      popup.classList.add('popup__open');
      overlay.classList.add('popupOverlay__open');
    })
  })

  function closePopup() {
    popup.classList.remove('popup__open');
    overlay.classList.remove('popupOverlay__open');
  }

  submit.addEventListener('click', closePopup);
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);


  //
  const form = document.querySelectorAll('form');
  openBtn.forEach((item) => {
    item.addEventListener('submit', async (event) => {
    event.preventDefault()}) // Предотвращаем перезагрузку
    })

  const burger = document.getElementById('burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.querySelector('.header__inner');
  const contact = document.querySelector('._mobile');
  const overlay = document.getElementById('popupOverlay');

  function toggleMenu() {
    if (window.innerWidth <= 768) {
      menu.classList.toggle('active');
      contact.classList.toggle('active');
      overlay.classList.toggle('burgerOverlay__open');
    }
  }

  burger.addEventListener('click', toggleMenu);

  // Дополнительно: при изменении размера экрана закрывать меню если ширина >768
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
    }
  });
});
