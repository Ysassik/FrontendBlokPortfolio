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


  // Для popup
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


  const openBtn = document.getElementById('openPopupBtn');
  const closeBtn = document.getElementById('closePopupBtn');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popupOverlay');

  openBtn.addEventListener('click', () => {
    popup.classList.add('popup__open');
    overlay.classList.add('popupOverlay__open');
  });

  function closePopup() {
    popup.classList.remove('popup__open');
    overlay.classList.remove('popupOverlay__open');
  }

  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);