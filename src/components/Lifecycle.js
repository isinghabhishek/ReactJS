// 22). Lifecycle Methods

//1). "Mounting" 
// when an instance of a component is being created and inserted into the DOM.
// Methods: constructor, static getDerivedStateFromProps, render and componentDidMount.

// Mounting Lifecycle Methods 
// a). constructor(props)
// A special function that will get called whenever a new component is created.
// Intializing state, Binding the event handlers
// Do not cause side effects, Ex: HTTP requests

// b). static getDerivedStateFromProps(props, state)
//  When the state of the component depends on changes in props over time.
// Set the state
// Do not cause side effects. Ex: HTTP requests

// c). render()
// Only required method
// Read props & state and return JSX
// Do not change state or interact with DOM or make ajax calls.
// Children components lifecycle methods are also executed.

// d). componentDidMount()
// Invoked immediately after a component and all its, children components have been rendered to the DOM.
// Cause side effects. EX: Interact with the DOM or Perfom any ajax calls to load data. 



//2). "Updating": when a component is being re-rendered as a result of changes to either it's props or state
// Methods: static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

// Updating Lifecycle Methods
// a). static getDerivedStateFromProps(props, state)
// Method is called every time a component is re-rendered
// set the state
// Do not cause side effects. Ex: HTTP requests

// b). shouldComponentUpdate
// Dictate if the component should re-render or not
// performance optimization
// Do not cause side effects. Ex: HTTP requests
// Calling the setState method

// c). render()
// Only required method
// Read props & state and return JSX
// Do not change state or interact with DOM or make ajax calls.

// d). getSnapshotBeforeUpdate(prevProps, prevState)
// Called right before the changes from the virtual DOM are to be reflected in the DOM
// capture some information from the DOM
// Method will either return null or return a value.
// Returned value will be passed as the third parameter to the next Method.

// e). componentDidUpdate(prevProps, prevState, snapshot)
// Called after the render is finished in the re-render cycle
// Cause side effects

//3). "Unmounting": when a component is being removed from the DOM
// Methods: componentWillUnmount
// a). componentWillUnmount()
// Method is invoked immediately before a component is unmounted and destroyed.
// Cancelling any network requests, removing events handlers, cancelling any subscription and also invalidating timers.
// Do not call the setState method.

//4). "Error Handling": When ther is error during rendering, in a lifecycle method, or in the constructor of any child component.
// Methods: static getDerivedStateFromError and componentDidCatch
// a). static getDerivedStateFromError(error)
// b). componentDidCatch(error, info)
// when ther is an error either during rendering, in a lifecycle methods,
// or in the constructor of any child component.