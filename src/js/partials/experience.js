document.addEventListener('DOMContentLoaded', () => {
    const items = [...document.querySelectorAll('.experience__card')]
    let currentItem = null;
    let currentItemPos = null;
    const history = document.querySelector('.experience__history')

    // history.addEventListener('mouseout', () => {
    //     items.forEach(item => {
    //         setTimeout(() => {
    //             item.classList.add('active')
    //         }, 1200);
    //     });
    // })

    items.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            if (currentItem === item) return

            currentItem = item
            currentItemPos = i

            currentItem.classList.add('active')

            items.forEach((item, k) => {
                if (!(currentItem === item)) {
                    item.classList.remove('active')
                }
                if (currentItemPos - 1 === k || currentItemPos === k && k !== items.length - 1) {
                    item.style.borderBottom = '1px solid #C2C2C2'
                } else if (k !== items.length - 1) {
                    item.style.borderBottom = '1px solid #484848'
                }

            })
        })
    })


})
