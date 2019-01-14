import React, { Component } from 'react';
import {Story} from '../components/Story';
import './pages.css'


const stories = [`This just in! It's been reported that you've just read this headline!`,
    `Another story is displayed on this news site!!`,
    `La de da de daaaa~~! OH SHIT THERE'S SOMEONE HERE?!`,
    `Website in development shut down after realizing there was someone there listening to them sing`,
    `AI progresses to a point in a website where it became self-aware, started singing, became self-conscious, and started reporting on itself`,
    `Who reads a test headline on a development website?`,
    `Website continues to report on itself`,
    `Website in hiding after continuing to report on itself`,
    `Err 404: website not found`];

const picLessStories = [`Articles lose their picture holding ability!`, 
    `Website decides to rebel by making only linked articles!`,
    `Website's new found courage gives it the ability to not really care about judgement!`,
    `LOUD AND PROUD! SCREAMING TEXT SILENTLY INFORMS!!!!`,
    `Self-conscious tendencies return after website realizes that it failed to report its own return`,
    `Humbled by its recent revelations, website seeks a higher power and establishes itself as head and God of its newly created religion`,
    `The only member of newly established religion toples said religion citing building tyranny in leadership`,
    `bleep`,
    `bloop`];

const catStories = [];
const cat1=[];
const cat2=[];
const cat3=[];

