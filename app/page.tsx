"use client";

import dynamic from "next/dynamic";

// Can't use @next/navigation redirect() in static exports
// So instead we use Browser `location` API, but we have to prevent the page from pre-rendering

// Client Component that does the redirect
const RedirectComponent = () => {
  location.replace("v1");
  return null;
};

// export the Component dynamically, with SSR (pre-rendering) disabled, as the Page
export default dynamic(() => Promise.resolve(RedirectComponent), {
  ssr: false,
});
