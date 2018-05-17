import React from 'react';

class Addnote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    changeDesc = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    addNewNote = () => {
        this.props.addNewNote(Object.assign(this.state));
    };

    render() {
        return (
            <div className='new-note-wrapper'>
                <form>
                    <p>
                        <label htmlFor='title'>Title</label><br/>
                        <input value={this.state.title} id='title' name='title' type="text" onChange={this.changeTitle} />
                    </p>
                    <p>
                        <label htmlFor='description'>Description</label><br/>
                        <textarea value={this.state.description} name="description" id="description" cols="30" rows="10" onChange={this.changeDesc} />
                    </p>
                    <button type="button" onClick={this.addNewNote}>Add Note</button>
                </form>
            </div>
        );
    }
}

export default Addnote;