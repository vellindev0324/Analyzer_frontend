import CardList from "../../../component/CardList";

const TargetByStatus = ({chatting_names, waiting_names, accept_names}) => {
    return (
        <>
            <CardList data={chatting_names} title={"Chatting"} />
            <CardList data={waiting_names} title={"Waiting"} />
            <CardList
                data={accept_names}
                title={"Accept"}
                description={"Here are Unmessaged Person List. Please send the first message them"} />
        </>
    )
}

export default TargetByStatus;