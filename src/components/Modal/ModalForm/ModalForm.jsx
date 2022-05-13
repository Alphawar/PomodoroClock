import React from 'react';
import classes from './ModalForm.module.css';
import { Formik, Form, Field} from 'formik';

const ModalForm = ({onModalClose, setLongBreakTime, setShortBreakTime, setWorkTime, workTime, shortBreakTime, longBreakTime}) => {
    return(
                <Formik 
                  initialValues={{
                    work: workTime / 60, 
                    short: shortBreakTime / 60, 
                    long: longBreakTime / 60}}
                  onSubmit={ values => {
                    setWorkTime(values.work * 60);
                    setShortBreakTime(values.short * 60);
                    setLongBreakTime(values.long * 60);
                    onModalClose();
                  } }
                  >
                    <Form>
                      <div className={classes.inputContainer}>
                        <div className={classes.formElement}>
                          <label htmlFor="work">Work</label>
                          <Field name="work" min="1" max="60"/>
                        </div>
                        <div className={classes.formElement}>
                          <label htmlFor="short">Short Break</label>
                          <Field name="short" min="1" max="60"/>
                        </div>
                        <div className={classes.formElement}>
                          <label htmlFor="long">Long Break</label>
                          <Field name="long" min="1" max="60"/>
                        </div>
                      </div>
                      <div className={classes.buttonContainer}>
                        <button className={classes.submitButton} type="submit">Apply</button>
                      </div>
                    </Form>
                  </Formik>
    );
};

export default ModalForm;