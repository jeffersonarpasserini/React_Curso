
const Container = ({ children, containerTitle }) => {
    return (
        <div>
            <h2>{containerTitle}</h2>
            {children}
        </div>
    )
}

export default Container