"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useForm from "@/hooks/useForm";
import { FormEvent } from "react";

const SignupForm = () => {
  const { errors, formData, handleChange, validate } = useForm('signup');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-1 max-w-sm mx-auto">
      <div className="space-y-1">
        <label
          className="text-xs font-medium text-violet-200/80"
          htmlFor="username"
        >
          username
        </label>
        <Input
          type="username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
          className="w-full border-purple-950 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-700 focus:ring-violet-700 text-sm px-3 py-2"
        />
        {errors.username && <p className="text-xs text-red-500">{errors.username}</p>}
      </div>
      <div className="space-y-1">
        <label
          className="text-xs font-medium text-violet-200/80"
          htmlFor="email"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border-purple-950 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-700 focus:ring-violet-700 text-sm px-3 py-2"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-1 pb-5">
        <label
          className="text-xs font-medium text-violet-200/80"
          htmlFor="password"
        >
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border-purple-950 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-700 focus:ring-violet-700 text-sm px-3 py-2"
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#380e5a] hover:bg-[#501382] text-white transition-colors text-sm py-2"
      >
        Sign in
      </Button>
    </form>
  );
};

export default SignupForm;