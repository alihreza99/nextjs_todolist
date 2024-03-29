import Todolist from "../src/components/list/page";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../src/components/auth/page";
describe("todolist", () => {
  it("check if todo item got added", () => {
    const todo = render(<Todolist />);

    const inputElement = todo.getByTestId("add-input");

    fireEvent.change(inputElement, { target: { value: "New Todo Item" } });

    const addButton = todo.getByTestId("add-btn");

    fireEvent.click(addButton);

    const newTodoItem = todo.getByText("New Todo Item");
    expect(newTodoItem).toBeInTheDocument();
  });

  it("check if todo items got deleted", () => {
    const todo = render(<Todolist />);

    const inputElement = todo.getByTestId("add-input");

    fireEvent.change(inputElement, { target: { value: "New Todo Items" } });

    const addButton = todo.getByTestId("add-btn");

    fireEvent.click(addButton);

    const newTodoItem = todo.getByText("New Todo Items");

    const deleteall = todo.getByTestId("delete-allbtn");

    fireEvent.click(deleteall);

    const deleteallbtn = screen.getByTestId("deleteall");

    fireEvent.click(deleteallbtn);

    expect(newTodoItem).not.toBeInTheDocument();
  });

  it("check if todo item got deleted", () => {
    const todo = render(<Todolist />);

    const inputElement = todo.getByTestId("add-input");

    fireEvent.change(inputElement, { target: { value: "New Todo Items2" } });

    const addButton = todo.getByTestId("add-btn");

    fireEvent.click(addButton);

    const newTodoItem = todo.getByText("New Todo Items2");

    const deleteall = todo.getByTestId("deletebtn");

    fireEvent.click(deleteall);

    const deleteallbtn = screen.getByTestId("delete");

    fireEvent.click(deleteallbtn);

    expect(newTodoItem).not.toBeInTheDocument();
  });
});

describe("login", () => {
  it("input wasnt null", () => {
    waitFor(() => {
      const log = render(<Login />);

      const inputElement = log.getByTestId("name-input");

      const addButton = log.getByTestId("formbtn");

      fireEvent.change(inputElement, { target: { value: "New Todo Items" } });

      fireEvent.click(addButton);

      const newTodoItem = log.findByText("New Todo Items");
      expect(newTodoItem).toBeInTheDocument();
    });
  });
});
