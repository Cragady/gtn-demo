import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import Markdown from 'react-markdown';
import './pages.css';
require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');

export class Editor extends Component{
    constructor(props){
        super(props);
        this.state={
            codeText: ''
        }
    }

    textChange = (event) =>{
        const {target: name } = event;
        this.setState({
            codeText: event
        });
    };

    render(){
        return(
            <section className='row p-2'>
                <div className='col-12'>Hello World</div>
                <CodeMirror 
                    id='codemirror-area' className='text-left col-md-12 col-lg-5' 
                    options={{ mode: 'markdown', theme: 'monokai default'}} 
                    name='codeText'
                    value={this.state.codeText}
                onChange={this.textChange} />
                <Markdown className='text-left col-md-12 col-lg-5' source={this.state.codeText} />
            </section>
        )
    }
}