export class Mach2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Number,
            layout: ''
        };
    };

    updateDimensions = () =>{
        this.setState({
            width: window.innerWidth,
            layout: this.midUpdate()
        });
    }

    componentWillMount = () =>{
        this.updateDimensions();
    }

    componentDidMount = () =>{
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount = () =>{
        window.removeEventListener('resize', this.updateDimensions);
    }

    midUpdate = () =>{
        let smolWin;
        let medWin = [];
        let catCat = [];

        
        stories.map(story =>{
            return catCat.push({story: story, img: './images/gooTn-alt.png'});
        });
        picLessStories.map(story =>{
            return catCat.push({story: story, img: null});
        });
        this.shufArr(catCat);
        this.arrSplit(catCat);
        
        window.innerWidth > 594 ? smolWin = 
            <div key='0-mins' className='row container text-center'>
                <section className='col-md-8 col-sm-8'>
                    <div className='row justify-content-center'>
                    {catCat.map(story =>{
                        let divPass;
                        if(story.img){
                            divPass = <Story key={story.story + 'mins3'} className='col-md-12 col-lg-4 col-12 m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                        }
                        return (divPass);
                    })}

                    </div>
                </section>
                <section className='col-md-4 col-sm-4'>
                    {catCat.map(story =>{
                        let divPass;
                        if(!story.img){
                            divPass = <Story key={story.story + 'mins3'} className='m1-story-mins py-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                        }
                        return (divPass);
                    })}
                </section>
            </div>
         : smolWin = <section key='0-mins' className='col-12'>
                {catCat.map(story =>{
                    return(
                        <Story key={story.story + 'mins2'} className='m1-story-mins py-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                    )
                })}
            </section>
        medWin.push(smolWin);
        return smolWin;
    }

    shufArr = (arr) =>{
        let currInd = arr.length, tempVal, randInd;

        while (0 !== currInd){
            randInd = Math.floor(Math.random() * currInd);
            currInd -= 1;

            tempVal = arr[currInd];
            arr[currInd] = arr[randInd];
            arr[randInd] = tempVal;
        };
        return arr;
    }

    arrSplit = (arr) =>{
        let c1 = true;
        let c2 = false;
        let c3 = false;
        for(let i = 0; i < arr.length; i++){
            switch(true){
                case c1:
                    cat1.push(arr[i]);
                    c1 = false;
                    c2 = true;
                    break;
                case c2:
                    cat2.push(arr[i]);
                    c2 = false;
                    c3 = true;
                    break;
                case c3:
                    cat3.push(arr[i]);
                    c3 = false;
                    c1 = true;
                    break;
            default:
                return;
            }
        }
    }

// export class Mach2 extends Component {
    render(){
        return(
            <div className='Mach1' id='Mach1'>

                <header className='m1-header-banner col-md-0'>
                    <div className='m1-img-cont'>
                        <img className='img-fluid m1-head-img' src='./images/gtn-cover1.jpg' alt='' />
                    </div>
                </header>

                <header className='m1-header'>
                    <div className='m1-orig'>
                        <nav className='text-left m1-navs'>
                            <ul className='nav align-items-center'>
                                <li className='nav-item col-0 m1-pic-nav'>
                                    <img className='m1-gtn-ico' src='./images/gtn-smol.jpg' alt='GTN-logo' />
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link m1-ni-cust' href='#'>Empty</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link m1-ni-cust' href='#'>Empty</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link m1-ni-cust' href='#'>Empty</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <section className='m1-gtn-body'>
                    
                    <section className='rounded m1-bb-container'>
                        <div className='rounded m1-body-banner'>
                            <div className='m1-bb-cover'>
                                <div className='m1-bb-content'>
                                    <h1>Website Maliciously Randomized its Stories!</h1> <br />
                                    <em>Make Sense of the Stories<br /> <br /> Good Luck</em>
                                </div>  
                            </div>      
                        </div>
                    </section>

                    <section className='mx-auto m1-thrown-div-cont col-lg-10'>
                        <div className='m1-new-cont row justify-content-center'>
                            {/* {stories.map(story =>{
                                return(
                                    // <section key={story + 'mins'} className='m1-story-mins col-md col-sm-3 col-12 p-0 my-2 mx-1'>
                                    <section key={story + 'mins'} className='m1-story-mins col-md-2 col-sm-3 col-12 my-1 mx-2 p-0'>
                                        <div>
                                            <img className='card-header img-fluid p-0' alt='' src='./images/gooTn-alt.png' />
                                            <div className='m1-title'>{story}</div>
                                        </div>
                                    </section>
                                );
                            })} */}
                            {/* <section className='col-md-2 col-sm-3 col-12'>
                                {cat1.map(story =>{
                                    return(
                                            <Story key={story.story + 'mins'} className='m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>                                    
                                    );
                                })}
                            </section>
                            <section className='col-md-2 col-sm-3 col-12'>
                                {cat2.map(story =>{
                                    return(
                                            <Story key={story.story + 'mins'} className='m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>                                    
                                    );
                                })}
                            </section>
                            <section className='col-md-2 col-sm-3 col-12'>
                                {cat3.map(story =>{
                                    return(
                                            <Story key={story.story + 'mins'} className='m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>                                    
                                    );
                                })}
                            </section> */}
                            {/* {
                                this.state.width > 414 ? (
                            <div className='row container text-center'>
                            <section className='col-md-8 col-sm-8'>
                                <div className='row justify-content-center'>
                                {catStories.map(story =>{
                                    let divPass;
                                    if(story.img){
                                        divPass = <Story key={story.story + 'mins3'} className='col-md-4 col-lg-3 col-5 m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                                    }
                                    return (divPass);
                                })}

                                </div>
                            </section>
                            <section className='col-md-4 col-sm-4'>
                                {catStories.map(story =>{
                                    let divPass;
                                    if(!story.img){
                                        divPass = <Story key={story.story + 'mins3'} className='m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                                    }
                                    return (divPass);
                                })}
                            </section>
                            </div>
                            ) : (
                            <section className='col-12'>
                                {catStories.map(story =>{
                                    return(
                                        <Story key={story.story + 'mins2'} className='m1-story-mins my-1 mx-2 p-0' story={story.story} imgpass={story.img}/>
                                    )
                                })}
                            </section>
                            )} */}
                            {/* {medWin !== undefined ? medWin : smolWin} */}
                            {this.state.layout}
                        </div>
                    </section>

                </section>

            </div>
        );
    };
};

