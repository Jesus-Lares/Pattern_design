// Product
class PersonTS {

    private name: string;
    private lastName: string;
    private age: number;
    private country: string;
    private city: string;
    private hobbies: string[];

    constructor(name: string,
        lastName: string,
        age: number,
        country: string,
        city: string,
        hobbies: string[]) {

        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}

// interface Builder
interface PersonBuilderTS {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setName(name: string): PersonBuilderTS;
    setLastName(lastName: string): PersonBuilderTS;
    setAge(age: number): PersonBuilderTS;
    setCountry(country: string): PersonBuilderTS;
    setCity(city: string): PersonBuilderTS;
    addHobby(hobby: string): PersonBuilderTS;
    build(): PersonTS;
}

// ConcreteBuilder
class NormalPersonBuilder implements PersonBuilderTS {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor() {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    reset(): void {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name: string): PersonBuilderTS {
        this.name = name;
        return this;
    }

    setLastName(lastName: string): PersonBuilderTS {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): PersonBuilderTS {
        this.age = age;
        return this;
    }

    setCountry(country: string): PersonBuilderTS {
        this.country = country;
        return this;
    }
    setCity(city: string): PersonBuilderTS {
        this.city = city;
        return this;
    }

    addHobby(hobby: string): PersonBuilderTS {
        this.hobbies.push(hobby);
        return this;
    }

    build(): PersonTS {
        const person = new PersonTS(
            this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }
}

// director
class PersonDirector {
    private personBuilder: PersonBuilderTS;

    constructor(personBuilder: PersonBuilderTS) {
        this.personBuilder = personBuilder;
    }

    setPersonBuilder(personBuilder: PersonBuilderTS) {
        this.personBuilder = personBuilder;
    }

    createSimplePerson(name: string, lastName: string) {
        this.personBuilder.setName(name)
            .setLastName(lastName);
    }
}

// creaci??n 1

const personBuilder = new NormalPersonBuilder();

const hector = personBuilder.setName("H??ctor")
    .setLastName("De Le??n")
    .addHobby("Comer")
    .addHobby("Dormir")
    .build();
console.log(hector);

// creaci??n 2
const juan = personBuilder.setName("Juan")
    .setLastName("P??rez")
    .setAge(20)
    .addHobby("Comer")
    .setCountry("M??xico")
    .setCity("Guadalajara")
    .addHobby("Cerveza")
    .build();
console.log(juan);

// creaci??n con director
const director = new PersonDirector(personBuilder);
director.createSimplePerson("John", "Cena");
const johnCena = personBuilder.build();

console.log(johnCena);

