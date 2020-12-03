function initProduct() {

    const product = {
        items: [],
        container: null,
        basket: null,
        url: 'https://raw.githubusercontent.com/Vlad777-bit/static/master/JSON/product.json',
        init(basket) {
            this.container = document.querySelector('#product');
            this.basket = basket;
 
            //async
            this._get(this.url)
            .then(product => {
                this.items = product;
                this._render();
                this._handleEvents();
            });
        },

        _get(url) {
            return fetch(url).then(d => d.json()); //сделает запрос за джейсоном, дождется ответа и преобразует джейсон в объект, который вернется из данного метода
        },
        _render() {
            let htmlStr = '';

            this.items.forEach((item, i) => {
                htmlStr += renderProductTemplate(item, i);
            });
            this.container.innerHTML = htmlStr;
        },

        _handleEvents() {
            this.container.addEventListener('click', event => {
                if(event.target.name == 'add') {
                    let id = event.target.dataset.id; //from data-id
                    let item = this.items.find(el => el.productId == id);
                    this.basket.add(item);
                }
            });
        }
    };

    return product;
}

function renderProductTemplate(item, i) {
    return `
    <div class="product_items items_mt">
        <div class="prewive prewive_product">
            <button class="add"
                name="add"
                data-id="${item.productId}"
            >
                <img src="../src/assets/img/fetured/basket_white.svg" alt="basket" class="basket_white">
                Add to Cart
            </button>
            <div class="add_icons">
                <div class="stir">
                    <img src="../src/assets/img/product/stir.svg" alt="stir">
                </div>
                <div class="stir">
                    <img src="../src/assets/img/product/like.svg" alt="like">
                </div>
            </div>
        </div>
        <img src="${item.productImg}" alt="product">
        <div class="items_text">
            ${item.productName}
            <br>
            <span>$${item.productPrice}</span>
        </div>
    </div>
`;
}