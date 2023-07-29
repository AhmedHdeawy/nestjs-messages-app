import { IsString, MaxLength, MinLength } from "class-validator";


export class CreateMessageDto {
    @IsString()
    @MaxLength(20)
    @MinLength(3)
    content: string
}