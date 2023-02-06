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
		<form className="login-form page" onSubmit={handleSubmit(onSubmit)}>
			<label>Username</label>
			<input
				type="text"
				name="username"
				{...register("username", { required: true })}
			/>
			{errors.username && <span>This field is required</span>}
			<label>Password</label>
			<input
				type="text"
				name="password"
				{...register("password", { required: true })}
			/>
			{errors.password && <span>This field is required</span>}
			<input type="submit" value="Log In" />
		</form>
	);
}
