import React from "react";
import "./App.css";
import Modal from "./Modal";

const App: React.FC = () => {
    let btn_text = ["버튼1", "버튼2"];
    return (
        <div className="App">
            <Modal></Modal>
        </div>
    );
};

export default App;
