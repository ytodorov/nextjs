import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';

class MyArrowButtons extends React.Component {
    render() {
        const nextUrl = 'https://google.com' //window.location.href + "1";
        return (
            <Stack direction="row" justifyContent="center" spacing={2}>
                <Button variant="outlined" startIcon={<ArrowBackIcon />} href={nextUrl}>
                    Prev
                </Button>
                <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                    Next
                </Button>
            </Stack>
        );
    }
}

export default MyArrowButtons;