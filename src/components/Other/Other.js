import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Other = () => {
    return (
        <div className="container">
            <h2 style={{color:"green"}}>Others Content </h2>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2021-08/GettyImages-913682216_805.jpeg?itok=BRwNskV1" />
    <Card.Body>
      <Card.Title>Live online classes</Card.Title>
      <Card.Text>
      Interactive group classes with expert teachers. Free 7-day trial
      </Card.Text>
    </Card.Body>
    <Button variant="success">Learn More</Button>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2021-09/GettyImages-1072206958_0.jpg?itok=dFLkGES-" />
    <Card.Body>
      <Card.Title>Self-study online course</Card.Title>
      <Card.Text>
      Unlimited access to online English courses for £5.99 per month
      </Card.Text>
    </Card.Body>
    <Button variant="success">Learn More</Button>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/medium/public/2021-09/RS-1138994168_805_1.jpeg?itok=70zrxohC" />
    <Card.Body>
      <Card.Title>Personal Tuition</Card.Title>
      <Card.Text>
      Online one-to-one English tutoring – enjoy your first session for only $1
      </Card.Text>
    </Card.Body>
    <Button variant="success">Learn More</Button>
  </Card>
</CardGroup>
        </div>
    );
};

export default Other;