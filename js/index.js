class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo(attr) {
        switch(attr) {
            case "name":
                return this.name;
            case "age":
                return this.age;
            default:
                return "unknown attribute";
        }
    }
}