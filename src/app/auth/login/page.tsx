import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-[#150026] to-black">
      <Card className="w-full max-w-md mx-4 bg-transparent border-purple-950 shadow-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-100 bg-clip-text text-transparent">
            Welcome back
          </CardTitle>
          <CardDescription className="text-violet-200/60">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-violet-200/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full bg-violet-950/50 border-violet-800/50 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-700 focus:ring-violet-700"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-violet-200/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full bg-violet-950/50 border-violet-800/50 text-violet-100 placeholder:text-violet-400/50 focus:border-violet-700 focus:ring-violet-700"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-violet-700 bg-violet-950/50 text-violet-600 focus:ring-violet-700"
            />
            <label htmlFor="remember" className="text-sm text-violet-200/60">
              Remember me
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-colors">
            Sign in
          </Button>
          <div className="flex items-center justify-center space-x-1 text-sm">
            <span className="text-violet-200/60">Dont have an account?</span>
            <button className="text-violet-400 hover:text-violet-300 hover:underline transition-colors">
              Sign up
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
