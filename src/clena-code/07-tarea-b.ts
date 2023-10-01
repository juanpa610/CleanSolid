(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {
        public html : HtmlElement;
        public attributes : InputAttributes;
        public events  : InputEvents;
        constructor(id: string, value : string , placeholder: string){
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField2 = new InputElement(
        'Fernando',
        'ehfgw',
        'ewfkhjwe',
    );

    console.log({ nameField2 });

})()