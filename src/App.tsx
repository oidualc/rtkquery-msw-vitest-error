import { useGetPostsQuery } from "./api";

export default function App() {
  const { isLoading, data } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <div className="App">{data}</div>;
  }
}
