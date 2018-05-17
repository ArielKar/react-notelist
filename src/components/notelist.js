import React from 'react';

const Notelist = (props) => {

    console.log(props.items);

    const notes = props.items.map( (note, idx) => {
        return (<li className='note-item' onClick={props.selectNote.bind(null, note)} key={idx}><h4>{note.title}</h4></li>);
    });
    console.log(notes);

    return (
        <ul className='note-list'>{notes}</ul>
    )
};

export default Notelist;