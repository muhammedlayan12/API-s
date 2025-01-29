"use client"

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

{/*"use client";

import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({ id: "", name: "", price: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, id: +formData.id, price: +formData.price }),
    });
    setMessage(res.ok ? "Product added!" : "Failed to add product.");
    if (res.ok) setFormData({ id: "", name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      {["id", "name", "price"].map((field) => (
        <input
          key={field}
          type={field === "name" ? "text" : "number"}
          placeholder={`Product ${field}`}
          value={(formData as any)[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="w-full border rounded-lg p-2"
          required
        />
      ))}
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Add Product</button>
      {message && <p className="text-center mt-2">{message}</p>}
    </form>
  );
};

export default AddProduct;
*/}



// import { useState } from "react";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     price: "",
//     description: "", // Description input
//     image: null as File | null, // Image file state
//   });

//   const [message, setMessage] = useState("");

//   // Handle image file change
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({ ...formData, image: e.target.files[0] });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Prepare FormData
//     const formDataObj = new FormData();
//     formDataObj.append("id", formData.id);
//     formDataObj.append("name", formData.name);
//     formDataObj.append("price", formData.price);
//     formDataObj.append("description", formData.description); // Include description
//     if (formData.image) formDataObj.append("image", formData.image); // Include image if present

//     // Send the data to the API endpoint
//     const res = await fetch("/api/products", {
//       method: "POST",
//       body: formDataObj,
//     });

//     const result = await res.json();
//     setMessage(res.ok ? result.message : result.error);

//     if (res.ok) {
//       setFormData({ id: "", name: "", price: "", description: "", image: null }); // Clear form on success
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
//       {["id", "name", "price", "description"].map((field) => (
//         <input
//           key={field}
//           type={field === "price" ? "number" : "text"}
//           placeholder={`Product ${field}`}
//           value={(formData as any)[field]}
//           onChange={(e) =>
//             setFormData({ ...formData, [field]: e.target.value })
//           }
//           className="w-full border rounded-lg p-2"
//           required
//         />
//       ))}

//       {/* Image input */}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="w-full border rounded-lg p-2"
//         required
//       />

//       <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//         Add Product
//       </button>
//       {message && <p className="text-center mt-2">{message}</p>}
//     </form>
//   );
// };

// export default AddProduct;


import Link from "next/link";





function page() {
  return (
    <div className='h-[100vh] gap-6 flex flex-col justify-center items-center'><div>
      <h1 className='text-center font-bold'>Hello Welcome To Layan ki API</h1></div>
      <div>
      <Link className="py-2 px-8 text-white bg-green-600" href="https://layan-ki-api.vercel.app/api/products">Get API</Link></div></div>
  )
}

export default page;