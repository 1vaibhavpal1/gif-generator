import React, { useState } from 'react'
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

export const Tag = () => {
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const[ loading, setLoading] = useState(true);

    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const ImageSource = data.data.images.downsized_large.url;
    //     setGif(ImageSource)
    //     setLoading(false)
    // }
    // useEffect(()=> {
    //     fetchData();
    // },[])
    // function clickHandler(){
    //     fetchData();
    // }
    const { gif, loading, fetchData } = useGif(tag);
    return (
        <div className="w-1/2 min-h-[450px] p-7 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
          <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
          {
            loading ? (<Spinner />) : (<img src= {gif} width="450" />)
          }
    
          <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />
    
          <button
            onClick={() => fetchData(tag)}
            className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
          >
            Generate
          </button>
        </div>
      );
    };

//useGIF tag babbar se seekha hia shaam ko implement kr denge usme fetchData me tag alaga se pass krna pdega abi videp se seekha

