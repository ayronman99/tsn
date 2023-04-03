
type PostsDataTypes = {
    id: string;
    image: string;
    likes: number;
    tags: string[];
    text: string;
    publishDate: string;
    owner: {
        id: string;
        title: string;
        firstName: string;
        lastName: string;
        picture: string;
    }
}

type CommentsDataTypes = {
    id: string;
    message: string;
    owner: {
        id: string;
        title: string;
        firstName: string;
        lastName: string;
        picture: string;
    }
    post: string;
    publishDate: string;
}

interface PostsData {
    data: PostsDataTypes[];
    limit?: number;
    page?: number;
    total?: number;
}

interface CommentsData {
    data: CommentsDataTypes[];
    limit?: number;
    page?: number;
    total?: number;
}
interface axiosFetchTypeProps<T> {
    url: string;
    method?: AxiosRequestConfig["method"];
    headers?: AxiosRequestConfig["headers"];
    data?: AxiosRequestConfig["data"];
    initialData?: T;
}