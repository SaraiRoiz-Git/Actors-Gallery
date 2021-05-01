import React from "react"
import GalleryView from "./GalleryView"
import FilterInput from "./FilterInput"
import { Container } from "react-bootstrap"
class ActorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { filter: "" }
    }

    changeFilter = (e) => {
        this.setState({
            filter: e.target.value
        }
        )
    }

    render() {
        const actors = this.props.list;
        return (
            <Container>
                <FilterInput col="6" filter={this.state.filter} changeFilter={this.changeFilter} />
                <GalleryView list={actors} filter={this.state.filter} />
            </Container>

        )
    }
}

export default ActorPage