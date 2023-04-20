// 05). Functional Components
// javaScripts Functions

// Props also

// Destructuring props in functional component

// 1). Destructuring props int function parameter itself
// export const Greet = ({name, lname}) => { // Destructuring props

// these export can be imported Greet name only
export const Greet = (props) => { 
    // 2). Destructuring props inthe function body
    const {name, lname} = props // Destructuring props
    return(
        <div>
            <h1>
                Hello {name} {lname}
            </h1>
        </div>
    )
}

// export default can br importted as name you want[do remember]
// export default Greet