
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";


export default function ProtectedRoute({children}){
      const { isSignedIn, isLoaded } = useUser();


      if (!isLoaded) return <p>Loading...</p>;

      if(!isSignedIn){
         return <Navigate to="/signup" />;
      }

       return children;
}