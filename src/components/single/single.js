let TITLES = [
    'BLAZE LEGGINGS',
    'ALEXA SWEATER',
    'AGNES TOP',
    'SYLVA SWEATER'
];

let PRICES = [710.9, 609.99, 580.5, 199.9];

const single = {
    items: [],
    container: null,
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
        this._render();
    },
    _render() {
        let htmlStr = '';

        this.items.forEach((item, i) => {
            htmlStr += renderTemplate(item, i);
        });
        this.container.innerHTML = htmlStr;
    }
};

single.init();

function getItems() {
    let arr = [];

    for (let i = 0; i < TITLES.length; i++) {
        arr.push(createItem(i));
    }
    return arr;
}


function createItem(index) {
    return {
        productName: TITLES[index],
        productPrice: PRICES[index],
        productId: `prod_${index + 1}`
    };
}

function renderTemplate(item, i) {
    return `
    <div class="product_items">
        <div class="prewive">
            <button class="add">
                <img src="../src/assets/img/fetured/basket_white.svg" alt="basket" class="basket_white">
                Add to Cart
            </button>
        </div>
        <img src="../src/assets/img/single/woman${1 + i}.png" alt="product">
        <div class="items_text single_text">
            ${item.productName}
            <br>
            <span>$${item.productPrice}</span>
        </div>
    </div>
`;
}