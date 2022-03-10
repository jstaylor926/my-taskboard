import {ColumnContainer, ColumnTitle} from "./styles"
import Card from "./Card"
import AddNewNote from "../Notes/AddNewNote";
import { useAppState} from "../Notes/state/context";

type ColumnProps = {
    text: string;
    id: string;
}

const Column = ({text, id}: ColumnProps) => {
    const {getNotesByListId} = useAppState();

    const notes = getNotesByListId(id);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {notes.map((note) => (
                <Card text={note.text} id={note.id} key={note.id} />
            ))}
            <AddNewNote onAdd={console.log} toggleButtonText="Another Card?" dark/>
        </ColumnContainer>
    )
}

export default Column;