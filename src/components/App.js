import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import Display from './display';
import Notelist from './notelist';
import Addnote from "./addnote";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNote: {title: "This One Note", description: 'I have been waiting. I\'ve been waiting all day. Waiting for Gus to send one of his men to kill me. And it\'s you. Who do you know, who\'s okay with using children, Jesse? Who do you know... who\'s allowed children to be murdered... hmm? Gus! He has, he has been ten steps ahead of me at every turn. And now, the one thing that he needed to finally get rid of me is your consent and boy he\'s got that now. He\'s got it. And not only does he have that, but he manipulated you into pulling the trigger for him. '},
            items: [
                {title: 'This One Note', description: 'I have been waiting. I\'ve been waiting all day. Waiting for Gus to send one of his men to kill me. And it\'s you. Who do you know, who\'s okay with using children, Jesse? Who do you know... who\'s allowed children to be murdered... hmm? Gus! He has, he has been ten steps ahead of me at every turn. And now, the one thing that he needed to finally get rid of me is your consent and boy he\'s got that now. He\'s got it. And not only does he have that, but he manipulated you into pulling the trigger for him. '
            },{title: 'This is Another Note', description: "No! You don't even believe that! Gus has cameras everywhere, please. Listen to yourself! No, he has known everything, all along. Where were you today? In the lab? And you don't think it's possible that Tyrus lifted the cigarette out of your locker? Come on! Don't you see? You are the last piece of the puzzle. You are everything that he's wanted."
            },{title: 'This is Third Note', description: 'You\'re his cook now. You\'re the cook and you have proven that you can run a lab without me and now that cook has reason to kill me. Think about it! It\'s brilliant. So go ahead. If you think that I am capable of doing this, then go ahead. Put a bullet, in my head, and kill me right now. DO IT! Do it. Do it. Do it. '
            }],
        }
    }

    setSelectedNote = (item) => {
        this.setState({selectedNote: item});
    };

    addNote = (noteObj) => {
        this.setState({
            items: this.state.items.concat([noteObj])
        });
    };

    render() {
        return (
            <div className="container">
                <h1 id='title'>My Notes</h1>
                <Notelist selectNote={this.setSelectedNote} items={this.state.items}/>
                <Display title={this.state.selectedNote.title}
                         description={this.state.selectedNote.description} />
                <Addnote addNewNote={this.addNote} />
            </div>
        );
  }
}

export default App;
