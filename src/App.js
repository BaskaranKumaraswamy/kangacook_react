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
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Biryani</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>

                    <div><Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Grill Chicken</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>

                    <div><Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Grill Beef</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>

                </div>
            </div>
        );
    }
}

