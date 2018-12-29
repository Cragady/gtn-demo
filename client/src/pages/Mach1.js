import React, { Component } from 'react';
import './pages.css'

const stories = [`This just in! It's been repored that you've just read this headline!`,
    `Another story is displayed on this news site!!`,
    `La de da de daaaa~~! OH SHIT THERE'S SOMEONE HERE?!`,
    `Website in development shut down after realizing there was someone there listening to them sing`,
    `AI progresses to a point in a website where it became self-aware, started singing, became self-conscious, and started reporting on itself`,
    `Who reads a test headline on a development website?`,
    `Website continues to report on itself`,
    `Website in hiding after continuing to report on itself`,
    `Err 404: website not found`];

export class Mach1 extends Component {
    render(){
        return(
            <div className='Mach1'>

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
                                    <h1>head banner news goes here</h1> <br />
                                    <em>Short description of story<br /> <br /> Goes Here</em>
                                </div>  
                            </div>      
                        </div>
                    </section>

                    <section className='mx-auto m1-thrown-div-cont col-lg-10'>
                        <div className='m1-new-cont row justify-content-center'>
                            {stories.map(story =>{
                                return(
                                    // <section key={story + 'mins'} className='m1-story-mins col-md col-sm-3 col-12 p-0 my-2 mx-1'>
                                    <section key={story + 'mins'} className='m1-story-mins col-md-2 col-sm-3 col-12 my-1 mx-2 p-0'>
                                        <div>
                                            <img className='card-header img-fluid p-0' alt='' src='./images/gooTn-alt.png' />
                                            <div className='m1-title'>{story}</div>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </section>

                </section>

            </div>
        );
    };
};

