import React, { useState } from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Post from '../posts/Post'
import Loader from '../loader/Loader';

const ITEMS_PER_PAGE = 8;

const Home = () => {
    const { isLoading } = useSelector((state) => state)
    const res = useSelector((state) => state.posts);
    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedData = res?.posts?.slice(startIndex, endIndex);

    if(displayedData.length === 0) {
        return <h3 style={{textAlign: 'center'}}>No Data to display</h3>
    }

    return (
        <>
            <Grid container>
                {
                    isLoading ? <Loader /> :
                        displayedData?.map(post => (
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                                <Post post={post} />
                            </Grid>
                        ))
                }
            </Grid>
            <Box style={{ padding: 20, display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={Math.ceil(res?.posts?.length / ITEMS_PER_PAGE)}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    size='large'
                    onChange={handlePageChange}
                    renderItem={(item) => (
                        <PaginationItem component="button" {...item} />
                    )}
                />
            </Box>
        </>
    )
}

export default Home
