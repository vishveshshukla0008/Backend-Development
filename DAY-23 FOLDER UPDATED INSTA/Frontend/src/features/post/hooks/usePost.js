import React, { useContext } from 'react'
import { postContext } from '../postContext'
import toast from 'react-hot-toast';
import { getFeed } from '../services/post.api';

const usePost = () => {

  const context = useContext(postContext);
  const { loading, setLoading, feed, setFeed, post, setPost } = context;

  // creating hooks :

  const handleGetFeed = async () => {
    setLoading(true);
    const toastId = toast.loading('Loading Feed...');
    try {
      const res = await getFeed();
      setFeed(res.feed);
    } catch (error) {
      toast.error(error.res.data.message);
    } finally {
      toast.dismiss(toastId)
      setLoading(false);
    }
  }

  return { handleGetFeed, loading, feed }
}

export default usePost