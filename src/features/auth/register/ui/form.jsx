import { useForm } from 'react-hook-form'

export const Form = ({ onSubmit }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Email:
				<input
					{...register('email', {
						required: 'Поле обязательно к заполнению',
					})}
				/>
			</label>
			<div>
				{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
			</div>

			<label>
				Password:
				<input {...register('password', { required: true })} />
			</label>
			<div>
				{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
			</div>

			<label>
				<input type='checkbox' name='rememberMe' id='rememberMe' />
				Remember me
			</label>

			<input type='submit' />
		</form>
	)
}
