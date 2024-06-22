import { PropsWithChildren, createContext, useContext } from "react";

type PostCardContext = {
  post: Post;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

const usePostCardContext = () => {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }
  return context;
};

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

interface Props extends PropsWithChildren {
  post: Post;
}

export const PostCard = ({ post, children }: Props) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-lg bg-gray-800 p-4 shadow-md">
        {children}
      </div>
    </PostCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  return <h2 className="text-xl font-semibold text-white">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();
  return <p className="text-gray-300">{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();
  return <p className="text-sm text-gray-500">By {post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex flex-row gap-2 mt-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
        Read More
      </button>
      <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
        Comments
      </button>
    </div>
  );
};
