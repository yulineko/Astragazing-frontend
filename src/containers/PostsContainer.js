import React from 'react'
import axios from 'axios'
// import Post from '../components/Post'
// import PostForm from '../components/PostForm'

// const POSTS = "http://localhost:3001/posts"

const URL = "http://astrobin.com/api/v1/imageoftheday/?limit=1&api_key=d192c56fa607a0386b5052f4a333cabcdecc5e75&api_secret=736625fcb09b5c5ec312a047d3c57891ecf159a5&format=json"

class PostsContainer extends React.Component{

    state = {
        images: [],
        // clicked: false
    }

    
    componentDidMount(){
        axios.get(URL)
            .then(res => {
                console.log(res)
            })
            
    }

    // addPost = (post) => {
    //     this.setState({
    //         posts: [post, ...this.state.posts]
    //     })
    // }

    // handleClick = () => {
    //     this.setState({
    //         clicked: !this.state.clicked
    //     })
    // }

    render(){
        // let posts = this.state.posts.map(post => <Post key = {post.id} post = {post}/>)
        return(
            <div className = "main-div">
                <div id = "blog-text">
                {/* <button onClick = {this.handleClick}>Add a new post</button>
                {this.state.clicked ? <PostForm addPost = {this.addPost}/> : null} */}
                
                {/* {posts} */}
                <h3>Types of Telescopes</h3>
                
                <br></br>
                <h5>Refractor Telescopes</h5>
                The refractor telescope uses a lens to gather and focus light. The first telescopes built were refractors. The small telescopes sold in department stores are refractors, as well as, those used for rifle scopes.
                <br></br>
                {/* <img src = "https://www.astronomynotes.com/telescop/refractr.gif" alt = "1"/> */}
                <h5>Advantages</h5>
                Refractor telescopes are rugged. After the initial alignment, their optical system is more resistant to misalignment than the reflector telescopes.
                The glass surface inside the tube is sealed from the atmosphere so it rarely needs cleaning.
                Since the tube is closed off from the outside, air currents and effects due to changing temperatures are eliminated. This means that the images are steadier and sharper than those from a reflector telescope of the same size.
                light path for refractor telescope.
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/refractr.gif" alt = "1"/>
                </div>
                <br></br>
                <br></br>
                Though excellent refractors are still made, the disadvantages of the refractor telescope have blocked the construction of very large refractors for use in astronomical research.
                <br></br>
                <h5>Disadvantages</h5>
                All refractors suffer from an effect called chromatic aberration (``color deviation or distortion'') that produces a rainbow of colors around the image. Because of the wave nature of light, the longer wavelength light (redder colors) is bent less than the shorter wavelength light (bluer colors) as it passes through the lens. This is used in prisms to produce pretty rainbows, but can it ruin an image!
                different colors focus at different points.
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/chromaber.gif" alt = "1"/>
                </div>
                <br></br>
                <br></br>
                There a couple of ways to reduce chromatic aberration. One way uses multiple compensating lenses to counteract chromatic aberration. The other way uses a very long objective focal length (distance between the focus and the objective) to minimize the effect. This is why the early refracting telescopes were made very long.
                How well the light passes through the lens varies with the wavelength of the light. Ultraviolet light does not pass through the lens at all.
                How well the light passes through decreases as the thickness of the lens increases.
                It is difficult to make a glass lens with no imperfections inside the lens and with a perfect curvature on both sides of the lens.
                The objective lens can be supported only at the ends. The glass lens will sag under its own weight.
                Because of these disadvantages, the largest refractor telescope built is the one at Yerkes Observatory. It has an objective 1.02 meters (40 inches) across at one end of a 19.2-meter (63 feet) tube. The two largest refractors are shown below. The first picture is the 40-inch refractor at Yerkes Observatory. Clicking on the image will lead you to more information about this telescope (and better pictures!) in another window. The second picture shows an astronomer (Kyle Cudworth) next to the objective to give you an idea of the size of the telescope. Notice the size of the people in the first picture! The third picture is the 0.91-meter (36-inch) refractor at Lick Observatory. Notice the astronomer at the lower left. Clicking on the image will take you to the Lick Observatory webpage about the telescope in another window. The last picture is E.E. Barnard at the eyepiece of the Lick 36-inch.
                40-inch telescope tour astronomer at objective photo of 36-inch Lick refractor E E Barnard and Lick 36-inch.
                <br></br>
                <br></br>
                <br></br>
                <h5>Reflector Telescopes</h5>
                <br></br>
                The reflector telescope uses a mirror to gather and focus light. All celestial objects (including those in our solar system) are so far away that all of the light rays coming from them reach the Earth as parallel rays. Because the light rays are parallel to each other, the reflector telescope's mirror has a parabolic shape. The parabolic-shaped mirror focusses the parallel lights rays to a single point. All modern research telescopes and large amateur ones are of the reflector type because of its advantages over the refractor telescope.
                <br></br>
                <h5>Advantages</h5>
                <br></br>
                1. Reflector telescopes do not suffer from chromatic aberration because all wavelengths will reflect off the mirror in the same way.
                <br></br>
                2 .Support for the objective mirror is all along the back side so they can be made very BIG!
                <br></br>
                3 .Reflector telescopes are cheaper to make than refractors of the same size.
                <br></br>
                4 .Because light is reflecting off the objective, rather than passing through it, only one side of the reflector telescope's objective needs to be perfect.
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/reflectr.gif" alt = "1"/>
                </div>
                <br></br>
                <br></br>
                <h5>Disadvantages</h5>
                <br></br>
                1 .It is easy to get the optics out of alignment.
                <br></br>
                2 .A reflector telescope's tube is open to the outside and the optics need frequent cleaning.
                <br></br>
                3 .Often a secondary mirror is used to redirect the light into a more convenient viewing spot. The secondary mirror and its supports can produce diffraction effects: bright objects have spikes (the ``christmas star effect'').
                <br></br>
                Two famous reflector telescopes are shown below. The first picture is of the 5-meter (200-inch) Hale Telescope at Palomar Observatory. The number refers to the diameter of the objective (almost 17 feet across!). This was the largest telescope for several decades (from 1948 to 1976), though a larger telescope built in 1976 never lived up to its promise. Advances in ground-based telescopes did not really take off until the opening of the 10-meter Keck Telescope in 1993, so the Hale Telescope reigned supreme in astronomical research from 1948 to 1993, though the telescope is still very much in demand for world-class research. Clicking on the image will send you to a gallery of images of the telescope in another window. The telescope is the vertical piece in the middle with the mirror close to the floor. The huge diagonal piece is used to balance the telescope.
                <br></br>
                The second picture shows the path light travels in the 10-meter Keck Telescope at the W.M. Keck Observatory. The objective is composed of 36 hexagonal mirrors put together to act as one large mirror 10 meters across. Clicking on the image will give you more information about this telescope in another window. The small image next to it shows the 10-meter objective. The person in the red clothing at the center gives you a sense of scale. The Keck Observatory consists of two 10-meter telescopes placed next to each other on the top of Mauna Kea: Keck I opened in 1993 and Keck II opened in 1996. Lessons learned in building the Keck telescopes have been used to build several optical/infrared telescopes of similar or larger size since then. See the links at the bottom of the page for information about some truly huge ground-based telescopes in the works.
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/hale200.jpg" alt = "1"/>
                </div>
                <br></br>
                <br></br>
                In both the reflector and refractor telescopes, the focus is before the eyepiece, so the image in astronomical telescopes is upside down. Telescopes used to look at things on the Earth's surface use another lens to re-invert the image right-side up. Most reflector telescopes will use a smaller secondary mirror in front of the large primary mirror to reflect the light to a more convenient viewing spot. Isaac Newton used a flat secondary mirror at a 45° angle to reflect the light to an eyepiece at the side of the telescope tube near the top. Such an arrangement, called a newtonian design is used by many amateur telescopes.
                <br></br>
                Many reflector telescope use another light path design called the cassegrain design to reflect the light back through a hole in the primary mirror, so that detectors or the eyepiece can be conveniently placed behind the telescope. Most of the large telescopes used for research, including the Hubble Space Telescope, are of this design. Some of the largest telescopes like the Hale Telescope and the Keck Telescope have places to put detectors at the prime focus, where the light from the primary mirror first comes to a focus. The images in reflector telescopes do not have holes or shadows in them because the light rays from the unblocked parts of the primary mirror are all added together when they are focussed together. Even though part of the primary mirror is blocked or missing, there is still plenty of usable primary mirror space to gather the light.
                <br></br>
                Both types of telescope can suffer from a defect called spherical abberation so that not all of the light is focussed to the same point. This can happen if the mirror is not curved enough (shaped like part of a sphere instead of a paraboloid) or the glass lens is not shaped correctly. The Hubble Space Telescope objective suffers from this (it is too flat by 2 microns, about 1/50 the width of a human hair) so it uses corrective optics to compensate. The corrective optics intercept the light beams from the secondary mirror before they reach the cameras and spectrographs. Fortunately, the Hubble Space Telescope's spherical aberration is so perfect, that it is easy to correct for!
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/hst-psf-costarb.gif" alt = "1"/>
                </div>
                <br></br>
                <br></br>
                Even before the 1993 servicing mission that installed the corrective optics 2.5 years after the Hubble Space Telescope was put in orbit (launched in April 1990), astronomers were able to get significant results from the telescope. The images were computer-enhanced to correct for the spherical aberration to produce sharper images than from any ground-based telescope. Also, astronomers were able to observe ultraviolet light from celestial objects and fainter objects than could be seen from the ground. However, the computer processing took a long time and the aberration prevented the focusing of most of the light. This meant that astronomers could not see the very faint (and distant) objects they were looking for. Astronomers and the public were very pleased after the corrective optics were installed.
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/WFPCM100Comp2b.jpg" alt = "1" height = "200px"/>
                </div>
                <br></br>
                <br></br>
                Ground-based telescopes larger than Keck that will outperform even the Hubble Space Telescope (in the optical and infrared bands using adaptive optics) are being built now. Here are links to some of these future very large telescopes. Selecting any of the links will bring up the site in a new window (in front of or behind this window). The diagram below compares many current and future telescopes.
                <br></br>
                <br></br>
                <div className = "image-container">
                    <img id = "telescope" src = "https://www.astronomynotes.com/telescop/Comparison_optical_telescope_primary_mirrors.svg.png" alt = "1" height = "500px"/>
                </div>
                <br></br>
                <br></br>
                Nick Strobel




                
                </div>
            </div>
        )
    }
}

export default PostsContainer