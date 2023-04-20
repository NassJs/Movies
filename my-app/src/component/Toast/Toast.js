export const Toast = ({ children, variant }) => {

    return (
        <div className={variant}>{children}</div>
    )
}