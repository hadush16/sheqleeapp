// export default function Select({ placeholder, options = [], ...props }) {
//   return (
//     <select
//       className="w-full rounded-[11px] px-4 py-[17px] bg-[#DFDFDF] "
//       {...props}
//     >
//       <option value="">{placeholder}</option>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// }
export default function Select({ placeholder, options = [], ...props }) {
  return (
    <div className="mt-2 flex items-center bg-[#DFDFDF] rounded-[11px] overflow-hidden px-[23px] py-[18px] w-full">
      <select
        className="w-full bg-transparent outline-none text-[16px] sm:text-[23px] text-[#444444] font-kantumruy"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
