import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson ";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const { avatar_url, name, company, bio } = user;
  return (
    <>
      <img src={avatar_url} />
      <h4>{bio}</h4>
      <h4>{name}</h4>
    </>
  );
};
export default MultipleReturnsFetchData;
