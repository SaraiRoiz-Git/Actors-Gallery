import moment from "moment";
import { v4 as uuid } from "uuid"
class ActorsData {
    constructor(firstName, lastName, birthDay, image, ImdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.image = image;
        this.ImdbLink = ImdbLink;
        this.Id = uuid()
    }

    calcAge = () => {
        const curr = moment();
        return curr.diff(this.birthDay, "years");
    }
}
export default ActorsData