// // import { NextResponse } from "next/server";
// // import productData from "../../../../libs/productDb";

// export const GET = async () => {

//   return NextResponse.json(productData);
// }; 







 


// // export const POST = async (request:NextResponse) => {
// //   const body = await request.json();
// //   productData.push(body); 
// //   return NextResponse.json({ message: "Product added successfully", body });
// // };



// export const POST = async (request: Request) => {
//   const formData = await request.formData();

//   type Product={
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     description:string;
//   }


//   const id = formData.get("id") as string;
//   const name = formData.get("name") as string;
//   const price = formData.get("price") as string;
//   const image = formData.get("image") as File;
//   const description = formData.get("description") as string;

//   const parsedId = Number(id);
//   const parsedPrice = Number(price);
  
//   if (!id || !name || !price || !image || !description || isNaN(parsedId) || isNaN(parsedPrice)) {
//     return NextResponse.json(
//       { error: "All fields (id, name, price, image, description) are required" },
//       { status: 400 }
//     );
//   }

  
//   const imageUrl = `/uploads/${image.name}`;

//   const newProduct: Product = {
//     id: parsedId,
//     name,
//     price: parsedPrice,
//     image: imageUrl,
//     description,
//   };
  
//   productData.push(newProduct);

//   return NextResponse.json({ message: "Product added successfully" });
// };


// // import { NextRequest, NextResponse } from "next/server";
// // import productData from "../../../../libs/productDb";
// // import Cors from "nextjs-cors";

// // export const GET = async (request: NextRequest) => {
// //   // Apply CORS to the GET request
// //   await Cors(request, {
// //     methods: ['GET', 'POST'], // Allow GET and POST methods
// //     origin: '*', // Allow all origins (you can replace '*' with specific origins like 'https://yourdomain.com')
// //   });

// //   return NextResponse.json(productData);
// // };

// // export const POST = async (request: NextRequest) => {
// //   // Apply CORS to the POST request
// //   await Cors(request, {
// //     methods: ['GET', 'POST'],
// //     origin: '*', // Again, replace '*' with specific allowed domains
// //   });

// //   const formData = await request.formData();

// //   type Product = {
// //     id: number;
// //     name: string;
// //     price: number;
// //     image: string;
// //     description: string;
// //   };

// //   const id = formData.get("id") as string;
// //   const name = formData.get("name") as string;
// //   const price = formData.get("price") as string;
// //   const image = formData.get("image") as File;
// //   const description = formData.get("description") as string;

// //   const parsedId = Number(id);
// //   const parsedPrice = Number(price);

// //   if (!id || !name || !price || !image || !description || isNaN(parsedId) || isNaN(parsedPrice)) {
// //     return NextResponse.json(
// //       { error: "All fields (id, name, price, image, description) are required" },
// //       { status: 400 }
// //     );
// //   }

// //   const imageUrl = `/uploads/${image.name}`;

// //   const newProduct: Product = {
// //     id: parsedId,
// //     name,
// //     price: parsedPrice,
// //     image: imageUrl,
// //     description,
// //   };

// //   productData.push(newProduct);

// //   return NextResponse.json({ message: "Product added successfully" });
// // };


// import { NextResponse } from "next/server";

import productData from "../../../../libs/productDb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", 
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const GET = async () => {
  return new Response(JSON.stringify(productData), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
};

// export const POST = async (request:Request) => {
//   const formData = await request.formData();

//   type Product = {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     description: string;
//   };

//   const id = formData.get("id") as string;
//   const name = formData.get("name") as string;
//   const price = formData.get("price") as string;
//   const image = formData.get("image") as File;
//   const description = formData.get("description") as string;

//   const parsedId = Number(id);
//   const parsedPrice = Number(price);

//   if (!id || !name || !price || !image || !description || isNaN(parsedId) || isNaN(parsedPrice)) {
//     return new Response(
//       JSON.stringify({ error: "All fields (id, name, price, image, description) are required" }),
//       { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//     );
//   }

//   const imageUrl = `/uploads/${image.name}`;

//   const newProduct: Product = {
//     id: parsedId,
//     name,
//     price: parsedPrice,
//     image: imageUrl,
//     description,
//   };

//   productData.push(newProduct);

//   return new Response(
//     JSON.stringify({ message: "Product added successfully" }),
//     { headers: { ...corsHeaders, "Content-Type": "application/json" } }
//   );
// };

// // Handle preflight OPTIONS requests
// export const OPTIONS = async () => {
//   return new Response(null, {
//     headers: corsHeaders,
//   });
// };
