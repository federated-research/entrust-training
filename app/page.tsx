"use client";
// import { RedirectType, redirect } from "next/navigation";

export default function Home() {
  // redirect("v1", RedirectType.replace); // this is the server way, but we need the same effect when statically exported...

  location.replace("v1"); // Make the page a client component in order to use the Browser `location` API.
}
