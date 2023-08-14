import React, { useState, useEffect } from 'react'
import { Select, MenuItem, Box, InputLabel, FormControl, styled } from '@mui/material'
import { yearArray } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { fetchAllData } from '../../redux/actions/post'

const Container = styled(Box)(({theme}) => ({
    margin: 40, 
    display: 'flex', 
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center'
    }
}))

const Form = () => {
    const [year, setYear] = useState('');
    const [success, setSuccess] = useState('');
    const [rocket, setRocket] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllData({ year: year, success: success, rname: rocket }));
    }, [year, success, rocket, dispatch])

    return (
        <Container>
            <FormControl style={{ width: 200, marginRight: 8}}>
                <InputLabel id="demo-simple-select-label">Rocket Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Rocket Name"
                    onChange={(e) => setRocket(e.target.value)}
                    value={rocket}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Falcon 1">Falcon 1</MenuItem>
                    <MenuItem value="Falcon 9">Falcon 9</MenuItem>
                    <MenuItem value="Falcon Heavy">Falcon Heavy</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ width: 200, marginRight: 8 }}>
                <InputLabel id="demo-simple-select-label">Success</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Success"
                    onChange={(e) => setSuccess(e.target.value)}
                    value={success}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        yearArray.map(year => (
                            <MenuItem value={year}>{year}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Container>
    )
}

export default Form
