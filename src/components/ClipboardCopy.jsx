import {useState} from 'react';
import {MdOutlineContentCopy} from 'react-icons/md';

export default function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
    const handleCopyClick = () => {
    copyTextToClipboard(copyText)
    .then(() => {
      // If successful, update the isCopied state value
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
  }
    return (
        <div onClick={handleCopyClick}>
         <h1><MdOutlineContentCopy/></h1>
          <span>{isCopied ? 'Copied! ✅' : ''}</span>
        </div>
    );
  }