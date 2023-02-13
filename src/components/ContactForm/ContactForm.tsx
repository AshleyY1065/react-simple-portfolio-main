import React, {FC} from 'react';
import {useStyles} from './ContactForm.styles';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ContactDetails, initialValues, schema} from "./config";
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

interface Props {
}

const ContactForm: FC<Props> = () => {
    const classes = useStyles();

    const handleSubmit = (values: ContactDetails) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={classes.formInput}>
                        <label htmlFor='name'>Name</label>
                        <Field type="string" name="name" placeholder="John Doe" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className={classes.formInput}>
                        <label htmlFor='email'>Email</label>
                        <Field type="string" name="email" placeholder="john.doe@gmail.com" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className={classes.formInput}>
                        <label htmlFor='topic'>Topic</label>
                        <Field type="string" name="topic" placeholder="Web development" />
                        <ErrorMessage name="topic" component="div" />
                    </div>
                    <div className={classes.formInput}>
                        <label htmlFor='message'>Message</label>
                        <Field
                            type="string"
                            name="message"
                            component="textarea"
                            placeholder="Tell me what your project or questions is about"
                            rows={3}
                        />
                        <ErrorMessage name="message" component="div" />
                    </div>
                    <div className={classes.formInput}>
                        <button type="submit" disabled={isSubmitting} className={classes.formButton}>
                            <span>Send it</span>
                            <ArrowIcon />
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
