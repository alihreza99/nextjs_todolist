"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form, Label, Button } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "reactstrap";
const schema = yup.object().shape({
  firstname: yup.string().required("لطفا نام خود را وارد کنید"),
  lastname: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  county: yup.string().required("لطفا شهر خود را وارد کنید"),
  phonenumber: yup
    .string()
    .min(11, "شماره شما معتبر نیست")
    .max(11, "شماره شما معتبر نیست")
    .required("لطفا شماره تلفن خود را وارد کنید"),
  personalid: yup
    .string()
    .min(11, "کد شما معتبر نیست")
    .max(11, "کد شما معتبر نیست")
    .required("لطفا کد ملی خود را وارد کنید"),
  email: yup.string().email().required("لطفا ایمیل خود را وارد کنید"),
  radio: yup.string().required("جنسیت خود را انتخاب کنید"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [show, setshow] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 500);
  });

  const onSubmit = () => {
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 1500);
    reset();
  };

  return (
    <>
      <Alert
        className="p-3 w-25 mb-2 bg-success text-white position-absolute top-5 myalert"
        dir="rtl"
        isOpen={successAlert}
      >
        <span className="alert-icon">
          <i className="ni ni-like-2"></i>
        </span>
        <span className="alert-text">
          <strong>عملیات انجام شد.</strong>
        </span>
      </Alert>
      <div className="Log_form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <Label className="label">
              نام<sup>*</sup>
            </Label>
            <input {...register("firstname")} placeholder="نام" type="text" />
            <p className="errortext">{errors.firstname?.message}</p>
          </div>
          <div className="form-control">
            <Label className="label">
              نام خانوادگی<sup>*</sup>
            </Label>
            <input
              {...register("lastname")}
              placeholder="نام خانوادگی"
              type="text"
            />
            <p className="errortext">{errors.lastname?.message}</p>
          </div>
          <div className="form-control">
            <Label className="label">
              شهر<sup>*</sup>
            </Label>
            <input {...register("county")} placeholder="شهر" type="text" />
            <p className="errortext">{errors.county?.message}</p>
          </div>
          <div className="form-control">
            <Label className="label">
              شماره تلفن<sup>*</sup>
            </Label>
            <input
              {...register("phonenumber")}
              placeholder="شماره تلفن"
              type="number"
            />
            <p className="errortext">{errors.phonenumber?.message}</p>
          </div>
          <div className="form-control">
            <Label className="label">
              کد ملی<sup>*</sup>
            </Label>
            <input
              {...register("personalid")}
              placeholder="کد ملی"
              type="number"
            />
            <p className="errortext">{errors.personalid?.message}</p>
          </div>
          <div className="form-control">
            <Label className="label">
              ایمیل<sup>*</sup>
            </Label>
            <input {...register("email")} placeholder="ایمیل" type="email" />
            <p className="errortext">{errors.email?.message}</p>
          </div>
          <div
            className="check"
            key={`default-radio`}
            id="check"
            className="mb-3 radio-parent"
          >
            <h6 className="label">جنسیت را انتخاب کنید</h6>
            <div>
              <Label className="radio" htmlFor="field-wind">
                <input
                  {...register("radio")}
                  type="radio"
                  value="wind"
                  id={`default-$radio`}
                />
                مرد
              </Label>
              <Label className="radio" htmlFor="field-sun">
                <input
                  {...register("radio")}
                  type="radio"
                  value="sun"
                  id={`default-$radio`}
                />
                زن
              </Label>
            </div>
            <p className="errortext">{errors.radio?.message}</p>
          </div>
          <div className="form-control">
            <Label></Label>
            <Button className="log-button" type="submit">
              ورود
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
