import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (event) => {
    event.preventDefault()

    if(description.lenght <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description:  description
    }
    onNewTodo(newTodo)
  }


  return (
    <div>
      <form onSubmit={ onFormSubmit }>
        <input onChange={onInputChange} name='description' type="text" placeholder="¿Qué hay que hacer?" className="form-control" />

        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>

        <p>
          <b></b>
          <i></i>
        </p>
      </form>
    </div>
  )
}
