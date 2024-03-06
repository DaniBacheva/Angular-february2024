import { Post } from "./post"
import { User } from "./userId"

export interface Theme {
    
        subscribers: string[],
        posts: any, //string[] | Post[],
        _id: string,
        themeName:string,
        userId: User,
        created_at:string,
        updatedAt: string,
        __v: number
    }
