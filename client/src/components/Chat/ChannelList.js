import React from 'react';
import { Channel } from './Channel';
import { Grid } from '@mui/material';

export class ChannelList extends React.Component {

    handleClick = id => {
        this.props.onSelectChannel(id);
        
    }

    handleLeave = participants => {
        this.props.onLeaveChannel(participants);
    }
    
    render() {
        console.log("propsChannelList:",this.props);
        let list = <div >There is no channels to show</div>;
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} img={c.img} dis={c.dis} participants={c.participants} onClick={this.handleClick} onLeave ={this.handleLeave}/>);
        }
        return (
            <div>
               <Grid container>
                    {list}
                </Grid>
            </div>
        );
    };
};