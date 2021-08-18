console.log("AddressBook System");
var prompt = require('prompt-sync')();
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

    //getter and setter methods
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
let addressBookArray = new Array(); //Initialising Array
let end = false;
while(!end){
    console.log("1.Add Contact\n2.Display Contact\n3.Edit Contact\n4.Delete Contact\n5.Count of Contacts\n6.Search Contact by City or State\n0.Exit");
    let option = parseInt(prompt("Enter your choice : "));
    switch(option){
        case 1:
            //Checking the contacts to avoid duplicates
            let fName = prompt("Enter First Name :");
            let lName = prompt("Enter Last Name :");
            let check = ContactExists(fName,lName);
            if(check == 0){
                console.log("Contact doesn't exists");
                AddContact();
            }
            else
            console.log("Contact alrtady exists!");
            break;
        case 2:
            //Displaying contacts
            DisplayContact();
            break;
        case 3:
            //Searching the contact by name and editing it
            let fname = prompt("Enter First Name :");
            let lname = prompt("Enter Last Name :");
            let contact = addressBookArray.find(x=>x.firstName ==fname && x.lastName == lname);
            if(contact != null){
                console.log("Contact exists");
                EditContact(contact);
            }
            else
            console.log("No Contact exists");
            break;
        case 4:
            //Searching the index of the contact by name and deleting it
            let fstname = prompt("Enter First Name :");
            let lstname = prompt("Enter Last Name :");
            let contactIndex = addressBookArray.findIndex(x=>x.firstName ==fstname && x.lastName == lstname);
            if(contactIndex != -1){
                console.log("Contact exists");
                DeleteContact(contactIndex);
            }
            else
            console.log("No Contact exists");
            break;
        case 5:
            //Calculating the count of countacts
            let totalCount = addressBookArray.reduce(ContactsCount,0);
            console.log("Total Number of Contacts : "+totalCount);
            break;
        case 6:
            //Searching and Viewing the contact
            SearchByCityOrState();
            break;
        case 0:
            end = true;
            break;
    }
}

//Checking if contact exists
function ContactExists(fname, lname){
    let contact = addressBookArray.filter(x=>x.firstName == fname && x.lastName == lname).reduce(ContactsCount,0);
    if(contact) return 1;
    else return 0;
}
//Add Contacts
function AddContact(){
    try{
        let firstName = prompt("Enter First Name :");
        let lastName = prompt("Enter Last Name :");
        let address = prompt("Enter Address :");
        let city = prompt("Enter City :");
        let state = prompt("Enter State :");
        let zip = prompt("Enter Zip :");
        let phonenumber = prompt("Enter Phonenumber :");
        let email = prompt("Enter Email :");
        addressBookArray.push(new Contact(firstName, lastName, address, city, state, zip, phonenumber, email));
    } 
    catch(e){
        console.error(e);
    } 
}
//Display Contact
function DisplayContact(){
    console.log(addressBookArray);
}
//Edit Contact
function EditContact(contact){
    try{
        console.log("1.Edit Name\n2.Edit Address\n3.Edit PhoneNumber\n4.Edit Email");
        let option = parseInt(prompt("Choose an option :"));
        switch(option){
            case 1:
                contact.firstName = prompt("Enter First Name :");
                contact.lastName = prompt("Enter Last Name :");
                break;
            case 2:
                contact.address = prompt("Enter Address :");
                contact.city = prompt("Enter City :");
                contact.state = prompt("Enter State :");
                contact.zip = prompt("Enter Zip :");
                break;
            case 3:
                contact.phonenumber = prompt("Enter PhoneNumber :");
                break;
            case 4:
                contact.email = prompt("Enter Email :");
                break;
        }      
    }
    catch(e){
        console.log(e);
    }
}
//Delete Contact
function DeleteContact(index){
    addressBookArray.splice(index,1);
    console.log("Contact Deleted Successfully!");
}
//Count number of Contacts
function ContactsCount(count){
    return count+1;
}
//Search contact by city or state
function SearchByCityOrState(){
    try{
        console.log("1.Search by City\n2.Search by State")
        let option = parseInt(prompt("Enter an option :"));
        switch(option){
            case 1:
                let cityName =prompt("Enter name of the city :");
                let contact = addressBookArray.filter(x=>x.city == cityName);
                console.log(contact);
                break;
            case 2:
                let stateName =prompt("Enter name of the state :");
                let contact2 = addressBookArray.filter(x=>x.state == stateName);
                console.log(contact2);
                break;
        }
    }
    catch(e){
        console.error(e);
    }
}