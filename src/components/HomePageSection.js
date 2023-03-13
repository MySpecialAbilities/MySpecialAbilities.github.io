import React from "react"
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import "../css/forHomePageSection.css"
import {Responsive} from 'semantic-ui-react'

class HomePageSection extends React.Component {
    constructor(props) {
        super(props)
    }

    handleName = (str) => {
        let str1 = str.toUpperCase()
        let str2 = str1.split("").map(ele => {
            if (ele === "_") {
                console.log("found")
                return ele = " "
            } else {
                return ele
            }
        })
        return str2.join("")
    }

    makeCards = (arr) => {
        let count = 1
        return arr.map(ele => {
            count += 1
            if (count % 2 === 0) {
                return <Grid className="homePageHugeSession">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={ele.img} style={{ width: "800px" }} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div className="wordWrapper">
                                <h1>{ele.title}</h1>
                                <p>{ele.teaser}</p>
                                <Button
                                    // onClick={this.handleClick}
                                    as={Link}
                                    name="learnAbout"
                                    className='reasonButton'
                                    to='/Learning'>Start Learning</Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            } else {
                return <Grid className="homePageHugeSession">
                    <Grid.Row >
                        <Grid.Column width={8}>
                            <div className="wordWrapper">
                                <h1>{ele.title}</h1>
                                <p>{ele.teaser}</p>
                                <Button
                                    // onClick={this.handleClick}
                                    as={Link}
                                    name="team"
                                    className='reasonButton'
                                    to='/Mentorship'>Start Connecting</Button>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src={ele.img} style={{ width: "800px" }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
        })
    }

    makeCardsMobile = (arr) => {
        let count = 1
        return arr.map(ele => {
            count += 1
            
            return <Grid className="homePageHugeSession">
                <Grid.Column>
                    <Grid.Column width={8}>
                        <Image src={ele.img} style={{ width: "800px" }} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div className="wordWrapper">
                            <h1>{ele.title}</h1>
                            <p>{ele.teaser}</p>
                            <Button
                                // onClick={this.handleClick}
                                as={Link}
                                name="learnAbout"
                                className='reasonButton'
                                to='/Learning'>Start Learning</Button>
                        </div>
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            
        })
    }

    // makeCards = (arr) => {
    //     return arr.map(ele => {
    //         return <Tilt className="Tilt" style={{ width: "calc(100%)" }} options={{ reverse: true, max: 35, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)", }}>
    //                 <Card className="Tilt-inner" id="cardsid" to={ele.route} as={Link}>
    //                     <Image src={ele.img} wrapped ui={false} />
    //                     <Card.Content>
    //                         <Card.Header>{ele.title}</Card.Header>
    //                         <Card.Description>
    //                             {ele.teaser}
    //                         </Card.Description>
    //                     </Card.Content>
    //                 </Card>
    //             </Tilt>
    //     });
    // }

    render() {
        let arr = this.props.forCards
        let name = this.props.name
        const processedName = this.handleName(name)
        // console.log(arr)
        return <div>
            <Responsive minWidth={1024}>
            {this.makeCards(arr)}
            </Responsive>
            <Responsive maxWidth={1023}>
            {this.makeCardsMobile(arr)}
            </Responsive>
           
        </div>
    }
}

export default HomePageSection