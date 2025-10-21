const InputBox = (props) =>{

    return <>
        <input
          type="text"
          placeholder="Search accounts..."
          value={props.search}
          onChange={(e) => props.setValue(e.target.value)}
        />
    </>
}
export default InputBox