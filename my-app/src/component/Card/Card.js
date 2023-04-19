export const Card = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export const CardHeader = ({ children }) => {
    return (
        <div className="card_header overflow-hidden">
            {children}
        </div>
    )
}
export const CardBody = ({ children }) => {
    return (
        <div className="card_body">
            {children}
        </div>
    )
}
export const CardFooter = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export const CardBorder = ({ children, border }) => {
    return (
        <div className={border}>
            {children}
        </div>
    )
}