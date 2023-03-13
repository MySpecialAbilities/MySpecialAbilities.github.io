import React from 'react'
import { Button, Card, Grid, Rating } from 'semantic-ui-react'
import {Responsive} from 'semantic-ui-react'
import "../css/forCardGroup.css"

const CardGroup = () => ( <div>
    <Responsive minWidth={1024}>
    <Grid id="ratingGrid">
        <Grid.Row>
            <Grid.Column width={4}>
                <Card className="ratingCard">
                    <Card.Content>
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Description>
                            I really enjoyed the mentorship and courses this site offers. I have learned a lot and I am very grateful for the opportunity.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="ratingCard">
                    <Card.Content>
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Description>
                            The hours, minutes and seconds stand as visible reminders that your effort put them all there.
                            <br />
                            Preserve until your next run, when the watch lets you see how Impermanent your efforts are.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="ratingCard">
                    <Card.Content>
                        <Card.Header>Jenny Lawrence</Card.Header>
                        <Card.Description>
                            Dude, this is awesome. Thanks so much! I can't wait to show my friends.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="ratingCard">
                    <Card.Content>
                        <Card.Header>Gio Marco</Card.Header>
                        <Card.Description>
                            This REALLY helps me out. Thanks so much! I can't wait to show my friends. 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </Responsive>

    <Responsive maxWidth={1023}>
        <Grid id="ratingGrid">
            <Grid.Column>
                <Grid.Column width={4}>
                    <Card className="ratingCard">
                        <Card.Content>
                            <Card.Header>Steve Sanders</Card.Header>
                            <Card.Description>
                                I really enjoyed the mentorship and courses this site offers. I have learned a lot and I am very grateful for the opportunity.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card className="ratingCard">
                        <Card.Content>
                            <Card.Header>Molly Thomas</Card.Header>
                            <Card.Description>
                                The hours, minutes and seconds stand as visible reminders that your effort put them all there.
                                <br />
                                Preserve until your next run, when the watch lets you see how Impermanent your efforts are.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card className="ratingCard">
                        <Card.Content>
                            <Card.Header>Jenny Lawrence</Card.Header>
                            <Card.Description>
                                Dude, this is awesome. Thanks so much! I can't wait to show my friends.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Card className="ratingCard">
                        <Card.Content>
                            <Card.Header>Gio Marco</Card.Header>
                            <Card.Description>
                                This REALLY helps me out. Thanks so much! I can't wait to show my friends. 
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5}  size='massive' disabled/>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Column>
        </Grid>
      
    </Responsive>
    </div>
)

export default CardGroup
