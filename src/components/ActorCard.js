import React from "react"
import { Card, Col } from "react-bootstrap"

class ActorCard extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const actor = this.props.actors

    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={actor.image} />
          <Card.Body>
            <Card.Title>{actor.firstName} {actor.lastName}</Card.Title>
            <Card.Text>
              BirthDay:{actor.birthDay}
            </Card.Text>
            <Card.Text>
              <a href={actor.ImdbLink}>IMDB</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    )
  }
}

export default ActorCard