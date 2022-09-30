import React from 'react';
import './QA.css'
const QA = () => {
    return (
        <div>
            <button className='cart-btn mt-5 mb-3 bg-info'>FQA</button>
            <div className='QA-Section'>
                <h4>How Does React Work ?</h4>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when the data changes. The declarative view makes the code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state for example, a TabList component may store a variable corresponding to the currently open tab.

                </p>

            </div>
            <div className='QA-Section'>
                <h4>What is the difference between props and state in react ?</h4>
                <p>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. Props is Immutable but the state is mutable. Props can be used with state and functional components. State can be used only with the state components/class component (Before 16.0). The setState property is used to update the state values in the component.

                </p>

            </div>
            <div className='QA-Section'>
                <h4> Why we useEffect Hook in React ?</h4>
                <p>
                    The useEffect hook allows us to respond to changes in the component lifecycle. The component lifecycle refers to a set of events that occur from the time a component is mounted to the DOM until it is removed. useEffect is most commonly used to execute code when the component is initially rendered, when it is updated, and when it is unmounted. useEffect accepts a function and a dependency array as arguments. The function will be executed when a variable in the dependency array changes. If no dependency array is provided, the function will run every time the component is re-rendered. If the dependency array is empty, the function will only be run when the component first mounts to the DOM.

                </p>

            </div>

        </div>
    );
};

export default QA;