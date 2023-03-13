import { IsArray, IsNotEmpty, IsObject } from "class-validator";

export class courseDto {
    @IsNotEmpty()
    Name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    texta: string;
    
    @IsNotEmpty()
    textb: string;

    @IsNotEmpty()
    videoLink: string;

    @IsNotEmpty()
    audioLink: string;

    @IsNotEmpty()
    @IsArray()
    extra: object;
}

