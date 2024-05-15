import React, { userState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/UserSlice";

export const Login = () => {

    const [email, setEmail] = userState('');
    const [password, setPassword] = userState('');

    const dispatch = useDispatch();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        let userCredentials={
            email, password
        }
        dispatch(loginUser(userCredentials));
    }

  return (
    <form className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleLoginEvent}>
      <label className="flex">
        Email
        <input
          type="email"
          className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
      </label>
      <label className="flex">
        Senha
        <input
          type="password"
          className="mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={password} onChange={(e)=>setPassword(e.target.value)})}
        />
      </label>
      <br/>
      <button
        type="submit"
        className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        LOGIN
      </button>
    </form>
  );
};
