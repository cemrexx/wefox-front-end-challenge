export interface PostsType {
        id: number;
        title: string;
        content: string;
        lat: string;
        long: string;
        image_url: string;
        created_at: Date;
        updated_at: Date;
}

export type TPost = {
        title: string;
        content: string;
        lat?: string;
        long?: string;
        image_url?: string;
        id: number
      };
export type TPosts = TPost[];
      
export type TFormData = TPost;



