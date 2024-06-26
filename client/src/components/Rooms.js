import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import { useLazyQuery } from '@apollo/client';
import { ROOMS_BY_BUILDING } from '../utils/queries';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function RoomsByBuilding() {
    const { building } = useParams();
    const [roomsByBuilding, { loading, data }] = useLazyQuery(ROOMS_BY_BUILDING, {
        variables: { building: building},
    });

    useEffect(() => {
        roomsByBuilding(
            {
                variables: {
                    building: building
                }
            }
        )
    }, [building]);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
                <Row>
                    {data?.roomsByBuilding?.map((room, index) =>
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-4">
                            <Card style={{ maxWidth: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{`${room.building} ${room.roomNumber}`}</Card.Title>
                                    <Link to={`/room/${room._id}`}>
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}