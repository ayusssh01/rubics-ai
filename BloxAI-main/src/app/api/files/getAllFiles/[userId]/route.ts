import { mongoDB } from "@/lib/MongoDB";
import { AuthMiddleware } from "@/Middleware/AuthMiddleware";
import FileModel from "@/models/file";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
  ) {
  
    const result = await AuthMiddleware(request);
  
      if (result instanceof NextResponse) {
          
          try {
            
              const { userId } = params;
  
              if (!userId) return new Response("Parameters missing!!", { status: 401 });
  
              await mongoDB();
              
              const files = await FileModel.find({createdBy:userId}).populate("createdBy")
        
              return NextResponse.json(files,{ status: 200 });
          } catch (err) {
              return NextResponse.json(`Err : ${err}`, {status:500});
          }
      } else {
        return result;
      }
  }