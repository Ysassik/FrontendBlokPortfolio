import './styles/main.scss'

  const items = [
    "Telegram",
    "WhatsApp",
    "Viber",
    "Звонок на телефон",
    "SMS сообщение"
  ];

  let selectedIndex = 0; // выбран третий элемент (индексация с нуля)

  const input = document.getElementById('dropdownInput');
  const list = document.getElementById('dropdownList');

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
    const isOpen = list.classList.contains('open');
    if(isOpen) {
      list.classList.remove('open');
      input.setAttribute('aria-expanded', 'false');
    } else {
      list.classList.add('open');
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
    if(!input.contains(e.target) && !list.contains(e.target)) {
      if(list.classList.contains('open')) {
        list.classList.remove('open');
        input.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Инициализация
  updateDropdown();