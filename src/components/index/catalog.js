let titles = [
    'MANGO PEOPLE T-SHIRT',
    'MANGO PEOPLE RED DRESS',
    'MANGO PEOPLE JACKET',
    'MANGO PEOPLE WHITE DRESS',
    'MANGO PEOPLE STRIPED DRESS',
    'MANGO PEOPLE TUXEDO',
    'MANGO PEOPLE TROUSERS',
    'MANGO PEOPLE SHORTS',
];
let prices = [52, 68, 36, 700, 87, 50, 67.5, 120.03];

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
            <div class="product_items img_1">
					<div class="prewive">
						<div class="add">
							<img src="../src/assets/img/product/basket_white.svg" alt="basket" class="basket_white">
							Add to Cart
						</div>
					</div>
					<img src="../src/assets/img/product/product_${1 + i}.png" alt="product">
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