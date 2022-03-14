import React from 'react'
import Link from "next/link";
import {AppContainer} from "../../components/Tasks/styles";
import {Column} from "../../components/Tasks/Column";
import {AddNewItem} from "../../components/Tasks/AddNewItem";
import {useTaskState} from "../../components/Tasks/state/context";
import {addList} from '../../components/Tasks/state/actions';
import styles from './styles.module.css';
import {CustomDragLayer} from "../../components/Tasks/CustomDragLayer";


const Tasks = () => {
    const { lists, dispatch } = useTaskState()
  return (
      <div className={styles.tasks}>
          <CustomDragLayer />
      <AppContainer>
          {lists.map((list) => (
              <Column text={list.text} key={list.id} id={list.id} />
          ))}
          <AddNewItem
              toggleButtonText="+ Add another list"
              onAdd={(text) => dispatch(addList(text))}
          />
      </AppContainer>
      </div>
  )
}

export default Tasks