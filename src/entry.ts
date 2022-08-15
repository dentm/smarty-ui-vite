import { App } from 'vue'

import CButton from './button/index'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'


export {
    CButton,
    SFCButton,
    JSXButton
}

export default {
    install(app: App) {
        app.component(CButton.name!, CButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name!, JSXButton);
    }
}



