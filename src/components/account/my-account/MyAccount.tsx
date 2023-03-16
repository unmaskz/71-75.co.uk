import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '@/components/button/Button';
import Panel from '@/components/panel/Panel';
import styles from './MyAccount.module.scss';

type FormData = {
    password: string;
};

const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required.'),
});

const MyAccount = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });
    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded || !isSignedIn) return null;

    const onSubmit = (data: FormData) => {
        try {
            user.update({
                password: data.password,
            });
            router.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.myDetails}>
            <Panel heading="Your Account" colour="red">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder={user.emailAddresses[0].emailAddress}
                            defaultValue={user.emailAddresses[0].emailAddress}
                            disabled
                            readOnly
                        />
                        <Form.Text className="text-muted">Your email cannot be changed.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your new password"
                            autoComplete="off"
                            isInvalid={errors.password ? true : false}
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" role="success">
                        Update
                    </Button>
                </Form>
            </Panel>
        </div>
    );
};

export default MyAccount;
