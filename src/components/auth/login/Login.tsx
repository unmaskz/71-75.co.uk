import { useSignIn } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Alert from '@/components/alert/Alert';
import Button from '@/components/button/Button';
import Panel from '@/components/panel/Panel';
import { parseError, APIResponseError } from '@/utils/errors';
import styles from './Login.module.scss';

type FormData = {
    email: string;
    password: string;
};

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email address is required.'),
    password: Yup.string().required('Password is required.'),
});

const Login = (): JSX.Element => {
    const router = useRouter();
    const { signIn, setActive } = useSignIn();
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data: FormData) => {
        clearErrors();

        if (signIn) {
            await signIn
                .create({
                    identifier: data.email,
                    password: data.password,
                })
                .then((result) => {
                    if (result.status === 'complete') {
                        setActive({ session: result.createdSessionId }).then(() => {
                            router.push('/dashboard');
                        });
                    } else {
                        console.log(result);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError('root', {
                        type: 'manual',
                        message: parseError(err as APIResponseError),
                    });
                });
        }
    };

    return (
        <div className={styles.signIn}>
            {errors && errors.root && errors.root.message && <Alert role="danger" text={errors?.root?.message} marginBottom={30} />}
            <Panel heading="Login" colour="red">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            isInvalid={errors.email ? true : false}
                            {...register('email', {
                                required: true,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            isInvalid={errors.password ? true : false}
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" role="success">
                        Login
                    </Button>
                </Form>
            </Panel>
        </div>
    );
};

export default Login;
