import React from 'react';
import { WelcomeMessage } from './WelcomeMessage';
import { CurrentDate } from './CurrentDate';
import { HobbyList } from './HobbyList';
import { Button } from './Buttons';
import { ProfileCard } from './ProfileCard';
import { ItemList } from './ItemList';
import ToggleButton from './ToggleButton';
import Counter from './Counter';
import HoverDiv from './HoverDiv';
import InputForm from './InputForm';
import Dropdown from './Dropdown';
import LoginForm from './LoginForm';
import ControlledForm from './ControlledForm';
import ValidatedForm from './ValidatedForm';
import MultiStepForm from './MultiStepForm';
import CheckboxForm from './CheckBoxInput';
import Home from './Question 16/Home';
import About from './Question 16/About';
import Contact from './Question 16/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  const items = ['Apple', 'Banana', 'Mango', 'Potato'];
  return (
    <>
    <div>
      <WelcomeMessage />
      <CurrentDate />
    </div>

    <div>
      <HobbyList />
    </div>

    <div>
      <Button text="Click Me" color="green" />
      <Button text="Default Blue Button" />
    </div>

    <div>
      <ProfileCard name="Mr NiceGuy" age={30} email="JackieChan.@hotmail.com" />
    </div>

    <div>
      <h2>Fruits:</h2>
      <ItemList items={items} />
    </div>

    <div>
      <h1>Toggle Button Example</h1>
      <ToggleButton />
    </div>

    <div>
      <h1>Counter Example</h1>
      <Counter />
    </div>

    <div>
      <h1>Hover Div Example</h1>
      <HoverDiv />
    </div>

    <div>
      <h1>Input Form Example</h1>
      <InputForm />
    </div>

    <div>
      <h1>Dropdown Menu Example</h1>
      <Dropdown />
    </div>

    <div>
      <h1>Login Form Example</h1>
      <LoginForm />
    </div>

    <div>
      <h1>Controlled Form Example</h1>
      <ControlledForm />
    </div>

    <div>
      <h1>Validated Form Example</h1>
      <ValidatedForm />
    </div>

    <div>
      <h1>Multi-Step Form Example</h1>
      <MultiStepForm />
    </div>

    <div>
      <h1>Checkbox Form Example</h1>
      <CheckboxForm />
    </div>


    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    </>
  );
};

export default App;