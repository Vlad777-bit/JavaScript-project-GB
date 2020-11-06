let TITLES= [
    'MANGO PEOPLE LONG JACKET',
    'MANGO PEOPLE COAT',
    'MANGO PEOPLE JACKET',
    'MANGO PEOPLE GREY T-SHIRT',
    'MANGO PEOPLE SHORTS',
    'MANGO PEOPLE BOMBER JACKET',
    'MANGO PEOPLE TUXEDO',
    'MANGO PEOPLE LIGHT COAT',
    'MANGO PEOPLE PURPLE T-SHIRT',
];
let PRICES = [14, 130, 36, 41, 56.9, 50, 41.5, 79.2, 120.03];

const product = {
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

product.init();

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
    <div class="product_items items_mt">
        <div class="prewive prewive_product">
            <div class="add">
                <img src="../src/assets/img/fetured/basket_white.svg" alt="basket" class="basket_white">
                Add to Cart
            </div>
            <div class="add_icons">
                <div class="stir">
                    <img src="../src/assets/img/product/stir.svg" alt="stir">
                </div>
                <div class="stir">
                    <img src="../src/assets/img/product/like.svg" alt="like">
                </div>
            </div>
        </div>
        <img src="../src/assets/img/product/product${1 + i}.png" alt="product">
        <div class="items_text">
            ${item.productName}
            <br>
            <span>$${item.productPrice}</span>
        </div>
    </div>
`;
}