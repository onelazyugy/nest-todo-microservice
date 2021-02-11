import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TodoDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;
    
    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;
}