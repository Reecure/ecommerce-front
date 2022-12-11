type FetcherParams = {
  query: string;
};

type FetcherRes<T> = { data: T };

const fetchApi = async <T>({
  query,
}: FetcherParams): Promise<FetcherRes<T>> => {
  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    throw new Error();
  }
  return { data };
};

export default fetchApi;
