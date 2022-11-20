import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        checkNumInputs('#width');
        checkNumInputs('#height');

    const pushToState = (elem, event, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName){
                    case "SPAN":
                        state[prop] = i;
                        break;
                    case "INPUT":
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;  
                }
            });
        });
    };

    pushToState(windowForm, 'click', 'form');
    pushToState(windowWidth, 'input', 'width');
    pushToState(windowHeight, 'input', 'height');
    pushToState(windowType, 'change', 'type');
    pushToState(windowProfile, 'change', 'profile');
};

export default changeModalState;