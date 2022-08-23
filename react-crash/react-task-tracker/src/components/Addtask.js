import { useState } from 'react'

const Addtask = ({onAdd}) => {
    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        //if text field of form is empty then alert
        if (!text) {
            alert('Please add a task!')
            return
        }


        onAdd({text, day, reminder})

        //clear form
        setText('')
        setDay('')
        setReminder(false)

    }

  return (
    <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Set reminder</label>
            <input 
                type="checkbox"
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default Addtask