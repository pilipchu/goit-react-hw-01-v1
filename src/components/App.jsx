// import { useState } from 'react'
import './App.css'
import { Alert } from "./Alert";
import { LoginButton } from './LoginButton';
import { FollowButton } from './FollowButton';
import { UserMenu } from './UserMenu';

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
      <LoginButton></LoginButton>
      <FollowButton></FollowButton>
      <UserMenu></UserMenu>
    </>
  );
};