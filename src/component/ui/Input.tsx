import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";
type InputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  className?: string;
  disabled?: boolean;
};
export const Input = ({
  register,
  error,
  name,
  placeholder,
  type,
  label,
  className,
  disabled,
}: InputProps) => {
  return (
    <div className={className}>
      {label && <p className="mb-10">{label}</p>}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className="outline-none block w-full p-8 text-white border border-white-300 rounded-lg bg-[#333]  focus:ring-blue-500 focus:border-blue-500 "
        {...register(name)}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
