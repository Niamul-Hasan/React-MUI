import React from 'react';
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

const MuiButtons = () => {
    return (
        <Stack spacing={4} style={{ margin: '35px' }}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>text</Button>
                <Button variant='contained'>contsained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='success'>success</Button>
                <Button variant='contained' style={{ backgroundColor: '#047857' }}>custom</Button>
                <Button variant='contained' style={{ backgroundColor: '#047857bf' }}>rgba</Button>
                <Button variant='contained'
                    style={{ backgroundImage: 'linear-gradient(to right, red , yellow)' }}
                >gradient</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>

                <Button variant='contained' startIcon={<SendTwoToneIcon />} disableElevation>send</Button>
                <Button variant='contained' endIcon={<SendTwoToneIcon />} disableRipple>send</Button>
                <IconButton color='warning'
                    area-level='send' size='small'
                    onClick={() => alert('SendIcon is clicked')}>
                    <SendTwoToneIcon />
                </IconButton>
            </Stack>

            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained' size='small' orientation='vertical'
                >
                    <Button onClick={() => alert('Left is clicked')}>left</Button>
                    <Button style={{ backgroundColor: '#042887bf' }}>center</Button>
                    <Button style={{ backgroundColor: '#047857bf' }}>right</Button>
                </ButtonGroup>
            </Stack>

        </Stack>
    );
};

export default MuiButtons;