interface Form {
    //It should render a Form Component
    render(): Object
    getFormDescription(): string
}

abstract class DecoratedForm implements Form {
    tempForm: Form
    constructor(form: Form){
        this.tempForm = form;
    }
    render(): Object {
        return {
            form: this.tempForm
        }
    }
    getFormDescription(): string {
        return ''
    }
}

class FormWithEmail extends DecoratedForm {
    constructor(formToBeDecorated: Form){
        super(formToBeDecorated)
    }
    emailComponent: Object;
    render(): Object {
        return {
            //Just a comcept
            form: this.tempForm && this.emailComponent
        }
    }
    getFormDescription(): string {
        return this.tempForm.getFormDescription() + ' Added Email to the Form'
    }
}

class FormWithNumber extends DecoratedForm {
    constructor(formTobeDecorated: Form){
        super(formTobeDecorated)
    }
    numberComponent: Object;
    render(): Object {
        return {
            //Just a comcept
            form: this.tempForm && this.numberComponent
        }
    }
    getFormDescription(): string {
        return this.tempForm.getFormDescription() + ' Added Phone number to the Form'
    }
}
//Example above shows that we have two different decorators, one adds Email to a form and the other adds Phone number to it.

//How to run the code
class EmptyForm implements Form {
    render(): Object {
        return null;
    }
    getFormDescription(): string {
        return ''
    }
}

let initialForm = new EmptyForm();
initialForm = new FormWithEmail(initialForm);
initialForm = new FormWithNumber(initialForm);
console.log(initialForm.getFormDescription())

