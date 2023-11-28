var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
    }
})

const url = 'https://yuriyivaniuk.github.io/PR7/shop.json'
axios.get(url)
.then(data=>addItems(data))
.catch(err=>console.log(err))

function addItems(list){
    const swiper_wrapper = document.querySelector('.swiper-wrapper')
    for (let i = 0; i < list.data.items.length; i++){
        const swiper_slide = document.createElement('div')
        swiper_slide.className = 'swiper-slide'
        swiper_wrapper.append(swiper_slide)

        const itemContent = document.createElement('div')
        itemContent.className = 'itemContent'
        swiper_slide.append(itemContent)

        if(list.data.items[i].newItem){
            const new_ = document.createElement('div')
            new_.className = 'new'
            new_.innerHTML = '<p>НОВИНКА</p>'
            itemContent.append(new_)
        }
        else if(list.data.items[i].hotItem){
            const hit = document.createElement('div')
            hit.className = 'hit'
            hit.innerHTML = '<p>ХІТ ПРОДАЖ</p>'
            itemContent.append(hit)
        }

        const category = document.createElement('div')
        category.className = 'category'
        category.innerHTML = `<p>${list.data.items[i].category}</p>`
        itemContent.append(category)

        const line = document.createElement('div')
        line.className = 'line'
        itemContent.append(line)

        const photo = document.createElement('div')
        photo.className = 'photo'
        photo.style.backgroundImage = 'url("' + list.data.items[i].photo + '")'
        itemContent.append(photo)

        const name = document.createElement('div')
        name.className = 'name'
        name.innerText = list.data.items[i].name
        itemContent.append(name)

        const price = document.createElement('div')
        price.className = 'price'
        const salecost = document.createElement('span')
        salecost.className = 'salecost'
        salecost.innerText = list.data.items[i].prevPrice
        price.append(salecost)
        const cost = document.createElement('span')
        cost.className = 'cost'
        cost.innerText = list.data.items[i].price
        
        if (list.data.items[i].sale){
            cost.style.color = '#e43639'
        }
        else {
            cost.style.color = 'black'
        }
        price.append(cost)
        itemContent.append(price)

        const buy = document.createElement('input')
        buy.type = 'button'
        if (list.data.items[i].comingSoon){
            buy.className = 'comingSoon'
            buy.value = 'НЕЗАБАРОМ У ПРОДАЖІ'
        }
        else{
            buy.className = 'buy'
            buy.value = 'У КОРЗИНУ'
        }
        itemContent.append(buy)
    }
}
