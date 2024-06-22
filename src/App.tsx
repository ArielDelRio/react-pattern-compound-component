import "./App.css";
import { PostCard } from "./components/PostCard";

export default function HomeFeedScreen() {
  return (
    <>
      <PostCard
        post={{
          id: 1,
          title: "Hello, World!",
          content: "This is the first post pon our new blog.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>
    </>
  );
}
