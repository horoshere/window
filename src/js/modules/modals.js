const modals = () => {
    
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                
                modal.style.display = 'block';
                //scroll block
                document.body.style.overflow = 'hidden';
                //вместо overflow: hidden используем класс из bootstrap
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        })
    };

    // function showModalByTime(selector, time) {
    //     setTimeout(() => {
    //         document.querySelector(selector).style.dispaly = 'block';
    //         document.body.style.overflow = 'hidden';
    //     }, time);
    // }
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 3000);

    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    // bindModal('.popup_calc_button', '.popup_calc_profile',  '.popup_calc_profile_close');
    // bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
};

export default modals;