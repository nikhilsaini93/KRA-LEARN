//  Mini Project: Simple Contact Manager (Console App)
// 🔧 Objective:
// Build a console-based Contact Manager that allows users to:
// Add a new contact
// List all contacts
// Search for a contact by name
// // Delete a contact by name or ID
// interface Contact1 {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
// }
// class ContactManger{
//     private contacts  : Contact[] = []
//     private nextId = 1
//     add(name : string , email : string , phone? : string): void{
// }
var ContactClass = /** @class */ (function () {
    function ContactClass(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    ContactClass.prototype.print = function () {
        console.log("".concat(this.id, ". ").concat(this.name, " | ").concat(this.email).concat(this.phone ? ' | ' + this.phone : ''));
    };
    return ContactClass;
}());
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
        this.nextId = 1;
    }
    ContactManager.prototype.addContact = function (name, email, phone) {
        var contact = new ContactClass(this.nextId++, name, email, phone);
        this.contacts.push(contact);
        console.log("Contact ".concat(contact.name, " added successfully"));
    };
    ContactManager.prototype.listContacts = function () {
        this.contacts.forEach(function (contact) { return contact.print(); });
    };
    ContactManager.prototype.searchContact = function (args) {
        var res = this.contacts.filter(function (contact) { return contact.name.toLowerCase().includes(args.toLowerCase()); });
        if (res.length === 0) {
            console.log("No contacts found for \"".concat(args, "\"."));
            return;
        }
        console.log("\nSearch Results for \"".concat(args, "\":"));
        res.forEach(function (contact) { return contact.print(); });
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (contact) { return contact.id === id; });
        if (index === -1) {
            console.log("Contact with ID ".concat(id, " not found."));
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact with ID ".concat(id, " deleted successfully"));
    };
    return ContactManager;
}());
var manager = new ContactManager();
manager.addContact("John Doe", "john@example.com", "1234567890");
manager.addContact("Jane Smith", "jane@example.com", "9876543210");
manager.addContact("Bob Johnson", "bob@example.com");
manager.addContact("Alice Brown", "alice@example.com", "5555555555");
manager.addContact("Eve Davis", "eve@example.com");
manager.listContacts();
manager.searchContact("John");
manager.deleteContact(1);
manager.listContacts();
// type User =[string , number]
// function nikhil(args : User) :unknown{
//     return args.push(1)
// }
// console.log(nikhil(['str',212]))
