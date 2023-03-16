export const Card = ({ children, size}) => {
    return (
        <div className=" max-w-sm rounded w-32 bg-slate-300 shadow-xl">
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
export const CardFooter = ({ children }) => {
    return (
        <div className="flex justify-around">
            {children}
        </div>
    )
}