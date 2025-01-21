import { SignupInput } from "@lokeshsaini/medium"
import axios from "axios";
import { ChangeEvent, ChangeEventHandler, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({type}:{type: "signup" | "signin"})=>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}`,postInputs);
        const jwt = response.data
       localStorage.setItem("token", jwt)
        navigate("/blogs")
    }


    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">
                <div className="font-bold text-3xl">
                   {type==="signin"?"Sign in to Account":"Create an Account"} 
                </div>
                <div className="text-slate-500">
                    {type=== "signin"? "Don't have an account" :"Already have an Account?"}
                    <Link to={ type==="signin"? "/":"/signin"} className="pl-2 underline">{type==="signin"? "Sign Up": "Sign in"}</Link>
                </div>
                {type==="signin"? null:<LabelledInput label="Name" placeholder="Lokesh Saini..." onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
                }}/>}
                
                <LabelledInput label="email" placeholder="lokesh@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        email:e.target.value
                    })
                }} />
                <LabelledInput label="Password" type="password" placeholder="Abc#n@1!23" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password:e.target.value
                    })
                }} />
                
                <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=== "signup"? "Sign Up" : "Sign in"}</button>
                

            </div>
            
            
        </div>
    </div>
}

interface LabelledInputType{
    label:string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}:LabelledInputType){
    return <div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    </div>
}