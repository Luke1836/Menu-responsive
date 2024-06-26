const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./Images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./Images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./Images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./Images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./Images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./Images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./Images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./Images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./Images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Steak Dinner",
      category: "dinner",
      price: 36.99,
      img: "./Images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const container = document.querySelector('.container');
  const btnContainer = document.querySelector(".btn-container");

  //Load the items
  window.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu);

    //Here we find out the different categories in our json document and form an array accordingly
    const categories = menu.reduce((values, item) => {
        if(!values.includes(item.category))
            values.push(item.category);
        return values;
    }, ['all']);

    //Here we built the buttons according to the unique categories we got
    const categoryBtns = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join('');
    
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

    //Filter the items
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if(category === menuItem.category)
                    return menuItem;
            });
            if(category === 'all')
                displayMenu(menu);
            else
                displayMenu(menuCategory);        
        });
    });
  });

  //Function to display the Menu items
  function displayMenu(menuItem) {
    let card = menuItem.map((item)=>{
        return `<div class="image-container">
                    <img src=${item.img} alt="item-1" loading="lazy" class="img">
                    <div class="content">
                        <header class="item-heading"><h3>${item.title}</h3>&nbsp;-&nbsp;<h3 id="price">${item.price}</h3></header>
                        <p class="content">${item.desc}</p>
                    </div>
                </div>`
    });
    card = card.join('');  //Joins all the strings together to form one large string
    container.innerHTML = card;
  }