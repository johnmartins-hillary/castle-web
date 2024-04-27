import React from 'react'
import AuthLayout from '../auth/layout'
import Head from 'next/head'
import ContactForm from './../../components/pages/contact/contact-form.component';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us - Carsle</title>
      </Head>
      <AuthLayout>
        <ContactForm />
      </AuthLayout>
    </>
  );
}

export default Contact