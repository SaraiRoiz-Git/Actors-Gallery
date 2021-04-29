import React from "react"
import { Form } from "react-bootstrap";
import ActorsData from "../data models/ActorsData"
import ActorCard from "./ActorCard"

class FilterInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Form.Control
                    value={this.props.filter}
                    type="text"
                    placeholder="Normal text"
                    onChange={this.props.changeFilter} />
            </div>
        )
    }
}

export default FilterInput