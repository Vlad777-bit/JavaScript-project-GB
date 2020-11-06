function initBasket() {
    let TITLES = [
    'MANGO PEOPLE T-SHIRT',
    'MANGO PEOPLE RED DRESS',
    ];
    let PRICES = [52, 68];

    let AMOUNTS = [4, 2]

    const basket = {
        items: [],
        total: null,
        container: null,
        wrapper: null,
        sum: 0,
        totalContainer: null,
        cart: null,
        init() {
            basketClick = document.querySelector('#basket');
            close = document.querySelector('#basket-close');
            this.container = document.querySelector('#basket-items');
            this.wrapper = document.querySelector('#basket-inner');
            this.totalContainer = document.querySelector('#basket-sum');
            this.items = getBasketItems(TITLES, PRICES, AMOUNTS);
            this._render();
            this._handleEvents();
        },
        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderBasketTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
            this._calcSum();
        },
        _calcSum() {
            this.sum = 0;
            this.items.forEach(item => {
                this.sum += item.productAmount * item.productPrice;
            });

            this.totalContainer.innerText = this.sum;
        },
        add(item) {
            let basketItem = this.items.find(el => el.productName == item.productName);
            if (basketItem) {
                basketItem.productAmount++;
            } else {
                this.items.push(item);
            }
            this._render();

        },
        _remove(item) {
            this.items.splice(this.items.indexOf(item), 1);
            this._render();
        },
        _handleEvents() {
            basketClick.addEventListener('click', event => {
                if (event.target.name == 'basketBtn') {
                    this.wrapper.style.display = 'block';
                }
                if (event.target.offsetParent.id != 'basket-inner' && event.target.name != 'basketBtn') {
                    this.wrapper.style.display = 'none';
                    console.log(event);
                    console.log(event.target);
                }    
                if (event.target.className == 'cart_close'){

                    let id = event.target.dataset.id; 
                    let item = this.items.find(el => el.productId == id);
                    this._remove(item);
                    console.log(event);
                    console.log(event.target);
                }     
            });
        },
    };

    return basket;
}







function getBasketItems(TITLES, PRICES, AMOUNTS) {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createBasketItem(i, TITLES, PRICES, AMOUNTS));
    }
    return arr;
}


function createBasketItem(index, TITLES, PRICES, AMOUNTS) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productAmount: AMOUNTS[index],
        productId: `prod_${index + 1}`,
    };
}

function renderBasketTemplate(item, i) {
    return `   
    <div class="basket_info">
        <img src="../src/assets/img/promo/cart${i + 1}.png" alt="product">
        <div class="cart_descr">
            <div class="cart_title">Rebox Zane</div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="cart_price">${item.productAmount} x $${item.productPrice}</div>
        </div>
        <a href="#" data-id="${item.productId}" class="cart_close">&#10006;</a>
        <hr>
    </div>
`;
}




                           