var lvl = document.querySelector('.header__timer-extra').innerHTML,
    TimerId = 85;
    SEtTimeOut()
    function SEtTimeOut() {
        lvl++;
        var SEtTimeOutStop = setTimeout(() => SEtTimeOut(), TimerId);
        SEtTimeOutStop;
        // document.querySelector('.header__timer-extra').innerHTML = lvl;
        if (lvl == 30) {
            TimerId = 100; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 40) {
            TimerId = 150; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 50) {
            TimerId = 200; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 80) {
            TimerId = 300; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 90) {
            TimerId = 400; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 95) {
            TimerId = 500; 
            lvl++;
            // document.querySelector('.header__timer-extra').innerHTML = lvl; 
            SEtTimeOutStop;
        }else if (lvl == 100) {
            clearTimeout(SEtTimeOutStop);
            lvl = 100;
        }
        document.querySelector('.header__timer-extra').innerHTML = lvl;
    }
const product = {
    plainBurger:{
        name: "Гамбургер простой",
        price:10000,
        kcall: 500,
        amount:0,
        Summ: function () {
            return this.price * this.amount
        },
        Kcall: function () {
            return this.kcall * this.amount
        }
    },
    freshBurger:{
        name: "Гамбургер FRESH",
        price: 20500,
        kcall: 700,
        amount:0,
        Summ: function () {
            return this.price * this.amount
        },
        Kcall: function () {
            return this.kcall * this.amount
        }
    },
    freshCombo:{
        name: "FRESH COMBO",
        price: 31900,
        kcall: 1000,
        amount:0,
        Summ: function () {
            return this.price * this.amount
        },
        Kcall: function () {
            return this.kcall * this.amount
        }
    }
}

const ExtraProduct = {
    doubleMayonaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 130
    },
    lettuce: {
        name: 'Салатный лист',
        price: 500,
        kcall: 20
    },
    Cheese: {
        name: 'Сыр',
        price: 20000,
        kcall: 30   
    }
}
const btnPlusOrMinus = document.querySelectorAll(".main__product-btn"),
      chekExtraProduct = document.querySelectorAll(".main__product-checkbox");
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function () {
        plusOrMinus(this);
    })
    function plusOrMinus(elem) {
        const parent = elem.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementDate = elem.getAttribute('data-symbol');
        
        if (elementDate == '+' && product[parentId].amount < 10) {
            product[parentId].amount++;
        }else if (elementDate == '-' && product[parentId].amount > 0) {
            product[parentId].amount--;
        }
        out.innerHTML = product[parentId].amount;
        price.innerHTML = product[parentId].Summ();
        kcall.innerHTML = product[parentId].Kcall();
    }
}