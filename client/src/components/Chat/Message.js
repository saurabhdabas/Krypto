import React from 'react';
import {Avatar, Chip} from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

export class Message extends React.Component {

    render() {

        return (
            
            <Card sx={{ width: 300 , padding:0.5, marginTop:3, marginBottom:3} }>
                <CardActionArea>
                    <Chip
                    avatar={<Avatar alt="Natacha" src={this.props.img} />}
                    label={this.props.user}
                    variant="outlined"
                    />
                    <CardContent>
                        <Typography component="h8" variant="h8">
                            Sent at: {this.props.time}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {this.props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

