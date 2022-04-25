import React from 'react';
import { Channel } from './Channel';
import { Grid } from '@mui/material';

export class ChannelList extends React.Component {
    
    handleClick = (id) => {
       console.log("this.props:",this.props);
        this.props.onSelectChannel(id);
    }

    // handleLeave = (id,participants) => {
    //     console.log("this.props:",this.props);
    //     console.log(participants);
    //     this.props.onLeaveChannel(id,participants);
    // }
    
    render() {
        console.log("propsChannelList:",this.props);
        let list = <div >There is no channels to show</div>;
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} img={c.img} dis={c.dis} participants={c.participants} onClick={this.handleClick}/>);
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