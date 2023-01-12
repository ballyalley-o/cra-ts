import React, { useRef } from 'react'
import './NewToDo.css'
import { AiOutlineFileAdd } from 'react-icons/ai'

interface NewToDoProps {
    addToDo: (todoText: string) => void
}

//interface for react-icons
interface IconProps {
    size?: string
    color?: string

}

const FileAdd: React.FC<IconProps> = ({
  size = '1em',
  color = 'currentColor',
}) => <AiOutlineFileAdd size={size} color={color} />

const NewToDo: React.FC<NewToDoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault()
      const textValue = textInputRef.current!.value
      props.addToDo(textValue)

      //clear the input field
      textInputRef.current!.value = ''
    }

    return (
      <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
          <label htmlFor='todo-text' className='title'>Notes</label>

          <input
            type='text'
            id='todo-text'
            ref={textInputRef}

            />
        </div>
        <button type='submit'><FileAdd size="1rem" color="white"/> ADD TODO</button>
      </form>
    )
}


export default NewToDo