// PasswordResetPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from './assets/trees.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  
  background-image: url(${img});
  background-size: 1300px;
  background-color: ${(props) => props.theme.colors.background};
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.button};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
`;

const PasswordResetPage = () => {
  return (
    <Container>
      <FormWrapper>
        <FormTitle>Reset Password</FormTitle>
        <Form>
          <Input type="password" placeholder="New Password" />
          <Input type="password" placeholder="Confirm New Password" />
          <Button type="submit">Reset Password</Button>
        </Form>
        <Text>
          Remembered your password? <Link to="/signin">Sign In</Link>
        </Text>
      </FormWrapper>
    </Container>
  );
};

export default PasswordResetPage;
