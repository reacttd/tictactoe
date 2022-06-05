import React from 'react';

const Card = () =>
{
    <Card style={styles.card}>
        <CardImage orientation="top" src="/images/tsbam.png" />
        <CardBody style={styles.body}>
            <CardTitle>Card Title</CardTitle>
            <CardText>
                Some quick example text to build on card title and make up the body of the card.
            </CardText>
            <MyBtn btnText="Go Somewhere" style={styles.btn}/>
        </CardBody>
    </Card>
}
export default Card;

const styles={
    card:{
        display:'flex',
        flexDirection:'column',
        backgroundColor: 'whitesmoke',
        color: 'aqua'
    }
}