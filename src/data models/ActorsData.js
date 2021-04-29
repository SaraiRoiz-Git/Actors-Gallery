import { v4 as uuid } from "uuid"
class ActorsData {
    constructor(firstName, lastName, birthDay, image, ImdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.image = image;
        this.ImdbLink = ImdbLink
        this.Id = uuid()
        // this.Age = this.calcAge();
    }

    // calcAge = ()=>{

    // }
}
export default ActorsData