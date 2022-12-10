const cards = document.querySelector('.cards')
let totalAmount=0;

const tshirts = [{
    title: "U.S. POLO ASSN.",
    desc: "Men's Solid Regular Fit Cotton Polo",
    imgSrc:"./images/tshirt image.webp",
    price: 749
},{
    title: "U.S. POLO ASSN.",
    desc: "Men's Striped Regular fit Polo",
    imgSrc:"./images/tshirt image.webp",
    price: 999
},{
    title: "UCB tshirt",
    desc: "Regular fit Polo for men",
    imgSrc:"./images/tshirt image.webp",
    price: 899
}
]

const loadTshirts = (tshirts)=>{
    tshirts.forEach((tshirt,idx)=>{
        let html=`
        <div class="card" id="card${idx}">
        <div class="card-img-wrapper">
            <img class="card-img" src="${tshirt.imgSrc}" alt="" srcset="">
        </div>
        <div class="card-info">
            <h2 class="card-title">${tshirt.title}</h2>
            <p class="card-desc">${tshirt.desc}</p>
            <p class="price">Rs.${tshirt.price}</p>
            <button class="atc" data-idx="${idx}" >Add to Cart</button>
            <div class="atc-counter">
                <button class="atc-add"  > + </button>
                <span class="atc-qty" data-idx="${idx}">1</span>
                <button class="atc-add"> - </button>
            </div>
        </div>
        </div>
        `
        cards.innerHTML+=html
    })
}

loadTshirts(tshirts)
const atc = document.querySelectorAll('.atc')



const addtoCart = (e)=> {
    let idx = e.currentTarget.getAttribute('data-idx')
    console.log(idx)
    document.querySelector(`#card${idx}`).querySelector('.atc').style.display="none"
    document.querySelector(`#card${idx}`).querySelector('.atc-counter').style.display="block"

}
atc.forEach((a)=>{
    a.addEventListener('click',addtoCart)
})