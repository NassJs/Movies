
export const Title = ({ children, variant }) => {
    return (
        <h1 className={variant}> {children}</h1>
    )
}
export const SubTitle = ({ children, variant }) => {
    return (
        <h3 className={variant}> {children}</h3>
    )
}
