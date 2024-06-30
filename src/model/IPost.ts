export interface IPost {
    id:number,
    title: string,
    body: string,
    tags: [
       string
    ],
    reactions: number,
    userId: number
}
