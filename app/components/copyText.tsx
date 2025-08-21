'use client'

// export default async (props: {text: string}) => await navigator.clipboard.writeText(props.text)

// components/CopyToClipboardButton.js
import { ReactNode, useState } from 'react';

const CopyToClipboardButton = ({ textToCopy, className, children }:{ textToCopy:string, className?:string, children?: ReactNode }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button onClick={handleCopy} className={`${isCopied ? 'text-violet-300' : ''} ${className} justify-around min-w-40`}>
      {isCopied ? 'Скопировано' : children}
    </button>
  );
};

export default CopyToClipboardButton;