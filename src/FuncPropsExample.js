function FuncPropsExample(props){
    console.log(props)
    return(
        <div>
            <p>{props.framework}</p>
            <p>{props.number}</p>
        </div>
    )
}
export default FuncPropsExample