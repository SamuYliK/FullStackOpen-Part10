import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CHECK_IF_SIGNED_IN } from '../graphql/queries';

const useSignInCheck = () => {
  const [user, setUser] = useState();
  const { data } = useQuery(CHECK_IF_SIGNED_IN, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) setUser(data.me);
  }, [data]);

  return { user }; 
}

export default useSignInCheck;
