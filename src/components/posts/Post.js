import React, { useState } from 'react';
import { addEllipsis } from '../../utils/constant';
import { styled, Button, Card, Typography, Box } from '@mui/material';
import DetailedView from './DetailedView';

const StyledCard = styled(Card)({
    margin: 10,
    boxShadow: '1px 2px 3px',
    padding: 10,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
});

const Image = styled('img')({
    width: '100%',
    height: 200,
    margin: 'auto'
});

const Text = styled(Typography)({
    color: 'gray',
    fontSize: 15,
    fontFamily: 'monospace'
});

const Btn = styled(Button)({
    textTransform: 'none',
    fontSize: 15,
    marginLeft: 'auto'
})

const Post = ({ post }) => {
    const [open, setOpen] = useState(false);

    const openWikipediaLink = () => {
        const wikipediaUrl = post?.links?.wikipedia
        window.open(wikipediaUrl, '_blank');
    };

    const openArticleLink = () => {
        const ArticleLink = post.links.article_link;
        window.open(ArticleLink, '_blank')
    }

    return (
        <>
            <StyledCard onClick={() => setOpen(true)}>
                <Box>
                    <Image src={post?.links?.mission_patch_small} alt="launch vehicle image" />
                </Box>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {post?.rocket?.rocket_name}
                    </Typography>
                    <Text>Launch Year: {post?.launch_year}</Text>
                    <Text>Launch Success: {post?.launch_success===true?'true':'false'}</Text>
                    <Text>Launch Date: {new Date(post?.launch_date_local).toDateString()}</Text>
                    <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 }}>
                        {addEllipsis(post?.details)}
                    </Typography>
                </Box>
                <Box style={{ marginTop: 'auto' }}>
                    <Btn size="small" onClick={openArticleLink}>Article</Btn>
                    <Btn size="small" onClick={openWikipediaLink}>Wikipedia</Btn>
                </Box>
            </StyledCard>
            <DetailedView open={open} setOpen={setOpen} post={post} />
        </>
    );
}

export default Post;