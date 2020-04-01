let stockArray = [
  { bankName: "Газпромбанк", investName: "Ваш успех", currency: "RUB", incomeType: 6.22, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: false },
  { bankName: "Кредит Европа Банк", investName: "Оптимальный на 2 года", currency: "RUB", incomeType: 6.45, sumMin: 100000, sumMax: null, termMin: 24, termMax: 24, canDeposit: false },
  { bankName: "Банк Зенит", investName: "Праздничный 500+", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: null, termMin: 17, termMax: 17, canDeposit: false },
  { bankName: "Еврофинанс Моснарбанк", investName: "Классический", currency: "RUB", incomeType: 6.95, sumMin: 30000, sumMax: null, termMin: 12, termMax: 24, canDeposit: false },
  { bankName: "Джей энд Ти Банк", investName: "Магнус-Онлайн", currency: "RUB", incomeType: 6.8, sumMin: 100000, sumMax: null, termMin: 6, termMax: 6, canDeposit: false },
  { bankName: "МТС Банк", investName: "В вашу пользу", currency: "RUB", incomeType: 6.75, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Эс-Би-Ай Банк", investName: "Свои правила Онлайн", currency: "RUB", incomeType: 6.7, sumMin: 30000, sumMax: 30000000, termMin: 24, termMax: 24, canDeposit: false },
  { bankName: "Банк Уралсиб", investName: "Прогноз отличный", currency: "RUB", incomeType: 6.7, sumMin: 100000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
  { bankName: "Инвестторгбанк", investName: "ИТБ-Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
  { bankName: "Транскапиталбанк", investName: "ТКБ.Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
  { bankName: "Совкомбанк", investName: "Зимний праздник с Халвой", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 2, termMax: 2, canDeposit: true },
  { bankName: "Агророс", investName: "Медовый месяц", currency: "RUB", incomeType: 5.51, sumMin: 20000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
  { bankName: "Росдорбанк", investName: "Онлайн-1", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: 150000000, termMin: 1, termMax: 1, canDeposit: true },
  { bankName: "Национальный Стандарт", investName: "Сберегательный стандарт", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
  { bankName: "Россия", investName: "Морозные узоры", currency: "RUB", incomeType: 5, sumMin: 100000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
  { bankName: "Кузнецкий Мост", investName: "Накопительный", currency: "RUB", incomeType: 4.85, sumMin: 50000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
  { bankName: "Тексбанк", investName: "Универсальный", currency: "RUB", incomeType: 4.6, sumMin: 10000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
  { bankName: "Морской Банк", investName: "Правильным курсом +", currency: "RUB", incomeType: 4.55, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
  { bankName: "Норвик Банк", investName: "Лаконичный", currency: "RUB", incomeType: 4.5, sumMin: 500, sumMax: 50000000, termMin: 1, termMax: 1, canDeposit: true },
  { bankName: "Промсельхозбанк", investName: "Конструктор", currency: "RUB", incomeType: 4.5, sumMin: 10000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
  { bankName: "Акибанк", investName: "Онлайн", currency: "RUB", incomeType: 6.5, sumMin: 1000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Банк БКФ", investName: "Ключевой стандарт", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: null, termMin: 6, termMax: 13, canDeposit: true },
  { bankName: "Экспобанк", investName: "Специальный (в конце срока)", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: 10000000, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Инвестторгбанк", investName: "ИТБ-Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Транскапиталбанк", investName: "ТКБ.Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Евроазиатский Инвестиционный Банк", investName: "Классика", currency: "RUB", incomeType: 6.1, sumMin: 100000, sumMax: null, termMin: 6, termMax: 12, canDeposit: true },
  { bankName: "Тимер Банк", investName: "Надежный выбор", currency: "RUB", incomeType: 6, sumMin: 10000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Евразийский Банк", investName: "TURBO MAXIMUM", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: 299999, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Таврический Банк", investName: "Достижимый (онлайн)", currency: "RUB", incomeType: 6, sumMin: 50000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
  { bankName: "Экспобанк", investName: "Юбилейный 25 (в конце срока)", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: 20000000, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Крокус-Банк", investName: "Ежемесячный доход", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Промсельхозбанк", investName: "Ваш выбор", currency: "RUB", incomeType: 6.3, sumMin: 10000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Нацинвестпромбанк", investName: "Прибыльный", currency: "RUB", incomeType: 6.3, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Ишбанк", investName: "Накопительный", currency: "RUB", incomeType: 6.25, sumMin: 100000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Примсоцбанк", investName: "Новогодний чулок (333 дня)", currency: "RUB", incomeType: 6.2, sumMin: 10000, sumMax: null, termMin: 11, termMax: 11, canDeposit: true },
  { bankName: "Еврофинанс Моснарбанк", investName: "Пополняемый", currency: "RUB", incomeType: 6.75, sumMin: 1000000, sumMax: null, termMin: 12, termMax: 24, canDeposit: true },
  { bankName: "Евроазиатский Инвестиционный Банк", investName: "VIP", currency: "RUB", incomeType: 6.35, sumMin: 1000000, sumMax: null, termMin: 9, termMax: 12, canDeposit: true },
  { bankName: "Российская Финансовая Корпорация", investName: "Универсальный", currency: "RUB", incomeType: 6, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
  { bankName: "Московский Кредитный Банк", investName: "МЕГА Онлайн", currency: "RUB", incomeType: 5.8, sumMin: 1000, sumMax: null, termMin: 3, termMax: 5, canDeposit: true },
  { bankName: "Александровский", investName: "Черника 19/20", currency: "RUB", incomeType: 5.6, sumMin: 20000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
  { bankName: "Финанс Бизнес Банк", investName: "Мандариновый!", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
  { bankName: "ЦентроКредит", investName: "Доход Плюс", currency: "USD", incomeType: 1.15, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
  { bankName: "Совкомбанк", investName: "Удобный (в долларах)", currency: "USD", incomeType: 1, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
  { bankName: "Веста", investName: "Веста - Копилка", currency: "USD", incomeType: 1, sumMin: 10000, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
  { bankName: "Славия", investName: "Славный Капитал", currency: "USD", incomeType: 0.85, sumMin: 5000, sumMax: null, termMin: 3, termMax: 4, canDeposit: true },
  { bankName: "Роскосмосбанк", investName: "Комфортный", currency: "USD", incomeType: 0.8, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
  { bankName: "ФорБанк", investName: "Срочный накопительный", currency: "USD", incomeType: 0.8, sumMin: 10000, sumMax: 500000, termMin: 3, termMax: 3, canDeposit: true },
  { bankName: "Московский Областной Банк", investName: "Гарантированный доллар", currency: "USD", incomeType: 0.75, sumMin: 50, sumMax: null, termMin: 4, termMax: 4, canDeposit: true },
  { bankName: "Объединенный Резервный Банк", investName: "ОРБ-Накопительный (в конце срока)", currency: "USD", incomeType: 1.6, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Банк Агора", investName: "Срочный", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Тинькофф Банк", investName: "СмартВклад (с повышенной ставкой)", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Первый Инвестиционный Банк", investName: "Закон сохранения", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
  { bankName: "Новый Век", investName: "Сберегательный", currency: "USD", incomeType: 1.5, sumMin: 5000, sumMax: 20000, termMin: 12, termMax: 12, canDeposit: true }
];

class BankProduct {
  constructor({ bankName, investName, currency, incomeType, sumMin, sumMax, termMin, termMax, canDeposit } = obj) {
    this.bankName = bankName;
    this.investName = investName;
    this.currency = currency;
    this.incomeType = incomeType;
    this.sumMin = sumMin;
    this.sumMax = sumMax;
    this.termMin = termMin;
    this.termMax = termMax;
    this.canDeposit = canDeposit;
  }
}

class Application {
  constructor() {
    const self = this;

    this.button = document.getElementById('buttonCalculate');
    this.button.addEventListener('click', function () {
      self.handleButtonClick();
    });
  }

  handleButtonClick() {
    let depositInput = +document.getElementById('deposit').value;
    let replenishment = +document.getElementById('monthlyAdd').value;
    let depositTerm = +document.getElementById('term').value;
    let currencySelection = document.getElementById('currencySel').value;

    let depositAmount = new Deposit(depositInput, replenishment, depositTerm, currencySelection);

    if (depositAmount.checkInput()) {

      let calculate = new Calculator(depositAmount);
      calculate.createNewArray();

      let items = [];
      items = calculate.bankProduct.filter((item) => (item.currency == depositAmount.currencySelection));
      items = items.filter((item) => (item.sumMin <= depositAmount.depositInput) && (item.sumMax >= depositAmount.depositInput || item.sumMax == null));
      items = items.filter((item) => (item.termMin <= depositAmount.depositTerm) && (item.termMax >= depositAmount.depositTerm));

      if (depositAmount.replenishment > 0) {
        items = items.filter((item) => item.canDeposit == true);
      }
      items.sort((a, b) => (b.incomeType - a.incomeType));

      items = items.filter((item) => item.incomeType == items[0].incomeType);
      if (items.length == 0) {
        document.getElementById("tableFrame").innerHTML = '';

        let error = document.getElementById('error');
        error.innerHTML = 'Нет подходящих вариантов';
        error.style.visibility = 'visible';
      } else {
        let finalDeposit = calculate.finalDeposit(items[0].incomeType);
        this.drawTable(items, finalDeposit);
      }
    }
  }

  drawTable(items, finalDeposit) {
    document.getElementById('error').style.visibility = 'hidden';

    const container = document.getElementById("tableFrame");
    let arr = '';
    arr += "<tr><th>Bank Name</th><th>Deposit Amount</th><th>Interest Rate</th><th>Total Amount</th></tr>";

    for (let i = 0; i < items.length; i++) {
      let row = `<tr><td>${items[i].bankName}</td><td>${items[i].investName}</td><td>${items[i].incomeType}</td><td>${Math.round(finalDeposit)}</td></tr>`;
      arr += row;
    }

    container.innerHTML = "<table>" + arr + "</table>";
  }
}

class Deposit {
  constructor(depositInput, replenishment, depositTerm, currencySelection) {
    this.depositInput = depositInput;
    this.replenishment = replenishment;
    this.depositTerm = depositTerm;
    this.currencySelection = currencySelection;
  }

  checkInput() {
    if (this.depositInput < 0) {
      alert('Please enter correct number!');
      return false;
    } else if (this.replenishment < 0) {
      alert('Please enter correct replenishment!');
      return false;
    } else if (this.depositTerm < 0) {
      alert('Please enter correct date!');
      return false;
    } else {
      return true;
    }
  }
}

class Calculator {
  constructor(deposit) {
    this.deposit = deposit;
    this.bankProduct = [];
  }

  createNewArray() {
    for (let i = 0; i < stockArray.length; i++) {
      let bankProduct = new BankProduct(stockArray[i]);
      this.bankProduct.push(bankProduct);
    }
  }

  finalDeposit(percent) {
    for (let i = 0; i < this.deposit.depositTerm; i++) {
      this.deposit.depositInput *= 1 + percent / (100 * 12);

      if (i != this.deposit.depositTerm - 1) {
        this.deposit.depositInput += this.deposit.replenishment;
      }
    }

    return this.deposit.depositInput;
  }
}

const app = new Application();
