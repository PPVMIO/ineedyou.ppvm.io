import React from 'react';
import './ContentComponent.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import YouTubeEmbed from 'react-youtube-embed'

//charli xcx, asap rocky
const VIDEOS = ['_eLryuBCO-M', 'TbJE-KVZvTA']
const BUTTONTEXT = ['inspiration', 'i need you']
class ContentComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentImage: '',
            backgroundStyle: {
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
            },
            showVideo: false,
            video: VIDEOS[0],
            buttonText: BUTTONTEXT[0]

        }
    }

    importAll(r) {
        let images = [];
        console.log('hello ')
        console.log('import all')
        console.log(r.keys().map(r))
        r.keys().map((item) => {
            images.push(r(item).default);
        });
        this.setState({
            images: images,
            currentImage: images[0]
        })
    }

    updateCurrentImage = () => {
        const newImage = this.state.images[Math.floor(Math.random() * this.state.images.length)]
        this.setState((state, props) => ({
            currentImage: newImage,
            backgroundStyle: {
                backgroundImage: 'url(' + newImage + ')',
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
            }
        }));

    }

    doSomething = (values) => {
        console.log("show values")
        console.log(JSON.stringify(values, null, 2))
        this.setState({
            showVideo: true
        })
        console.log(this.state)
    }

    onClickToggle = () => {
        if (this.state.video == VIDEOS[0]) {
            this.setState({
                video: VIDEOS[1],
                buttonText: BUTTONTEXT[1]
            })
        } else {
            this.setState({
                video: VIDEOS[0],
                buttonText: BUTTONTEXT[0]
            })
        }
    }

    componentDidMount() {
        this.importAll(require.context('../images', false, /\.(jpeg)$/));
        setInterval(this.updateCurrentImage, 5000);
    }

    render() {

        return <div style={this.state.backgroundStyle}>
            {!this.state.showVideo &&
                <div class="password">
                    <h1>I NEED YOU</h1>
                    <Formik

                        initialValues={{
                            password: '',
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.password) {
                                errors.password = 'password required';
                            } else if (
                                values.password !== 'abc'
                            ) {
                                errors.password = "that ain't it";
                            }
                            return errors;
                        }}
                        onSubmit={this.doSomething}
                    >
                        <Form>
                            <h2 id="error-message"><ErrorMessage name="password" /></h2>
                            <Field id="password" name="password" placeholder="password" />
                            <button type="submit">enter</button>
                        </Form>
                    </Formik>
                </div>
            }
            {this.state.showVideo &&
                <div style={this.state.backgroundStyle}>
                    <div class="video">
                        <h1>I NEED YOU</h1>
                        <br></br>
                        <YouTubeEmbed id={this.state.video}></YouTubeEmbed>
                        <br></br>
                        <br></br>
                        <div class="buttons">
                            <button onClick={this.onClickToggle}><a>{this.state.buttonText}</a></button>
                            <button><a href="https://open.spotify.com/track/3Gn41aRejWCung1sbuo67G?si=gbQZyOTiR2eOJ_PyDx7xkQ">spotify</a></button>
                            <button><a href="https://github.com/PPVMIO/ineedyou.ppvm.io">src</a></button>
                            <br></br>
                            <button><a href="https://instagram.com/ppvm.io/">paul</a></button>
                            <button><a href="https://www.instagram.com/ingenioso.airlines/">nico</a></button>
                            <button><a href="https://www.instagram.com/1.800.dev/">dev</a></button>
                        </div>
                        <p>by <a href="https://ppvm.io">PPVMIO</a></p>
                    </div>
                </div>
            }
        </div>
    }
}

export default ContentComponent;
