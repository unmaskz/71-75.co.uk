import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

import Button from '@/components/button/Button';
import styles from './Newsletter.module.scss';

export default (): JSX.Element => {
    const url = '';
    const SubscribeForm = ({ onValidated }: any) => {
        const [email, setEmail] = useState('');
        const submit = (e: Event) => {
            e.preventDefault();
            email &&
                email.indexOf('@') > -1 &&
                onValidated({
                    EMAIL: email,
                });
        };

        return (
            <Form className={styles.newsletter__form}>
                <InputGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <FormControl onChange={(e) => setEmail(e.target.value)} className={styles.newsletter__email} type="email" name="email" id="newsletterEmail" placeholder="bob@smith.com" />
                    <Button className={styles.newsletter__button} role="primary" onClick={submit}>
                        Subscribe
                    </Button>
                </InputGroup>
            </Form>
        );
    };

    return (
        <div className={styles.newsletter}>
            <h4>Stay up to date with our newsletter</h4>
            <MailchimpSubscribe url={url} render={({ subscribe }: any) => <SubscribeForm onValidated={(formData: any) => subscribe(formData)} />} />
        </div>
    );
};
