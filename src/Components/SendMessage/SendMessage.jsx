import React, { useRef } from "react";
import "./SendMessage.scss";
import axios from "axios";
import apiLink from "../../Services/api";
import { Field, Form, Formik } from "formik";



export default function SendMessage() {
        const formRef = useRef()
        function handelMessage(data) {
            return axios.post(`${apiLink}/contact`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            }).then(()=>{
                formRef.current.resetForm();
            })
          }
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        }}
        onSubmit={(values) => {
          handelMessage(values);
        }}
        enableReinitialize
        innerRef={formRef}
      >
        <Form>
          <div className="form-container">
            <div className="form">
                <div className="all__inputs">
                    <div className="form-group ">
                        <label htmlFor="name">الاسم</label>
                        <Field required="" name="name" id="name" type="text" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="address">العنوان</label>
                        <Field required="" name="address" id="address" type="text" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="phone">الهاتف</label>
                        <Field required="" name="phone" id="phone" type="text" />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="email">الايميل</label>
                        <Field required="" name="email" id="email" type="email" />
                    </div>
              </div>
              <div className="form-group">
                <label htmlFor="textarea">كيف يمكنني مساعدتك ؟</label>
                <textarea
                  id="textarea"
                  name="message"
                >
                </textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                ارسال
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
