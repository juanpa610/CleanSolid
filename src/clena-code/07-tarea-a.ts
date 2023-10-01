(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id : string;
        public type : HtmlType;

        constructor({
            id,
            type
        }: HtmlElement) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes  {
        public value : string;
        public placeholder : string;
        constructor({
            value,
            placeholder
        }: InputAttributes) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementI{
        value:       string,
        id:          string,
        type:        HtmlType,
        placeholder: string,
    }

    class InputElement{
        public htmlElement : HtmlElement;
        public inputAttributes : InputAttributes;
        public inputEvents : InputEvents;
        constructor({
            value,
            placeholder,
            id,
            type
        }: InputElementI){
            this.htmlElement = new HtmlElement({id, type});
            this.inputAttributes = new InputAttributes({ value, placeholder});
            this.inputEvents = new InputEvents();
        }
    }

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField2 = new InputElement({
        id : 'ewjkfhwe', 
        placeholder : 'ewfhekjwf' , 
        type: 'select', 
        value : 'erg'
    });

    console.log(nameField2);

})()