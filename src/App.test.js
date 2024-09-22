import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

function sum(a,b){
    return a+b
}

describe("Sum function", () => {
    it("return sum",() => {
        const result = sum(3,4)
        expect(result).toBe(7)
    })
})

describe("App",()=>{
    // it("text should render",()=>{
    //     render(<App />)
    //     const data = screen.getByText("App Component")
    //     expect(data).toBeInTheDocument()
    // })

    // it("render button",()=>{
    //     render(<App />)
    //     const button = screen.getByRole("button")
    // })

    it("change login button",()=>{
        render(<App />)
        const loginButton = screen.getByRole("button",{name:"Login"})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByText("Logout")
        expect(logoutButton).toBeInTheDocument()
    })

    it("increment counter",() => {
        render(<App />)
        const incrementButton = screen.getByText("+")
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        
        const counter = screen.getByText(/51/)
        console.log(counter);
        expect(counter).toBeInTheDocument()
    })
})