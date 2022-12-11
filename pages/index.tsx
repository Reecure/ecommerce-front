import React, { useEffect } from "react";
import { Layout } from "../components/common";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProdsById } from "../redux/prodsSlice/prodsSlice";

import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const { prods, status } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProdsById());
  }, []);

  return (
    <Layout>
      {status === "loading" ? (
        <div>loading</div>
      ) : (
        <ul>{JSON.stringify(prods)}</ul>
      )}
    </Layout>
  );
};

Home.Layout = Layout;

export default Home;
