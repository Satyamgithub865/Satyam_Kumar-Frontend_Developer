import { Box, styled } from '@mui/material'
import React from 'react'
import { CircularProgress } from '@mui/material'

const Container = styled(Box)({
    display: 'flex',
    margin: 'auto'
})

const Loader = () => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    )
}

export default Loader