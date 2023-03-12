import { useGetPostsQuery } from "./api";

export default function App() {
  const { isLoading, data, isError } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error!</div>;
  } else {
    return <div className="App">{data.post}</div>;
  }
}
