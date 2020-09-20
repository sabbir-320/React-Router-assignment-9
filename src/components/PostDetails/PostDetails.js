import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const PostDetails = () => {
    // Material UI functionality
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            margin: '40px auto',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        }
    }));

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // Own functionality
    const { details } = useParams()
    const [post, setPost] = useState([])
    const [comment, setComment] = useState([])
    const [photo, setPhoto] = useState([])
    // Post API
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${details}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    const { title, body, } = post
    // comment API
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?id=${details}`
        fetch(url)
            .then(response => response.json())
            .then(data => setComment(data))
    }, [])
    let name;
    let email;
    comment.map(x => {
        return { name, email } = x
    })
    // Photo API
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${details}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPhoto(data))
    }, [])

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph className={classes.avatar}>
                            <Avatar alt="Remy Sharp" src={photo.url} />
                            {name}
                        </Typography>
                        <Typography paragraph>
                            Email: {email}
                        </Typography>
                        <Typography paragraph>
                            Comment: {body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </CardActionArea>
        </Card>
    );
};

export default PostDetails;