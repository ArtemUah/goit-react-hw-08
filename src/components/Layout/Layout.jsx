import { Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

export default function Layout ({children}) {
return (
    <div>
        <AppBar/>
        {children}
    </div>
)
};
