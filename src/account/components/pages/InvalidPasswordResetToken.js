import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageTitle, PageLogo } from '../../../common/components/styled';

const InvalidPasswordResetToken = () => (
  <Page>
    <PageLogo />
    <PageTitle>Invalid password reset link</PageTitle>
    <p>This password reset link is invalid or expired.</p>
    <Link to="/account/create-password-reset-token">Request a new link</Link>
  </Page>
);

export default InvalidPasswordResetToken;
