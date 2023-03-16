import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useUser } from '@clerk/nextjs';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '@/components/button/Button';
import Panel from '@/components/panel/Panel';
import styles from './MyProfile.module.scss';

type FormData = {
    firstName: string;
    lastName: string;
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required.')
        .min(2, 'First name must be at least 2 characters.')
        .max(20, 'First name must not exceed 20 characters.'),
    lastName: Yup.string()
        .required('Last name is required.')
        .min(2, 'Last name must be at least 2 characters.')
        .max(20, 'Last name must not exceed 20 characters.'),
});

const MyProfile = () => {
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
                firstName: data.firstName,
                lastName: data.lastName,
            });
            router.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.myProfile}>
            <Panel heading="Your Profile" colour="red">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={user.firstName as string}
                            defaultValue={user.firstName as string}
                            isInvalid={errors.firstName ? true : false}
                            {...register('firstName', {
                                required: true,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.firstName?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={user.lastName as string}
                            defaultValue={user.lastName as string}
                            isInvalid={errors.lastName ? true : false}
                            {...register('lastName', {
                                required: true,
                            })}
                        />
                        <Form.Control.Feedback type="invalid">{errors?.lastName?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" role="success">
                        Update
                    </Button>
                </Form>
            </Panel>
        </div>
    );
};

export default MyProfile;
