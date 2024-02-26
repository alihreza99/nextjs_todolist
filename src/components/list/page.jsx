"use client";
import React, { useState, useEffect } from "react";
import Todo from "../listitem/page";
import Spinner from "../spinner/index";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";
import { Alert } from "reactstrap";
export default function Todolist() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [itemtitle, setItemtitle] = useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);

  const [successAlert, setSuccessAlert] = React.useState(false);
  const [dangerAlert, setDangerAlert] = React.useState(false);
  const [show, setshow] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 500);
  });
  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      setItems(JSON.parse(localStorage.getItem("localTasks")));
    } else {
      console.log("error");
    }
  }, []);

  function changeinput(event) {
    setInput(event.target.value);
  }

  function additem(event) {
    event.preventDefault();

    if (input.trim() !== "") {
      let newobject = {
        title: input,
        id: items.length + 1,
      };

      setItems([...items, newobject]);
      setInput("");
      localStorage.setItem("localTasks", JSON.stringify([...items, newobject]));
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 1500);
    } else {
      setInput("");
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 1500);
    }
  }

  function deleteoneitem() {
    setModalOpen(!modalOpen);
    const deleted = items.filter((f) => f.title !== itemtitle);
    setItems(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 500);
  }

  function deleteall() {
    setModalOpen2(!modalOpen2);
    setItems([]);
    localStorage.removeItem("localTasks");
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 1500);
  }

  function handleShow(event) {
    setModalOpen(!modalOpen);
    setItemtitle(event.title);
  }

  function handleShow2() {
    if (items.length === 0) {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 1500);
    } else {
      setModalOpen2(!modalOpen2);
    }
  }
  return (
    <>
      <Modal
        dir="rtl"
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
      >
        <ModalHeader className="modal-title" id="exampleModalLabel">
          هشدار
        </ModalHeader>
        <ModalBody>میخواهید آیتم را حذف کنید ؟</ModalBody>
        <ModalFooter>
          <Button
            color="info"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <p className="text-dark btn-text">بستن</p>
          </Button>
          <Button
            data-testid="delete"
            className="text-dark "
            onClick={deleteoneitem}
            color="danger"
            type="button"
          >
            <p className="text-dark btn-text">حذف کردن</p>
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        data-testid="deletemodal"
        dir="rtl"
        toggle={() => setModalOpen2(!modalOpen2)}
        isOpen={modalOpen2}
      >
        <ModalHeader className="modal-title" id="exampleModalLabel">
          هشدار
        </ModalHeader>
        <ModalBody>میخواهید آیتم را حذف کنید ؟</ModalBody>
        <ModalFooter>
          <Button
            color="info"
            type="button"
            onClick={() => setModalOpen2(!modalOpen2)}
          >
            <p className="text-dark btn-text">بستن</p>
          </Button>
          <Button
            data-testid="deleteall"
            className="text-dark"
            onClick={deleteall}
            color="danger"
            type="button"
          >
            <p className="text-dark btn-text">حذف کردن همه</p>
          </Button>
        </ModalFooter>
      </Modal>

      <Alert
        className="p-3 w-25 mb-2 bg-success text-white position-absolute bottom-0"
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

      <Alert
        className="p-3 w-25 mb-2 bg-danger text-white position-absolute bottom-0"
        dir="rtl"
        isOpen={dangerAlert}
      >
        <span className="alert-icon">
          <i className="ni ni-like-2"></i>
        </span>
        <span className="alert-text">
          <strong>عملیات موفقیت آمیز نبود!</strong>
        </span>
      </Alert>

      {show && <Spinner />}

      {!show && (
        <div id="container">
          <h1 className="title">لیست تسک ها</h1>
          <Form id="add-book" onSubmit={additem}>
            <input
              data-testid="add-input"
              ref={(input) => input && input.focus()}
              value={input}
              onChange={changeinput}
              type="text"
              placeholder="تسک خود را اضافه کنید"
            />
            <Button
              data-testid="add-btn"
              onClick={additem}
              type="submit"
              className="button"
            >
              <p className="btn-text-plus">+</p>
            </Button>
          </Form>
          <div id="book-list">
            <ul data-testid="todolist">
              {items.length === 0 && (
                <p className="h4 my-2 p-2 bg-danger border rounded border-black">
                  هیچ تسکی وجود ندارد
                </p>
              )}
              {items.map((item, index) => {
                return (
                  <Todo
                    key={index}
                    title={item.title}
                    deletehandler={handleShow}
                  />
                );
              })}
            </ul>
          </div>

          <div className="info">
            <div className="info-text">
              <p className="info-text-item">شما</p>
              <p className="info-text-item" id="number">
                {items.length}
              </p>
              <p className="info-text-item"> تسک انجام نشده دارید</p>
            </div>
            <Button
              data-testid="delete-allbtn"
              onClick={handleShow2}
              id="clear-all"
            >
              حذف همه
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
