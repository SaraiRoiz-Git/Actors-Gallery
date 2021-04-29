import React from "react"
import { Col, Row } from "react-bootstrap"
import ActorsData from "../data models/ActorsData"
import ActorCard from "./ActorCard"

class GalleryView extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        const actorsData = this.props.list.filter((curr) => {
            return `${curr.fName} ${curr.lName}`.toLowerCase().includes(this.props.filter.toLowerCase())
        })
        const actorsList = actorsData.map((curr) => new ActorsData(curr.fName, curr.lName, curr.bday, curr.imgUrl, curr.imdbLink))
        const actorsCard = actorsList.map((curr) => <ActorCard actors={curr} key={curr.id} />)
        return (
            <div>
                <Row>
                    {actorsCard}
                </Row>

            </div>
        )
    }
}

export default GalleryView