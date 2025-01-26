import { NextResponse } from "next/server";
import productData from "../../../../libs/productDb";

export const GET = async () => {

  return NextResponse.json(productData);
}; 







 


// export const POST = async (request:NextResponse) => {
//   const body = await request.json();
//   productData.push(body); 
//   return NextResponse.json({ message: "Product added successfully", body });
// };



export const POST = async (request: Request) => {
  const formData = await request.formData();

  type Product={
    id: number;
    name: string;
    price: number;
    image: string;
    description:string;
  }


  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as File;
  const description = formData.get("description") as string;

  const parsedId = Number(id);
  const parsedPrice = Number(price);
  
  if (!id || !name || !price || !image || !description || isNaN(parsedId) || isNaN(parsedPrice)) {
    return NextResponse.json(
      { error: "All fields (id, name, price, image, description) are required" },
      { status: 400 }
    );
  }

  
  const imageUrl = `/uploads/${image.name}`;

  const newProduct: Product = {
    id: parsedId,
    name,
    price: parsedPrice,
    image: imageUrl,
    description,
  };
  
  productData.push(newProduct);

  return NextResponse.json({ message: "Product added successfully" });
};

