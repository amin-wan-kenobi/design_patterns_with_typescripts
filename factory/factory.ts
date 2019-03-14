interface SignUpForm {
    buildSignUpForm(): string;
}

class SignUpDesignOne implements SignUpForm {
    buildSignUpForm(): string {
        return "I am design one";
    }
}
class SignUpDesignTwo implements SignUpForm {
    buildSignUpForm(): string {
        return "I am design two";
    }
}
class SignUpDesignThree implements SignUpForm {
    buildSignUpForm(): string {
        return "I am design three";
    }
}
class SignUpFormFactory {
    generateSignUpPage(whatForm: string): SignUpForm {
        switch (whatForm) {
            case "1":
                return new SignUpDesignOne();
            case "2":
                return new SignUpDesignTwo();
            case "3":
                return new SignUpDesignThree();
        }
    }
}

const signupfactory = new SignUpFormFactory();

let signUpPage = signupfactory.generateSignUpPage("1");
console.log(signUpPage.buildSignUpForm())
signUpPage = signupfactory.generateSignUpPage("2");
console.log(signUpPage.buildSignUpForm())
signUpPage = signupfactory.generateSignUpPage("3");
console.log(signUpPage.buildSignUpForm())