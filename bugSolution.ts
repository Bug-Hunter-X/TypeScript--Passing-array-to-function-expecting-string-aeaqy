function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
    persons.forEach(person => console.log(greeter(person)));
}

let user = ["Jane User", "John User"];

greeterArray(user); //Correct usage