import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Loader from '../Loader';
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }], // added correctly
    [{ align: [] }], // added correctly
  ],
};

function Editor({isLoading, setIsLoading}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  return (
    <>
    
    {isLoading ? <Loader /> : 
    (<div className="h-screen w-full ">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-screen flex items-center justify-center">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue} 
            className="h-full w-full"
            modules={modules}
          />
        </div>
      </div>
    </div>)}
    </>
  );
}

export default Editor;
