import toast from "react-hot-toast";
import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) toast.error(error.message);

  console.log(data.user.role);
  return data;
}
