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

class ContactClass{
    constructor( public id: number,
  public name: string,
  public email: string,
  public phone?: string){

    }
    print(): void{
        console.log(`${this.id}. ${this.name} | ${this.email}${this.phone ? ' | ' + this.phone : ''}`);
    }
}

class ContactManager{
    private contacts : ContactClass[] = []
    private nextId = 1

    addContact(name : string , email : string , phone? : string): void{
        const contact = new ContactClass(this.nextId++ , name , email , phone)
        this.contacts.push(contact)
        console.log(`Contact ${contact.name} added successfully`)
      
    }

    listContacts(): void{
        this.contacts.forEach(contact => contact.print())
    }

    searchContact(args: string): void{
        const res = this.contacts.filter(contact => contact.name.toLowerCase().includes(args.toLowerCase()))
         if (res.length === 0) {
      console.log(`No contacts found for "${args}".`);
      return;
    }

    console.log(`\nSearch Results for "${args}":`);
    res.forEach(contact => contact.print());
    }

    deleteContact(id : number): void{
        const index = this.contacts.findIndex(contact => contact.id === id)
        if (index === -1) {
            console.log(`Contact with ID ${id} not found.`)
            return
        }
        this.contacts.splice(index , 1)
        console.log(`Contact with ID ${id} deleted successfully`)


    }
}
const manager = new ContactManager()
manager.addContact("John Doe", "john@example.com", "1234567890");
manager.addContact("Jane Smith", "jane@example.com", "9876543210");
manager.addContact("Bob Johnson", "bob@example.com");
manager.addContact("Alice Brown", "alice@example.com", "5555555555");
manager.addContact("Eve Davis", "eve@example.com");
manager.listContacts()
manager.searchContact("John")
manager.deleteContact(1)
manager.listContacts()




        
        

// type User =[string , number]
// function nikhil(args : User) :unknown{
//     return args.push(1)

// }
// console.log(nikhil(['str',212]))