class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null;   //reprezentuoja pati nauja sugeneruota elementa
        this.textDOM = null     // elementas, kuriame atvaizduosime pranesima
    }
    /**
     * 
     * @param {string} type zinutes tipas. vieninteliai galimi varijantai: `succes` | `error`
     * @param {string} message tekstas, kuris turi buti atvaizduotas pranesime.
     */
    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;
        
        if(type === 'success') {
            this.DOM.classList.remove('error');
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }
    }
    hide() {
        this.DOM.classList.remove('visible');
    }

    render() {
        const HTML = `<div class="toast">
                            <i class="fa fa-check"></i>
                            <i class="fa fa-shield"></i>
                            <p>Your message here...</p>
                            <i class="fa fa-times"></i>
                        </div>`;

        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast');
        this.textDOM = this.DOM.querySelector('p');
    }
}

export { Toast }