import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import "./loginForm.scss";

export function LoginForm() {
	const navigate = useNavigate();
	const user = { username: "Grumpf", password: "grenouille" };
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		if (data.username === user.username && data.password === user.password) {
			const auth = true;
			localStorage.setItem("auth", auth);
			navigate("/", { replace: true });
		} else {
			console.log("Wrong username or password.");
		}
	};

	console.log(watch("username"), watch("password"));
	const auth = localStorage.getItem("auth");
	return auth === "true" ? (
		<Navigate to="/" replace={true} />
	) : (
		<main>
			<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
				<label className="login-form__label" htmlFor="username">
					Username
				</label>
				<input
					className="login-form__text-input"
					type="text"
					name="username"
					id="username"
					{...register("username", { required: true })}
				/>

				{errors.username && <span>This field is required</span>}

				<label className="login-form__label" htmlFor="password">
					Password
				</label>
				<input
					className="login-form__text-input"
					type="text"
					name="password"
					id="password"
					{...register("password", { required: true })}
				/>

				{errors.password && <span>This field is required</span>}
				<input
					className="login-form__submit-button"
					type="submit"
					value="Log In"
				/>
			</form>
		</main>
	);
}
