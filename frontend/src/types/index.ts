

{/* this is a TypeScript types definition file.

It does not run anything — it only defines the shape (structure) of data in your project.*/}
import type React from "react";

export interface UploadZoneProps{
    label: string;
    file: File | null;
    onClear: ()=> void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export interface User{
    id?: string;
    name?: string;
    email?: string;
}

export interface Project{
    id: string;
    name?: string;
    userId?: string;
    user?: User;
    productName: string;
    productDescription?: string;
    userPrompt?: string;
    aspectRatio: string;
    targetLength?: number;
    generatedImage?: string;
    generatedVideo?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    uploadedImages: string[];
}

{/*Required fields where (?) is not used :

These MUST exist:

id

productName

aspectRatio

isGenerating

isPublished

createdAt

uploadedImages

If missing → TypeScript error.

Optional fields (?)

These may or may not exist:

name

userPrompt

generatedVideo

error

etc.
*/}