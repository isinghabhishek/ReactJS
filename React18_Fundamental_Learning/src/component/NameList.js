export const NameList = () => {
    const names = ['Abhishek', 'Ram', 'Hanuman']
    return <div>
        {
            names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
}