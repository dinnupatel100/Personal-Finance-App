import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import image from "./Designer.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .max(20, "first name must be at most 20 characters")
    .required("first name is required"),
  lastName: yup
    .string()
    .max(20, "last name must be at most 20 characters")
    .required("last name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
});

const SignUp = () => {
  // const navigate = useNavigate()
  const onSubmit = async(values:any) =>{
    console.log(values)
    // const {data, error, isPending} = useQuery({ 
    //   queryKey: ['todos'],
    //   queryFn: async() => {
    //       const res = await axios.post("url", {JSON.stringify(values)});
    //   },
    // }) 
  }

  return (
    <div className="Signup" 
      style={{width: "100%",
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-1 flex-col justify-center pt-28 px-12 lg:px-8 w-1/3">
        <h2 className="font-bold text-2xl text-center">
          Sign up to your account
        </h2>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="">
            <div className="mb-4 mt-10">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Field
                type="text"
                className="bg-transparent border-solid border-2 border-gray-400 shadow appearance-none rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Field
                type="text"
                className="bg-transparent border-solid border-2 border-gray-400 shadow appearance-none rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                className="bg-transparent border-solid border-2 border-gray-400 shadow appearance-none rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type="password"
                className="bg-transparent border-solid border-2 border-gray-400 shadow appearance-none rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:"
                id="password"
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <p>Already have an account?</p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
