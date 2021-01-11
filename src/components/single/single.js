'use strict';

class Single {
    constructor() {
        this.items = [];
        this.container = null;
        this.basket = null;
        this.url = 'https://raw.githubusercontent.com/Vlad777-bit/static/master/JSON/brand-JSON/single.json';
    }

    init(basket) {
        this.container = document.querySelector('#single');
        this.basket = basket;

        //async
        this._get(this.url)
        .then(single => {
            this.items = single;
            this._render();
            this._handleEvents();
        });
    }

    _get(url) {
        return fetch(url).then(d => d.json()); //сделает запрос за джейсоном, дождется ответа и преобразует джейсон в объект, который вернется из данного метода
    }

    renderSingleTemplate(item) {
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
                <img src="${item.productImg}" alt="product">
                <div class="items_text single_text">
                    ${item.productName}
                    <br>
                    <span>$${item.productPrice}</span>
                </div>
            </div>
        `;
    }

    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += this.renderSingleTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }

    _handleEvents() {
        this.container.addEventListener('click', event => {
            if(event.target.name == 'add') {
                // console.log('КУПЛЕНО!')
                let id = event.target.dataset.id; //from data-id
                let item = this.items.find(el => el.productId == id);
                this.basket.add(item);
            }
        });
    }
}


// function initSingle() {

//     const single = {
//         items: [],
//         container: null,
//         basket: null,
//         url: 'https://raw.githubusercontent.com/Vlad777-bit/static/master/JSON/brand-JSON/single.json',
//         init(basket) {
//             this.container = document.querySelector('#single');
//             this.basket = basket;
 
//             //async
//             this._get(this.url)
//             .then(single => {
//                 this.items = single;
//                 this._render();
//                 this._handleEvents();
//             });
//         },

//         _get(url) {
//             return fetch(url).then(d => d.json()); //сделает запрос за джейсоном, дождется ответа и преобразует джейсон в объект, который вернется из данного метода
//         },
//         _render() {
//             let htmlStr = '';
//             this.items.forEach((item, i) => {
//                 htmlStr += renderSingleTemplate(item, i);
//             });
//             this.container.innerHTML = htmlStr;
//         },
//         _handleEvents() {
//             this.container.addEventListener('click', event => {
//                 if(event.target.name == 'add') {
//                     // console.log('КУПЛЕНО!')
//                     let id = event.target.dataset.id; //from data-id
//                     let item = this.items.find(el => el.productId == id);
//                     this.basket.add(item);
//                 }
//             });
//         }
//     };

//     return single;
// }

// function renderSingleTemplate(item, i) {
//     return `
//     <div class="product_items">
//         <div class="prewive">
//             <button class="add"
//                 name="add"
//                 data-id="${item.productId}"
//             >
//                 <img src="../src/assets/img/fetured/basket_white.svg" alt="basket" class="basket_white">
//                 Add to Cart
//             </button>
//         </div>
//         <img src="${item.productImg}" alt="product">
//         <div class="items_text single_text">
//             ${item.productName}
//             <br>
//             <span>$${item.productPrice}</span>
//         </div>
//     </div>
// `;
// }