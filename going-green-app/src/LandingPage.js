import React from 'react';
import { IconButton } from '@mui/material';
import Fingerprint from '@mui/icons-material/Fingerprint';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: 1300px;
  background-color: #EEEEEE;
`;

const LandingPage = () => {
    return (
        <Container>
            <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                
                <IconButton aria-label="fingerprint" color="success" component={Link} to="/signin">
                    <Fingerprint />
                </IconButton>  

            </div>
        </Container>
    )
}

export default LandingPage;