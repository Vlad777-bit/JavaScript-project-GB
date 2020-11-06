function initCatalog() {

    let TITLES = [
        'MANGO PEOPLE T-SHIRT',
        'MANGO PEOPLE RED DRESS',
        'MANGO PEOPLE JACKET',
        'MANGO PEOPLE WHITE DRESS',
        'MANGO PEOPLE STRIPED DRESS',
        'MANGO PEOPLE TUXEDO',
        'MANGO PEOPLE TROUSERS',
        'MANGO PEOPLE SHORTS',
    ];
    let PRICES = [52, 68, 36, 700, 87, 50, 67.5, 120.03];

    const catalog = {
        items: [],
        container: null,
        basket: null,
        init(basket) {
            this.container = document.querySelector('#catalog');
            this.items = getCatalogItems(TITLES, PRICES);
            this.basket = basket;
            this._render();
            this._handleEvents();
        },

        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderCatalogTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
        },

        _handleEvents() {
            this.container.addEventListener('click', event => {
                if (event.target.name == 'add') {
                    let id = event.target.dataset.id;
                    let item = this.items.find(el => el.productId == id);

                    item = Object.assign({}, item, { productAmount: 1 });
                    this.basket.add(item);
                }
            });
        }
    };

    return catalog;
}

function getCatalogItems(TITLES, PRICES) {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createCatalogItem(i, TITLES, PRICES));
    }
    return arr;
}


function createCatalogItem(index, TITLES, PRICES) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}`
    };
}

function renderCatalogTemplate(item, i) {
    return `   
    <div class="product_items">
        <div class="prewive">
            <button class="add" 
                name="add"
                data-id="${item.productId}"
            >
                <img src="../src/assets/img/fetured/basket_white.svg" alt="basket" class="basket_white">
                Add to Cart
            </button>
        </div>
        <img src="../src/assets/img/fetured/product_${1 + i}.png" alt="product">
        <div class="items_text">
            ${item.productName}
            <br>
            <span>$${item.productPrice}</span>
        </div>
    </div>
`;
}