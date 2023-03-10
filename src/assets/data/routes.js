import homePic from '../pics/homePic.png'
import descriptionPic from "../pics/learning.jpg"
import teamPic from "../pics/teamPic.jpg"

const routes = {
    home: [{
        title: "Home",
        img: homePic,
        route: "/",
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    WhyJoinUs: [{
        title: "Learning",
        img: descriptionPic,
        route: "/Learning",
        teaser: "Our courses have helped countless individuals discover and amplify their talents to the world"
    }, {
        title: "Mentorship",
        img: teamPic,
        route: "/Mentorship",
        teaser: "Network and build connections with highly successful neurodivergent members"
    }]
}

export default routes