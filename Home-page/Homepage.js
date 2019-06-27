

class TabTitle {
    constructor (title) {
        this.title = title;
        this.data = this.title.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.title.addEventListener('click', () => this.select1());
    };

    select1() {
        const titlesRemove = document.querySelectorAll('.tab-title')

        Array.from(titlesRemove).forEach((titles) => {
          titles.classList.remove('activeTitle');
        });

        this.title.classList.toggle('activeTitle');
        
        this.tabItem.select2();

        // console.log('select1 works')
      };
};

class TabItem {
    constructor(item){
        this.item = item;
    };

    select2() {
        const itemRemove = document.querySelectorAll('.tab-item')

        Array.from(itemRemove).forEach((items) => {
          items.classList.remove('activeItem');
        });

        this.item.classList.toggle('activeItem');

        // console.log('select2 works')
    };
};





const titles = document.querySelectorAll(".tab-title");

console.log(titles);

titles.forEach((title) => { return new TabTitle(title)} );