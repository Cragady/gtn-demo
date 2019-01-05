import React from 'react';

export const Story = props => {
    return(
        // <section className='m1-story-mins col-md-2 col-sm-3 col-12 my-1 mx-2 p-0'>
            <div className={props.className}>
                {props.imgpass ? (
                    <div>
                        <img className='card-header img-fluid p-0' alt='' src={props.imgpass} />
                        <div className='m1-title'>{props.story}</div>
                    </div>

                ) : ( 
                    <div className='m1-title'>{props.story}</div>
                )}
            </div>
        // </section>
    )
}