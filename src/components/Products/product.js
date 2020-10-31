let titles = [
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
let prices = [14, 130, 36, 41, 56.9, 50, 41.5, 79.2, 120.03];

const catalog = {
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
            htmlStr += `
                <div class="product_items items_mt">
                    <div class="prewive prewive_product">
                        <div class="add">
                            <img src="../src/assets/img/Fetured/basket_white.svg" alt="basket" class="basket_white">
                            Add to Cart
                        </div>
                        <div class="add_icons">
                            <div class="stir">
                                <img src="../src/assets/img/Products/stir.svg" alt="stir">
                            </div>
                            <div class="stir">
                                <img src="../src/assets/img/Products/like.svg" alt="like">
                            </div>
                        </div>
                    </div>
                    <img src="../src/assets/img/Products/product${1 + i}.png" alt="product">
                    <div class="items_text">
                        ${item.productName}
                        <br>
                        <span>$${item.productPrice}</span>
                    </div>
                </div>
            `
        });
        this.container.innerHTML = htmlStr;
    }
};

catalog.init();

function getItems() {
    let arr = [];

    for (let i = 0; i < titles.length; i++) {
        arr.push(createItem(i));
    }
    return arr;
}


function createItem(index) {
    return {
        productName: titles[index],
        productPrice: prices[index],
        productId: `prod_${index + 1}`
    }
}