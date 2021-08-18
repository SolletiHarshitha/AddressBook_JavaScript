console.log("AddressBook System");
class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phonenumber = params[6];
        this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) { 
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
        this._firstName = firstName; 
        else
        throw "Invalid First Name";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) { 
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
        this._lastName = lastName; 
        else 
        throw "Invalid Last Name";
    }

    get address() { return this._address; }
    set address(address) { 
        const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z]{3,}$");
        if(locationRegex.test(address))
        this._address = address;
        else
        throw "Invalid Address"; 
    }

    get city() { return this._city; }
    set city(city) { 
        const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z]{3,}$");
        if(locationRegex.test(city))
        this._city = city;
        else
        throw "Invalid City";
    }

    get state() { return this._state; }
    set state(state) { 
        const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z]{3,}$");
        if(locationRegex.test(state))
        this._state = state;
        else
        throw "Invalid State";
    }

    get zip() { return this._zip; }
    set zip(zip) { 
        const zipRegex = RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw "Invalid Zip";
    }

    get phonenumber() { return this._phonenumber; }
    set phonenumber(phonenumber) { 
        const phoneRegex = RegExp("^[1-9]{1}[0-9]{0,3}\\s[1-9]{1}[0-9]{9}$");
        if(phoneRegex.test(phonenumber))
        this._phonenumber = phonenumber;
        else
        throw "Invalid PhoneNumber"; 
    }

    get email() { return this._email; }
    set email(email) { 
        const emailRegex = RegExp("^[a-z]{1,}[a-z0-9]*[-.+]{0,1}[a-z0-9]+@([a-z0-9]+)(\\.[a-z]{2,}){1,2}$");
        if(emailRegex.test(email))
        this._email = email;
        else 
        throw "Invalid Email";
    }

    toString() {
        return "FirstName : " + this.firstName + ", LastName : " + this.lastName +
         ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + 
         ", Zip : " + this.zip + ", PhoneNumber : " + this.phonenumber + ", Email : " + this.email;
    }
}
let addressBookArray = new Array();
try{
    addressBookArray.push(new Contact("Avani", "Reddy", "KanigiriRoad", "Pamur", "AndhraPradesh", "523108", "91 9393934934", "avani@gmail.com"));
}
catch(e){
    console.error(e);
}
try{
    addressBookArray.push(new Contact("Ajay", "Kumar", "NelloreRoad", "Pamur", "AndhraPradesh", "523108", "91 9203040450", "ajay@gmail.com"));
}
catch(e){
    console.error(e);
}
console.log(addressBookArray);