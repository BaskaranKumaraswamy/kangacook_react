import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    render() {

        return (
            <div className="game">
                <div className="game-info">
                    <div><Card style={{width: '18rem'}}>
                        <img src={require('./image/paella.jpg')}/>
                        <Card.Body>
                            <Card.Title>Biryani</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">*****</small>
                        </Card.Footer>
                    </Card></div>

                    <div><Card style={{width: '18rem'}}>
                        <img src={require('./image/grill.jpg')} width={350} height={250} alt='Grill' />
                        <Card.Body>
                            <Card.Title>Grill Chicken</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">****</small>
                        </Card.Footer>
                    </Card></div>

                    <div><Card style={{width: '18rem'}}>
                        <img src={require('./image/paella.jpg')}/>
                        <Card.Body>
                            <Card.Title>Grill Beef</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">***</small>
                        </Card.Footer>
                    </Card></div>

                </div>
            </div>
        );
    }
}

