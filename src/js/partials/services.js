document.addEventListener('DOMContentLoaded', () => {
    const controls = [...document.querySelectorAll(".js-services-control")]
    const tabs = [...document.querySelectorAll('.js-services-tab')]
    const akks = [...document.querySelectorAll('.js-services-akk')]

    let prevControl = null
    let prevTab = null
    let prevAkk = null

    const isTablet = window.matchMedia('(max-width: 1000px)').matches

    function activateTabAndControl(control, tab) {
        if (control === prevControl) return
        if (prevTab === tab) return
        if (prevControl) prevControl.classList.remove('active')
        if (prevTab) prevTab.classList.remove('active')

        prevControl = control
        control.classList.add('active')

        tab.classList.add('active')
        prevTab = tab
    }

    function activateAccordionItem(control, akk) {
        if (control === prevControl) return
        if (prevAkk === akk) return
        if (prevControl) prevControl.classList.remove('active')
        if (prevAkk) {
            prevAkk.classList.remove('active')
            prevAkk.style.height = 0
        }

        prevControl = control
        control.classList.add('active')
        console.log(akk.scrollHeight)
        akk.style.height = akk.scrollHeight + 'px'
        akk.classList.add('active')
        prevAkk = akk
    }
    // document.addEventListener('resize', () => {

    // })

    if (isTablet) {
        controls.forEach((control, i) => {
            const akk = akks.find(akk => akk.dataset.item === control.dataset.control)
            if (i === 0) {
                activateAccordionItem(control, akk)
            }
            control.addEventListener('mouseover', () => {
                activateAccordionItem(control, akk)
            })
        })
    } else {
        controls.forEach((control, i) => {
            const tab = tabs.find(tab => tab.dataset.tab === control.dataset.control)
            if (i === 0) {
                activateTabAndControl(control, tab)
            }
            control.addEventListener('mouseover', () => {
                activateTabAndControl(control, tab)
            })
        })
    }
})

