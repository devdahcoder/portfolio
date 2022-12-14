import { useField } from 'formik';
import React from 'react'

type Props = {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    labelText?: string;
    containerClassName?: string;
    mainContainerClassName?: string;
    labelClassName?: string;
    containerStyle?: React.CSSProperties;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    style?: React.CSSProperties;
    isTyping?: boolean;
}

const Input = (props: Props) => {

  const { className, type, placeholder, onChange, value, name, style, labelText, containerClassName,
            isTyping, containerStyle, labelClassName,
            mainContainerClassName
    } = props;
    

  return (
    <div className={`${mainContainerClassName}`}>
      <div className={`text-transparent bg-clip-text 
                            bg-gradient-to-t from-gray-700 via-gray-900 to-black 
                            dark:bg-radial-at-l dark:from-white dark:via-slate-200 dark:to-gray-400 ${labelClassName}`}>
          <label htmlFor={name}>{labelText}</label>
      </div>
      <div 
        style={containerStyle}
        className={`flex flex-row items-center text-xs font-medium relative max-h-fit overflow-y-hidden ${containerClassName}`}
      >
        <input
            name={name}
            id={`${name}-input`}
            type={type && type ? type : 'text'}
            className={`w-full bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none autofill:!bg-amber-400 ${className}`}
            style={style}
            placeholder={placeholder ?? ""}
            onChange={onChange}
            value={value}
        />
      </div>
    </div>
  )
}

export default Input