import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import LoginForm from "@/components/clientPages/loginForm";
import Link from "next/link";
import SignupForm from "@/components/clientPages/signupForm";

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-[#150026] to-black">
      <Card className="w-full max-w-md mx-4 bg-transparent border-purple-950 shadow-2xl z-10">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-violet-200 to-violet-100 bg-clip-text text-transparent">
            Create an Account
          </CardTitle>
          <CardDescription className="text-violet-200/60">
            Fill in the details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignupForm />
        </CardContent>
        <div className="flex items-center justify-center space-x-1 mb-5 text-sm">
          <span className="text-violet-200/60">Already have an account?</span>
          <Link href={"/auth/login"}>
            <button className="text-violet-400 hover:text-violet-300 hover:underline transition-colors">
              Login
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
