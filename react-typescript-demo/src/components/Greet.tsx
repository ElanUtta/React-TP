type GreetProps = {
    name: string,
    massageCount?: number
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2> Welcome {props.name} {props.massageCount}</h2>
        </div>
    )
}
