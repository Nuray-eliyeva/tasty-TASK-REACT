import axios from "axios"
import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    axios.post("http://localhost:8000/cards",data)
}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addpage">
      <h3>ADD PAGE</h3>
       <label >Name</label>
      <input  {...register("name")} />
      <label >Description</label>
      <input {...register("description", { required: true })} />
      <label >Cost</label>
      <input  {...register("cost")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}