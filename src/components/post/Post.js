import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const Post = (props) => {
    const { title, id } = props.getPost
    const useStyles = makeStyles({
        root: {
            maxWidth: 550,
            margin: '40px auto',
        },
        decoration: {
            textDecoration: 'none',
        }
    });
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={"/" + id} className={classes.decoration}>
                    <Button size="small" color="primary">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Post;