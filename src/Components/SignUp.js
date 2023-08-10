import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const SignUp = () => {
    const [login, setLogin] = useState({ name: "", email: "", password: "" })

    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/create", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        const json = await response.json()
        console.log(json)
        setLogin({ name: "", email: "", password: "" })
    }

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={handleSignup} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input onChange={onChange} value={login.name} size="lg" id="name" name="name" label="Name" required/>
                    <Input onChange={onChange} value={login.email} size="lg" id="email" name="email" label="Email" required/>
                    <Input onChange={onChange} value={login.password} minLength={5} type="password" id="password" name="password" size="lg" label="Password" required/>
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button type="submit" className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
export default SignUp