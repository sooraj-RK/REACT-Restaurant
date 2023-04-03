import React from 'react'
import { Card } from 'react-bootstrap'

function Restcard({restdata}) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={restdata.photograph} />
                <Card.Body>
                    <Card.Title>{restdata.name}</Card.Title>
                    <Card.Text>
                        <p>
                            <strong>cuisine Type</strong> {restdata.cuisine_type}
                        </p>

                        <p>
                            <strong>Neighbourhood</strong> {restdata.neighborhood}
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Restcard