const header = document.querySelectorAll('.links a')
let test = 1
test = 2

document.querySelectorAll('#simple-text .simple-text__title.test__test')
document.querySelectorAll('.simple-text')

const service = document.querySelector('.service')


// console.log(header)
if (header) {
    header.forEach((item) => {
        // console.log(item)
        if (item) {
            item.addEventListener('click', () => {
                header.forEach((item) => {
                    item.classList.remove('active')
                })
                item.classList.add('active')
                // console.log(item)
            })
        }
    })
}

const gallery = document.querySelectorAll('.handline-gallery div')
const imageGallery = document.querySelectorAll('.gallery .image-gallery')
// console.log(gallery)
if (gallery) {
    gallery.forEach((item) => {
        if (item) {
            item.addEventListener('click', () => {
                const idItem = item.getAttribute('id')
                imageGallery.forEach((imageItem) => {
                    if (imageItem.classList.contains(idItem)) {
                        imageGallery.forEach((imageElement) => {
                            // console.log(imageElement)
                            imageElement.classList.remove("active-gallery")
                        })
                        imageItem.classList.add('active-gallery')
                    }
                })
                gallery.forEach((item) => {
                    // console.log(item)
                    item.classList.remove('active')
                })
                item.classList.add('active')
            })
        }
    })
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});

const button = document.querySelector('.simple-text button')
const text = document.querySelector('.service .simple-text__title')
// console.log(text.innerText)
if (button) {
    button.addEventListener('click', function () {
        text.innerText = 'SDFSest test FDSest'
    })
}
